<template>
  <tr v-if="$store.state.editMode && !$store.state.previewMode">
    <td align="right">
      <b-button
        class="button merge-button primary"
        @click="$store.commit('newComponent', containerName)"
      >
        Add {{ containerName }}
      </b-button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'AddSelector',
  props: ['containerName']
}
</script>
<style lang="scss" scoped>
button:last-child {
  margin: -0.4rem 0 0.5rem;
}
</style>
