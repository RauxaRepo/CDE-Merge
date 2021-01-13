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
      <table style="width:100%;" role="presentation">
        <tr v-if="$store.state.editMode && !$store.state.previewMode">
          <td class="selector">
            <span>{{ selectedDisplayName }}</span>
            <div class="actions">
              <button
                v-if="count > 1 || selectedComponent"
                @click="handleRemoveComponent"
              >
                <b-icon
                  :icon="count > 1 ? 'delete' : 'window-minimize'"
                ></b-icon>
              </button>
              <button
                v-if="selectedComponent && hasControls"
                @click="onShowControls"
              >
                <b-icon icon="cog"></b-icon>
              </button>
              <div v-if="draggable && count > 1" class="draggable">
                <b-icon icon="drag"></b-icon>
              </div>
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
          <td class="columns is-multiline component-options">
            <b-field
              v-if="hasSearch"
              class="search-field"
              label-position="on-border"
              label="Filter"
            >
              <b-input v-model="search"></b-input>
            </b-field>
            <div
              v-for="option in filteredComponentList"
              :key="option.name"
              class="column is-one-third-tablet template"
            >
              <button @click="handleComponentSelected(option)">
                <img
                  :src="
                    option.img
                      ? require(`~/assets/images/${option.client}/${option.img}`)
                      : '/images/placeholder.png'
                  "
                  alt=""
                />
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
  props: ['component', 'type', 'containerName', 'count', 'index', 'draggable', 'hasSearch'],
  data: function() {
    return {
      selectedComponent: null,
      hasControls: false,
      search: ''
    }
  },
  computed: {
    componentInstance() {
      const name = this.selectedComponent
      if (!name) {
        return null
      }
      return () =>
        import(
          `@/components/library/${this.$store.state.currentClient.id}/${name}`
        )
    },
    filteredComponentList() {
      return this.$store.state.components.list.filter(
        component =>
          component.type === this.type &&
          (!this.search || component.text.toLowerCase().includes(this.search))
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
      this.hasControls = false
      this.$store.commit('setEditingId', null)
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
    &:hover {
      color: $button-secondary;
    }
  }
}
.search-field {
  width: 100%;
  margin: 1rem 0.5rem 0.5rem;
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
