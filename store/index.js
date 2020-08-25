export const state = () => ({
  editMode: true,
  currentTemplate: {
    containers: []
  },
  templates: {
    list: ['HeroOneCol']
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
export const mutations = {
  updateContainer(state, container) {
    state.currentTemplate = {
      ...state.currentTemplate,
      containers: {
        ...state.currentTemplate.containers,
        [container.name]: container.component
      }
    }
  },
  clearContainer(state, container) {
    state.currentTemplate = {
      ...state.currentTemplate,
      containers: {
        ...state.currentTemplate.containers,
        [container.name]: null
      }
    }
  },
  toggleEditMode(state) {
    state.editMode = !state.editMode
  }
}
