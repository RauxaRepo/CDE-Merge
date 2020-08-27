<template>
  <div v-if="$store.state.currentTemplate.containers.length">
    <header class="hero">
      <ComponentSelector
        v-for="(selector, index) in $store.state.currentTemplate.containers[0].components"
        :id="selector.id"
        :key="selector.id"
        :count="$store.state.currentTemplate.containers[0].components.length"
        :index="index"
        :container-name="$store.state.currentTemplate.containers[0].name"
        type="hero"
      />
      <AddSelector
        :container-name="$store.state.currentTemplate.containers[0].name"
      />
    </header>
    <main>
      <ComponentSelector
        v-for="(selector, index) in $store.state.currentTemplate.containers[1].components"
        :id="selector.id"
        :key="selector.id"
        :count="$store.state.currentTemplate.containers[1].components.length"
        :index="index"
        :container-name="$store.state.currentTemplate.containers[1].name"
        type="main"
      />
      <AddSelector
        :container-name="$store.state.currentTemplate.containers[1].name"
      />
    </main>
  </div>
</template>

<script>
import ComponentSelector from '@/components/core/ComponentSelector'
import AddSelector from '@/components/core/AddSelector'
import { getUID } from '@/shared/utils'

export default {
  name: 'HeroOneCol',
  components: {
    ComponentSelector,
    AddSelector
  },
  mounted: function() {
    this.$store.commit('setContainers', [
      {
        name: 'HeroOneCol-Hero',
        components: [{ id: getUID() }]
      },
      {
        name: 'HeroOneCol-Main',
        components: [{ id: getUID() }]
      }
    ])
  }
}
</script>

<style lang="scss" scoped>
main {
  margin: 2rem 0;
}
</style>
