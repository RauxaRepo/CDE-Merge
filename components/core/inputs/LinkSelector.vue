<template>
  <div v-if="$store.state.editMode && !$store.state.previewMode" class="link-selector" :class="{ active: isActive }">
    <div v-if="isActive" class="active-section">
      <button @click="close">
        <b-icon icon="close"></b-icon>
      </button>
      <button @click="save">
        <b-icon icon="content-save"></b-icon>
      </button>
      <b-field>
        <b-input v-model="link" placeholder="https://rauxa.com/" type="text"></b-input>
      </b-field>
    </div>
    <button v-else @click="isActive = true">
      <b-icon icon="link-plus"></b-icon>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LinkSelector',
  props: ['value'],
  data() {
    return {
      isActive: false,
      link: ''
    }
  },
  watch: {
    value: function() {
      this.link = this.value
    }
  },
  methods: {
    save: function() {
      this.isActive = false
      this.$emit('input', this.link)
    },
    close: function() {
      this.isActive = false
      this.link = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.link-selector {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  .active-section {
    display: flex;
  }
  button {
    height: 32px;
    width: 32px;
    border-radius: 0;
    border: none;
    background: $purple;
    color: $white;
    opacity: 0.7;
    text-align: center;
    padding: 0;
    &:hover,
    &:focus {
      opacity: 1;
    }
  }
  ::v-deep {
    input {
      border-radius: 0;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      min-width: 240px;
      height: 32px;
    }
  }
}
</style>
