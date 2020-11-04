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
        <h2>{{ containerText ? `${containerText}` : 'Textarea' }}</h2>
        <slot></slot>
        <VueEditor v-model="editorValue" :editor-toolbar="customToolbar" />
        <div style="margin-top: 0.3rem">
          &reg;&nbsp;&trade;&nbsp;&copy;&nbsp;&dagger;&nbsp;æ
        </div>
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
  props: [
    'value',
    'itemIndex',
    'inline',
    'linkStyle',
    'supStyle',
    'containerText'
  ],
  data() {
    return {
      id: getUID(),
      customToolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' }
        ],

        ['blockquote', 'code-block'],

        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],

        [{ script: 'sub' }, { script: 'super' }],

        [{ indent: '-1' }, { indent: '+1' }],

        [{ color: [] }, { background: [] }],

        ['link'],

        [{ direction: 'rtl' }],
        ['clean']
      ]
    }
  },
  computed: {
    editorValue: {
      get() {
        return this.itemIndex !== undefined
          ? this.value[this.itemIndex]
          : this.value
      },
      set: debounce(function(newValue) {
        if (this.itemIndex !== undefined) {
          this.$emit(
            'input',
            this.value.map((item, i) =>
              this.itemIndex === i ? newValue : item
            )
          )
        } else {
          this.$emit('input', newValue)
        }
      }, 400)
    },
    parsedValue: function() {
      let newValue =
        this.itemIndex !== undefined ? this.value[this.itemIndex] : this.value
      if (this.value && this.value.includes('<p>')) {
        newValue = this.value
          .replace(/<p>/g, '<span>')
          .replace(/<\/p>/g, this.inline ? '</span><br/>' : '</span><br/><br/>')
        newValue = newValue.substring(0, newValue.length - 5)
      }
      if (this.linkStyle) {
        newValue = newValue.replace(/<a/g, `<a style="${this.linkStyle}"`)
      }
      if (this.supStyle) {
        newValue = newValue.replace(/<sup/g, `<sup style="${this.supStyle}"`)
      }
      return newValue
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
