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
  props: ['containerName', 'existingComponent', 'id'],
  watch: {
    fields: {
      deep: true,
      handler: function(fields) {
        this.updateComponent(fields)
      }
    }
  },
  mounted: function() {
    this.updateComponent(this.fields)
  },
  methods: {
    updateComponent(fields) {
      this.$store.commit('updateComponent', {
        name: this.containerName,
        component: {
          id: this.id,
          name: this.$options.name,
          fields: { ...fields }
        }
      })
    }
  }
}
