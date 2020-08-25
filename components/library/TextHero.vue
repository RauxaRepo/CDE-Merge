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
import { updateContainer } from '@/utils'

const name = 'TextHero'
export default {
  name,
  components: {
    TextInput
  },
  props: ['container'],
  data: function() {
    return {
      fields: {
        title: 'Title',
        description: 'Lorem Ipsum is simply dummy text of the printing '
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
