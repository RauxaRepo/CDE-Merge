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
  updateComponent(state, container) {
    state.currentTemplate = {
      ...state.currentTemplate,
      containers: {
        ...state.currentTemplate.containers,
        [container.name]: [
          ...state.currentTemplate.containers[container.name].filter(
            component => component.id !== container.component.id
          ),
          container.component
        ]
      }
    }
  },
  clearContainer(state, container) {
    state.currentTemplate = {
      ...state.currentTemplate,
      containers: {
        ...state.currentTemplate.containers,
        [container.name]: []
      }
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
