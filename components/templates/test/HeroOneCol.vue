<template>
  <div v-if="$store.state.currentEmail.containers.length">
    <header>
      <ComponentSelector
        v-for="(component, index) in $store.state.currentEmail.containers[0]
          .components"
        :key="component.id"
        :component="component"
        :count="$store.state.currentEmail.containers[0].components.length"
        :index="index"
        :container-name="$store.state.currentEmail.containers[0].name"
        type="hero"
      />
      <AddSelector
        :container-name="$store.state.currentEmail.containers[0].name"
      />
    </header>
    <main>
      <ComponentSelector
        v-for="(component, index) in $store.state.currentEmail.containers[1]
          .components"
        :key="component.id"
        :component="component"
        :count="$store.state.currentEmail.containers[1].components.length"
        :index="index"
        :container-name="$store.state.currentEmail.containers[1].name"
        type="main"
      />
      <AddSelector
        :container-name="$store.state.currentEmail.containers[1].name"
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
    if (!this.$store.state.currentEmail.containers.length) {
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
}
</script>

<style lang="scss" scoped>
main {
  margin: 2rem 0;
}
</style>
