import { move, getUID } from '@/shared/utils'

const getContainerToUpdate = (state, containerName) => {
  return state.currentEmail.containers.find(
    container => container.name === containerName
  )
}

export default {
  setEmails(state, emails) {
    state.emails.list = emails
  },
  addAsset(state, newAsset) {
    state.currentEmail.assets = [
      ...state.currentEmail.assets.filter(
        asset => asset.name !== newAsset.name
      ),
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
