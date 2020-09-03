export default {
  presetTemplate: 'ExecLetter',
  multiComponents: false,
  editMode: true,
  currentEmail: {
    name: '',
    template: null,
    containers: [],
    assets: [],
  },
  templates: {
    list: ['HeroTwoCol', 'HeroOneCol', 'ExecLetter']
  },
  emails: {
    list: []
  },
  components: {
    list: [
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
      },
      {
        name: 'ASAExecLetterTitleBasedPrimary',
        type: 'asa-hero',
        text: 'Title Based Primary'
      },
      {
        name: 'ASAExecLetterImagePrimary',
        type: 'asa-hero',
        text: 'Image Primary'
      },
      {
        name: 'ASAExecLetterVideoPrimary',
        type: 'asa-hero',
        text: 'Video Primary'
      },
      {
        name: 'ASAExecLetterButton',
        type: 'asa-cta',
        text: 'Button'
      },
      {
        name: 'ASAExecLetterLink',
        type: 'asa-cta',
        text: 'Link'
      },
      {
        name: 'ASAExecLetterFooter',
        type: 'asa-footer',
        text: 'Footer'
      }
    ]
  }
}
