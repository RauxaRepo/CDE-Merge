<template>
  <div>
    <h1>Create Email</h1>
    <div v-if="!selectedTempalte" class="template-selector-container">
      <label for="templateSelector">Select template:</label>
      <select name="templateSelector">
        <option value="" />
        <option v-for="template in $store.state.templates" :key="template">
          {{ template }}
        </option>
      </select>
    </div>
    <div v-else ref="templateContainer" class="template-container" />
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedTemplate: null
  })
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
</style>
