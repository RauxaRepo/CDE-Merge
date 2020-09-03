<template>
  <span>
    <span v-if="inline" @click="showModal = true" v-html="parsedValue"></span>
    <div v-else @click="showModal = true" v-html="parsedValue"></div>
    <b-modal v-model="showModal">
      <div class="modal-container">
        <VueEditor v-model="value" />
      </div>
    </b-modal>
  </span>
</template>

<script>
import { VueEditor } from 'vue2-editor'

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
    parsedValue: function() {
      if (this.inline && this.value && this.value.includes('<p>')) {
        const newValue = this.value
          .replace(/<p>/g, '<span>')
          .replace(/<\/p>/g, '</span><br/>')
        return newValue.substring(0, newValue.length - 5)
      }
      return this.value
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
