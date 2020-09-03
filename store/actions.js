import { getUID } from '@/shared/utils'
export const emailKey = 'CDE-EMAILS'
export default {
  async getEmail({ commit }, id) {
    try {
      const email = await new Promise(resolve => {
        if (typeof window !== 'undefined') {
          const emailsString = window.localStorage.getItem(emailKey)
          const emails = emailsString ? JSON.parse(emailsString) : []
          resolve(emails.find(email => email.id === id))
        } else {
          resolve(null)
        }
      })
      commit('setCurrentEmail', email)
    } catch (err) {
      console.error(err)
    }
  },
  async getEmails({ commit }) {
    try {
      const updatedEmails = await new Promise(resolve => {
        if (typeof window !== 'undefined') {
          const emails = window.localStorage.getItem(emailKey)
          resolve(emails ? JSON.parse(emails) : [])
        } else {
          resolve([])
        }
      })
      commit('setEmails', updatedEmails)
    } catch (err) {
      console.error(err)
    }
  },
  async saveEmail({ state, commit }, newEmail) {
    try {
      const updatedEmails = await new Promise(resolve => {
        const emails = [...state.emails.list, { id: getUID(), ...newEmail }]
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(emailKey, JSON.stringify(emails))
        }
        resolve(emails)
      })
      commit('setEmails', updatedEmails)
    } catch (err) {
      console.error(err)
    }
  },
  async updateEmail({ state, commit }, updatedEmail) {
    try {
      const updatedEmails = await new Promise(resolve => {
        const emails = state.emails.list.map(email => {
          return email.id === updatedEmail.id ? updatedEmail : email
        })
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(emailKey, JSON.stringify(emails))
        }
        resolve(emails)
      })
      commit('setEmails', updatedEmails)
    } catch (err) {
      console.error(err)
    }
  },
  async deleteEmail({ state, commit }, id) {
    try {
      const updatedEmails = await new Promise(resolve => {
        const emails = state.emails.list.filter(email => email.id !== id)
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(emailKey, JSON.stringify(emails))
        }
        resolve(emails)
      })
      commit('setEmails', updatedEmails)
    } catch (err) {
      console.error(err)
    }
  }
}
