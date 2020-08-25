<template>
  <div class="component-container" :class="{ edit: $store.state.editMode }">
    <div v-if="$store.state.editMode" class="selector">
      <div v-if="selectedComponent">
        <button @click="handleRemoveComponent">
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
      </div>
      <select v-else name="componentSelector" @change="handleComponentSelected">
        <option value="" />
        <option
          v-for="component in filteredComponentList"
          :key="component.name"
        >
          {{ component.name }}
        </option>
      </select>
    </div>
    <div v-if="selectedComponent">
      <div ref="templateContainer">
        <component :container="container" :is="componentInstance" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selectedComponent: null
    }
  },
  props: ['type', 'container'],
  methods: {
    handleComponentSelected: function(evt) {
      return (this.selectedComponent = evt.target ? evt.target.value : '')
    },
    handleRemoveComponent: function() {
      this.selectedComponent = null
      this.$store.commit('clearContainer', {
        name: this.container
      })
    }
  },
  computed: {
    componentInstance() {
      const name = this.selectedComponent
      if (!name) {
        return null
      }
      return () => import(`@/components/library/${name}`)
    },
    filteredComponentList() {
      return this.$store.state.components.list.filter(
        component => component.type === this.type
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.component-container {
  position: relative;
  min-height: 5rem;
  &.edit {
    border: 1px dashed $black;
  }
}
.selector {
  border-radius: 4px;
  background: white;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  button {
    background: none;
    border: none;
  }
}
</style>
