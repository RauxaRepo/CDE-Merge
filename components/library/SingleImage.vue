<template>
  <div class="image">
    <a v-if="!$store.state.editMode && fields.link" :href="fields.link">
      <ImageSelector v-model="fields.file" />
    </a>
    <ImageSelector v-else v-model="fields.file" />
    <LinkSelector v-model="fields.link" />
  </div>
</template>

<script>
import ImageSelector from '@/components/core/inputs/ImageSelector'
import LinkSelector from '@/components/core/inputs/LinkSelector'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'SingleImage',
  components: {
    ImageSelector,
    LinkSelector
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        file: null,
        link: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  position: relative;
}
img {
  width: 100%;
}
</style>
