<template>
  <span
    v-if="$store.state.editMode && !$store.state.previewMode"
    class="edit"
    :class="{
      selected: $store.state.editingId === id
    }"
  >
    <span @click="onShowControls" v-html="parsedValue"></span>
    <portal v-if="$store.state.editingId === id" to="controls">
      <div class="white-area">
        <h2>{{ containerText ? `${containerText} /` : '' }} Textarea</h2>
        <slot></slot>
        <VueEditor v-model="editorValue" />
      </div>
    </portal>
  </span>
  <span v-else v-html="parsedValue"></span>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { debounce } from 'lodash'
import { getUID } from '@/shared/utils'

export default {
  name: 'TextInput',
  components: {
    VueEditor
  },
  props: ['value', 'inline', 'linkStyle', 'containerText'],
  data() {
    return {
      id: getUID()
    }
  },
  computed: {
    editorValue: {
      get() {
        return this.value
      },
      set: debounce(function(value) {
        this.$emit('input', value)
      }, 400)
    },
    parsedValue: function() {
      if (this.value && this.value.includes('<p>')) {
        const newValue = this.value
          .replace(/<p>/g, '<span>')
          .replace(/<\/p>/g, this.inline ? '</span><br/>' : '</span><br/><br/>')
        return newValue.substring(0, newValue.length - 5)
      }
      if (this.linkStyle) {
        return this.value.replace(/<a/g, `<a style="${this.linkStyle}"`)
      }
      return this.value
    }
  },
  methods: {
    onShowControls() {
      this.$store.commit('setEditingId', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit {
  display: inline-block;
  border: 3px dashed transparent;
  &:hover {
    border: 3px dashed $button-secondary;
  }
  &.selected {
    border: 3px dashed $red;
  }
}
</style>
