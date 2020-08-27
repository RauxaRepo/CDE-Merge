import { getUID } from '@/shared/utils'

export const libComponentMixin = {
  props: ['container', 'existingComponent'],
  data: function() {
    return {
      id: null
    }
  },
  watch: {
    fields: {
      deep: true,
      handler: function(fields) {
        this.updateComponent({
          $store: this.$store,
          container: this.container,
          name: this.$options.name,
          fields
        })
      }
    }
  },
  mounted: function() {
    this.id = getUID(this.existingComponent)
    this.updateComponent({
      $store: this.$store,
      container: this.container,
      name: this.$options.name,
      fields: this.fields
    })
  },
  methods: {
    updateComponent({ $store, container, name, fields }) {
      $store.commit('updateComponent', {
        name: container,
        component: {
          name,
          fields: { ...fields }
        }
      })
    }
  }
}
