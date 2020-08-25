<template>
  <div class="wrapper">
    <header class="hero">
      <ComponentSelector />
    </header>
    <main><ComponentSelector /></main>
  </div>
</template>

<script>
import ComponentSelector from '@/components/core/ComponentSelector';

export default {
  name: 'HeroOneCol',
  components: {
    ComponentSelector
  }
};
</script>

<style></style>
