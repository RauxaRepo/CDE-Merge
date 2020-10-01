<template>
  <span>
    <span v-if="inline" @click="onShowControls" v-html="parsedValue"></span>
    <div v-else @click="onShowControls" v-html="parsedValue"></div>
    <portal v-if="$store.state.editingId === id" to="controls">
      <h2>{{ containerText }} / Textarea</h2>
      <VueEditor v-model="editorValue" />
    </portal>
  </span>
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
  props: ['value', 'inline', 'linkStyle'],
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
      if (this.inline && this.value && this.value.includes('<p>')) {
        const newValue = this.value
          .replace(/<p>/g, '<span>')
          .replace(/<\/p>/g, '</span><br/>')
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
.modal-container * {
  color: $black;
  margin: 0;
  font-size: 1rem;
  ::v-deep {
    p {
      margin-bottom: 1rem !important;
    }
  }
}
</style>
