<template>
  <div>
    <span v-if="inline" @click="showModal = true" v-html="parsedValue"></span>
    <div v-else @click="showModal = true" v-html="parsedValue"></div>
    <b-modal v-model="showModal">
      <div class="modal-container">
        <VueEditor v-model="parsedValue" />
      </div>
    </b-modal>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { debounce } from 'lodash'

export default {
  name: 'TextInput',
  components: {
    VueEditor
  },
  props: ['value', 'inline'],
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    parsedValue: {
      get() {
        if (this.inline) {
          const newValue = this.value
            .replace(/<p>/g, '<span>')
            .replace(/<\/p>/g, '</span><br/>')
          return newValue.substring(0, newValue.length - 5)
        }
        return this.value
      },
      set: debounce(function(value) {
        this.$emit('input', value)
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-container * {
  color: $black;
  margin: 0;
  font-size: 1rem;
}
</style>
