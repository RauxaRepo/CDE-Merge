<template>
  <button
    v-if="$store.state.editMode"
    @click="$store.commit('newComponent', containerName )"
  >
    Add Container
  </button>
</template>

<script>
export default {
  name: 'AddSelector',
  props: ['containerName']
}
</script>
<style lang="scss" scoped>
button {
  background: none;
  padding: 0 1rem;
  line-height: 2rem;
  font-size: 1rem;
  border: 1px dashed $black;
}
</style>
