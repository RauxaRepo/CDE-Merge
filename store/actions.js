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
  async saveEmail({ state, commit }, { newEmail, updateEmails }) {
    try {
      const savedEmail = await new Promise(resolve => {
        const existingEmails = window.localStorage.getItem(emailKey)
        const emailToCreate = { id: getUID(), ...newEmail }
        const emails = [
          ...(existingEmails ? JSON.parse(existingEmails) : []),
          emailToCreate
        ]
        if (!emails.length) {
          debugger
        } else {
          if (typeof window !== 'undefined') {
            window.localStorage.setItem(emailKey, JSON.stringify(emails))
          }
          resolve(emailToCreate)
        }
      })
      if (updateEmails) {
        commit('setEmails', [...state.emails.list, savedEmail])
      } else {
        // Clear state so it is retrieved by the list page
        commit('setEmails', null)
      }
    } catch (err) {
      console.error(err)
    }
  },
  async updateEmail({ commit }, updatedEmail) {
    try {
      await new Promise(resolve => {
        const existingEmails = window.localStorage.getItem(emailKey)
        const emails = (existingEmails ? JSON.parse(existingEmails) : []).map(
          email => {
            return email.id === updatedEmail.id ? updatedEmail : email
          }
        )
        if (!emails.length) {
          debugger
        } else {
          if (typeof window !== 'undefined') {
            window.localStorage.setItem(emailKey, JSON.stringify(emails))
          }
          resolve(emails)
        }
      })
      commit('setEmails', null)
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
