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
import { updateContainer } from '@/utils'

const name = 'Card'
export default {
  name,
  components: {
    TextInput
  },
  props: ['container'],
  data: function() {
    return {
      fields: {
        title: 'Body Title',
        content:
          'Lorem Ipsum is simply dummy text'
      }
    }
  },
  watch: {
    fields: {
      deep: true,
      handler: function(fields) {
        this.updateContainer(this.$store, this.container, name, fields)
      }
    }
  },
  mounted: function() {
    this.updateContainer(this.$store, this.container, name, this.fields)
  },
  methods: {
    updateContainer
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
