import asaComponents from './asa-components'
import alaska from './alaska'

export default {
  presetTemplate: 'ExecLetter',
  multiComponents: false,
  editMode: true,
  currentEmail: {
    name: '',
    template: null,
    containers: [],
    assets: []
  },
  clients: {
    list: [alaska]
  },
  templates: {
    list: [
      { name: 'HeroTwoCol' },
      { name: 'HeroOneCol' },
      { name: 'ExecLetter', clientId: 'alaska' }
    ]
  },
  emails: {
    list: null
  },
  components: {
    list: [
      ...asaComponents,
      {
        name: 'SingleImage',
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
}
