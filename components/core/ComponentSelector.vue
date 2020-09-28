<template>
  <tr
    class="component-container"
    :class="{ edit: $store.state.editMode && !$store.state.previewMode }"
  >
    <td style="width:100%;display:table;">
      <table style="width:100%;">
        <tr
          v-if="$store.state.editMode && !$store.state.previewMode"
          class="selector"
        >
          <span>{{ selectedDisplayName }}</span>
          <div class="actions">
            <div>
              <button @click="handleRemoveComponent">
                <b-icon icon="delete"></b-icon>
              </button>
            </div>
            <div>
              <button :disabled="index === 0" @click="handleMoveComponent(-1)">
                <b-icon icon="chevron-up"></b-icon>
              </button>
            </div>
            <div>
              <button
                :disabled="index === count - 1"
                @click="handleMoveComponent(1)"
              >
                <b-icon icon="chevron-down"></b-icon>
              </button>
            </div>
          </div>
        </tr>
        <tr v-if="selectedComponent" ref="templateContainer">
          <component
            :is="componentInstance"
            :component="component"
            :container-name="containerName"
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
      selectedComponent: null
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
