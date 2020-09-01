<template>
  <div class="image">
    <ImageSelector v-model="fields.file" />
  </div>
</template>

<script>
import ImageSelector from '@/components/core/inputs/ImageSelector'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'Image',
  components: {
    ImageSelector
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        file: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
