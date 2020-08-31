<template>
  <div class="card">
    <h2><TextInput v-model.lazy="fields.title" inline="true" /></h2>
    <div class="text">
      <TextInput v-model.lazy="fields.content" />
    </div>
  </div>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'Card',
  components: {
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        title: '<p>Body Title</p>',
        content:
          '<p>Lorem Ipsum is simply dummy text</p>'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: $blue;
  border-radius: 8px;
  padding: .5rem;
  margin-bottom: 1rem;
}
h2 {
  font-size: 1.5rem;
  line-height: 1.4;
  margin-bottom: .5rem;
}
</style>
