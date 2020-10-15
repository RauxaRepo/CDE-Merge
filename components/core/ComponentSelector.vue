<template>
  <tr
    v-if="$store.state.editMode || selectedComponent"
    class="component-container"
    :class="{
      edit: $store.state.editMode && !$store.state.previewMode,
      selected: $store.state.editingId === component.id
    }"
  >
    <td style="width:100%;display:table;">
      <table style="width:100%;">
        <tr
          v-if="$store.state.editMode && !$store.state.previewMode"
        >
          <td class="selector">
            <span>{{ selectedDisplayName }}</span>
            <div class="actions">
              <button @click="handleRemoveComponent">
                <b-icon icon="delete"></b-icon>
              </button>
              <button
                v-if="selectedComponent && hasControls"
                @click="onShowControls"
              >
                <b-icon icon="cog"></b-icon>
              </button>
              <!-- <button :disabled="index === 0" @click="handleMoveComponent(-1)">
              <b-icon icon="chevron-up"></b-icon>
            </button>
            <button
              :disabled="index === count - 1"
              @click="handleMoveComponent(1)"
            >
              <b-icon icon="chevron-down"></b-icon>
            </button> -->
            </div>
          </td>
        </tr>
        <tr v-if="selectedComponent" ref="templateContainer">
          <component
            :is="componentInstance"
            :component="component"
            :container-name="containerName"
            :container-text="selectedDisplayName"
            v-on:has-controls="onHasControls"
          />
        </tr>
        <tr
          v-if="
            !selectedComponent &&
              $store.state.editMode &&
              !$store.state.previewMode
          "
        >
          <td class="columns component-options">
            <div
              v-for="option in filteredComponentList"
              :key="option.name"
              class="column is-one-third-tablet template"
            >
              <button @click="handleComponentSelected(option)">
                <img :src="option.img || '/images/placeholder.png'" alt="" />
                <span>{{ option.text || option.name }}</span>
              </button>
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['component', 'type', 'containerName', 'count', 'index'],
  data: function() {
    return {
      selectedComponent: null,
      hasControls: false
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
    },
    selectedDisplayName() {
      const component = this.$store.state.components.list.find(
        component => component.name === this.selectedComponent
      )
      return component ? component.text || component.name : this.containerName
    }
  },
  created: function() {
    if (this.component && this.component.name) {
      this.selectedComponent = this.component.name
    }
  },
  methods: {
    handleComponentSelected: function(option) {
      this.selectedComponent = option.name
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
    },
    onShowControls() {
      this.$store.commit('setEditingId', this.component.id)
    },
    onHasControls() {
      this.hasControls = true
    }
  }
}
</script>

<style lang="scss" scoped>
.component-container {
  display: block;
  position: relative;
  &.edit {
    min-height: 5rem;
    border: 1px dashed $black;
    margin-bottom: 0.5rem;
    &.selected {
      border: 3px dashed $red;
    }
  }
}
.selector {
  display: flex;
  height: 40px;
  padding: 0 0.5rem;
  align-items: center;
  background: $bars-bg;
  justify-content: space-between;
  .actions {
    display: flex;
  }
  button {
    background: none;
    border: none;
  }
}
.component-options {
  padding: 1rem;
  button {
    display: block;
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
  }
  img {
    width: 100%;
  }
  span {
    margin: 0.2rem 0 0.5rem;
    display: block;
    color: $black;
  }
}
</style>
