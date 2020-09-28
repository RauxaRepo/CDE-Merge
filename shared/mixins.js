import { getUID } from '@/shared/utils'

export const templateMixin = {
  methods: {
    addSelector(containerName) {
      this.containers = this.containers.map(container => {
        return container.name === containerName
          ? {
              name: containerName,
              selectors: [
                ...container.selectors,
                {
                  id: getUID(),
                  visible: true
                }
              ]
            }
          : container
      })
    }
  }
}
export const libComponentMixin = {
  props: ['containerName', 'existingComponent', 'component'],
  watch: {
    fields: {
      deep: true,
      handler: function(fields) {
        this.updateComponent(fields)
      }
    }
  },
  created: function() {
    if (this.component && this.component.name && this.component.fields) {
      this.fields = this.component.fields
    } else {
      this.updateComponent(this.fields)
    }
  },
  methods: {
    updateComponent(fields) {
      this.$store.commit('updateComponent', {
        name: this.containerName,
        component: {
          id: this.component.id,
          name: this.$options.name,
          fields: { ...fields }
        }
      })
    }
  }
}
export const importMixin = {
  methods: {
    handleInput(file) {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onloadend = () => {
        const json = JSON.parse(reader.result)
        delete json.id
        this.$store.dispatch('saveEmail', {
          newEmail: json,
          updateEmails: true
        })
      }
    }
  }
}
