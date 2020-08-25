<template>
  <div>
    <header class="hero">
      <ComponentSelector container="HeroOneCol-Hero" type="hero" />
    </header>
    <main><ComponentSelector container="HeroOneCol-Main" type="main" /></main>
  </div>
</template>

<script>
import ComponentSelector from '@/components/core/ComponentSelector'

export default {
  name: 'HeroOneCol',
  components: {
    ComponentSelector
  }
}
</script>

<style lang="scss" scoped>
main {
  margin: 2rem 0;
}
</style>
