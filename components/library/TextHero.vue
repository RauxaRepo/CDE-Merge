<template>
  <div class="hero">
    <h2><TextInput v-model.lazy="fields.title" /></h2>
    <h3>
      <TextInput v-model.lazy="fields.description" />
    </h3>
  </div>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'TextHero',
  components: {
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        title: 'Title',
        description: 'Lorem Ipsum is simply dummy text of the printing '
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background: $black;
  color: $white;
  padding: 1rem;
}
h2 {
  font-size: 3rem;
  line-height: 1.4;
}
h3 {
  font-size: 1rem;
  font-style: italic;
}
</style>
