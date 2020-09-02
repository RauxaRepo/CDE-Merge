<template>
  <div class="component-container" :class="{ edit: $store.state.editMode }">
    <div v-if="$store.state.editMode" class="selector">
      <select
        v-if="!selectedComponent"
        name="componentSelector"
        @change="handleComponentSelected"
      >
        <option value="" />
        <option
          v-for="component in filteredComponentList"
          :key="component.name"
        >
          {{ component.name }}
        </option>
      </select>
      <div>
        <button @click="handleRemoveComponent">
          <b-icon icon="delete"> </b-icon>
        </button>
      </div>
      <div>
        <button :disabled="index === 0" @click="handleMoveComponent(-1)">
          <b-icon icon="chevron-up"> </b-icon>
        </button>
      </div>
      <div>
        <button :disabled="index === count - 1" @click="handleMoveComponent(1)">
          <b-icon icon="chevron-down"> </b-icon>
        </button>
      </div>
    </div>
    <div v-if="selectedComponent">
      <div ref="templateContainer">
        <component
          :component="component"
          :container-name="containerName"
          :is="componentInstance"
        />
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
  props: ['component', 'type', 'containerName', 'count', 'index', 'component'],
  created: function() {
    if (this.component && this.component.name) {
      this.selectedComponent = this.component.name
    }
  },
  methods: {
    handleComponentSelected: function(evt) {
      return (this.selectedComponent = evt.target ? evt.target.value : '')
    },
    handleRemoveComponent: function() {
      this.selectedComponent = null
      this.$store.commit('removeComponent', {
        containerName: this.containerName,
        id: this.component.id
      })
    },
    handleMoveComponent: function(delta) {
      this.$store.commit('moveComponent', {
        containerName: this.containerName,
        index: this.index,
        delta
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
  display: flex;
  border-radius: 4px;
  background: white;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 10;
  button {
    background: none;
    border: none;
  }
}
</style>
