<template>
  <div :style="`text-align:${alignment || 'left'};`">
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
      :src="`./images/${value ? value.name : ''}`"
      :width="width || ''"
      :alt="alt || ''"
      :style="imgStyle || ''"
      :border="border || ''"
    />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ImageSelector',
  components: {},
  props: ['placeholder', 'value', 'width', 'border', 'alt', 'imgStyle', 'alignment'],
  computed: {
    src: function() {
      return this.value ? URL.createObjectURL(this.value) : ''
    }
  },
  mounted() {
    if (this.placeholder && !this.value) {
      const placeholderSegments = this.placeholder.split('/')
      return axios
        .get(this.placeholder, {
          responseType: 'blob'
        })
        .then(response => this.handleInput(response.data, placeholderSegments[placeholderSegments.length - 1]))
        .catch(err => console.log(err))
    }
  },
  methods: {
    handleInput(file, name) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        const base64data = reader.result
        this.$emit('input', {
          name: name || file.name,
          src: base64data
        })
        this.$store.commit('addAsset', {
          type: 'image',
          name: name || file.name,
          src: base64data
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.upload.is-expanded {
  width: auto;
}
.add-message {
  text-align: center !important;
  background: $black !important;
  color: $white !important;
  font-size: 1rem !important;
  padding: 1rem !important;
}
</style>
