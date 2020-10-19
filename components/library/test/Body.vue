<template>
  <div>
    <h2><TextInput v-model="fields.title" inline="true" /></h2>
    <div class="text">
      <TextInput v-model="fields.content" />
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
        title: '<p>Body Title</p>',
        content:
          '<p>Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply dummy text of the printing</p>'
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
</style>
