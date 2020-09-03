<template>
  <div>
    <b-upload v-if="$store.state.editMode" expanded @input="handleInput">
      <img
        v-if="value && value.src"
        :src="value.src"
        :width="width || ''"
        :alt="alt || ''"
        :style="imgStyle || ''"
        :border="border || ''"
      />
      <div v-else class="add-message" :style="imgStyle || ''">
        Image
      </div>
    </b-upload>
    <img
      v-else
      :src="`./assets/${value ? value.name : ''}`"
      :width="width || ''"
      :alt="alt || ''"
      :style="imgStyle || ''"
      :border="border || ''"
    />
  </div>
</template>

<script>
export default {
  name: 'ImageSelector',
  components: {},
  props: ['value', 'width', 'border', 'alt', 'imgStyle'],
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
  text-align: center !important;
  background: $black !important;
  color: $white !important;
  font-size: 1rem !important;
  padding: 1rem !important;
}
</style>
