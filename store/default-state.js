import asaComponents from './asa-components'
import rauxaRadarComponents from './rauxa-radar-components'
import alaska from './alaska'
import rauxaRadar from './rauxa-radar'

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
    list: [rauxaRadar, alaska, { id: 'test', name: 'Test Client' }]
  },
  templates: {
    list: [
      { id: 'HeroTwoCol', name: 'Hero Two Col', clientId: 'test', tag: 'Two Col' },
      { id: 'HeroOneCol', name: 'Hero One Col', clientId: 'test', tag: 'Single Col' },
      { id: 'ExecLetter', name: 'Exec Letter', clientId: 'alaska', tag: 'Letters', img: 'exec-letter.png' },
      { id: 'MCKOffer', name: 'ASA BAU', clientId: 'alaska', tag: 'Internal', img: 'mck-offer.png' },
      { id: 'RauxaRadar', name: 'Rauxa Radar', clientId: 'rauxa', tag: 'Rauxa Radar', img: 'rauxa-radar_thumb.png' },
      { id: 'RauxaAll', name: 'Rauxa All', clientId: 'rauxa', tag: 'Rauxa All' },
      { id: 'XIO', name: 'XIO', clientId: 'rauxa', tag: 'XIO' },
    ]
  },
  emails: {
    list: null
  },
  components: {
    list: [
      ...asaComponents,
      ...rauxaRadarComponents,
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
