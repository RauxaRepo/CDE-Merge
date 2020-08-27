import { move, getUID } from '@/shared/utils'
export const state = () => ({
  editMode: true,
  currentTemplate: {
    containers: []
  },
  templates: {
    list: ['HeroTwoCol', 'HeroOneCol']
  },
  components: {
    list: [
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
const getContainerToUpdate = (state, containerName) => {
  return state.currentTemplate.containers.find(
    container => container.name === containerName
  )
}
export const mutations = {
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
    containerToUpdate.components = move(containerToUpdate.components, index, delta)
  },
  setContainers(state, containers) {
    state.currentTemplate = {
      ...state.currentTemplate,
      containers
    }
  },
  clearCurrentTemplate(state) {
    state.currentTemplate = {
      ...state.currentTemplate,
      containers: []
    }
  },
  toggleEditMode(state) {
    state.editMode = !state.editMode
  }
}
