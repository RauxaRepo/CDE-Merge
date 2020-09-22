<template>
  <div class="content-panel">
    <div class="centered-wrapper">
      <div class="border">
        <slot></slot>
      </div>
      <span>
        Built by Rauxa, 2020
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentPanel'
}
</script>

<style lang="scss" scoped>
.content-panel {
  height: calc(100vh - 3rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.centered-wrapper {
  width: 100%;
  max-width: 600px;
  span {
    display: block;
    margin: 0.5rem 0.5rem 0;
    font-size: 1rem;
  }
}
.border {
  border: 1px solid $black;
  padding: 1rem;
  width: 100%;
  max-width: 600px;
}
</style>
