import { move, getUID } from '@/shared/utils'
export const state = () => ({
  editMode: true,
  currentEmail: {
    name: '',
    template: null,
    containers: [],
    assets: []
  },
  templates: {
    list: ['HeroTwoCol', 'HeroOneCol']
  },
  emails: {
    list: []
  },
  components: {
    list: [
      {
        name: 'Image',
        type: 'hero'
      },
      {
        name: 'TextHero',
        type: 'hero'
      },
      {
        name: 'Body',
        type: 'main'
      },
      {
        name: 'Card',
        type: 'main'
      }
    ]
  }
})

export const emailKey = 'CDE-EMAILS'
export const actions = {
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
          resolve(emails)
        } else {
          resolve(emails)
        }
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
          resolve(emails)
        } else {
          resolve(emails)
        }
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
          resolve(emails)
        } else {
          resolve(emails)
        }
      })
      commit('setEmails', updatedEmails)
    } catch (err) {
      console.error(err)
    }
  }
}
const getContainerToUpdate = (state, containerName) => {
  return state.currentEmail.containers.find(
    container => container.name === containerName
  )
}
export const mutations = {
  setEmails(state, emails) {
    state.emails.list = emails
  },
  addAsset(state, newAsset) {
    state.currentEmail.assets = [
      ...state.currentEmail.assets.filter(asset => asset.name !== newAsset.name),
      newAsset
    ]
  },
  updateComponent(state, update) {
    const containerToUpdate = getContainerToUpdate(state, update.name)
    containerToUpdate.components = [
      ...containerToUpdate.components.map(component =>
        component.id === update.component.id ? update.component : component
      )
    ]
  },
  newComponent(state, containerName) {
    const containerToUpdate = getContainerToUpdate(state, containerName)
    containerToUpdate.components = [
      ...containerToUpdate.components,
      { id: getUID() }
    ]
  },
  removeComponent(state, { containerName, id }) {
    const containerToUpdate = getContainerToUpdate(state, containerName)
    if (containerToUpdate.components.length > 1) {
      containerToUpdate.components = [
        ...containerToUpdate.components.filter(component => component.id !== id)
      ]
    } else {
      containerToUpdate.components = [{ id }]
    }
  },
  moveComponent(state, { containerName, index, delta }) {
    const containerToUpdate = getContainerToUpdate(state, containerName)
    containerToUpdate.components = move(
      containerToUpdate.components,
      index,
      delta
    )
  },
  setContainers(state, containers) {
    state.currentEmail = {
      ...state.currentEmail,
      containers
    }
  },
  setCurrentEmail(state, email) {
    state.currentEmail = email
  },
  clearCurrentEmail(state) {
    state.currentEmail = {
      name: '',
      template: null,
      containers: [],
      assets: []
    }
  },
  toggleEditMode(state) {
    state.editMode = !state.editMode
  }
}
