<template>
  <div>
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
  name: 'Body',
  components: {
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        title: 'Body Title',
        content:
          'Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply dummy text of the printing'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 3rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
p {
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
</style>
