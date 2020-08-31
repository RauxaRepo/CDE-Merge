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
  mounted: function() {
    if (this.component && this.component.name) {
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
