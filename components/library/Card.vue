<template>
  <div class="card">
    <h2><TextInput v-model.lazy="fields.title" /></h2>
    <div class="text">
      <p><TextInput v-model.lazy="fields.content" /></p>
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
        title: 'Body Title',
        content:
          'Lorem Ipsum is simply dummy text'
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
  max-width: 300px;
}
h2 {
  font-size: 1.5rem;
  line-height: 1.4;
  margin-bottom: .5rem;
}
p {
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
</style>
