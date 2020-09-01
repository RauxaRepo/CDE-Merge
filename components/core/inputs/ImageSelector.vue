<template>
  <div>
    <b-upload v-if="$store.state.editMode" expanded @input="handleInput">
      <img v-if="value && value.src" alt="" :src="value.src" />
      <div v-else class="add-message">
        Click to select an image
      </div>
    </b-upload>
    <img v-else alt="" :src="`./assets/${value ? value.name : ''}`" />
  </div>
</template>

<script>
export default {
  name: 'ImageSelector',
  components: {},
  props: ['value'],
  computed: {
    src: function() {
      return this.value ? URL.createObjectURL(this.value) : ''
    }
  },
  methods: {
    handleInput(file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        const base64data = reader.result
        this.$emit('input', {
          name: file.name,
          src: base64data
        })
        this.$store.commit('addAsset', {
          type: 'image',
          name: file.name,
          src: base64data
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-message {
  font-size: 2.5rem;
  padding: 0.5rem;
}
</style>
