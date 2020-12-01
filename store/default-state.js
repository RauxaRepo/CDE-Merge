import asaComponents from './asa-components'
import alaska from './alaska'
import rauxa from './rauxa'

export default {
  presetTemplate: 'ExecLetter',
  multiComponents: false,
  editMode: true,
  editingId: null,
  previewMode: false,
  mobilePreview: false,
  currentClient: null,
  currentEmail: {
    name: '',
    template: null,
    containers: [],
    assets: []
  },
  clients: {
    list: [rauxa, alaska, { id: 'test', name: 'Test Client' }]
  },
  templates: {
    list: [
      { id: 'HeroTwoCol', name: 'Hero Two Col', clientId: 'test', tag: 'Two Col' },
      { id: 'HeroOneCol', name: 'Hero One Col', clientId: 'test', tag: 'Single Col' },
      { id: 'ExecLetter', name: 'Exec Letter', clientId: 'alaska', tag: 'Letters', img: 'exec-letter.png' },
      { id: 'MCKOffer', name: 'McKinsey Offer', clientId: 'alaska', tag: 'Offers', img: 'mck-offer.png' }
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
