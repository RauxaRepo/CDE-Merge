<template>
  <div v-if="$store.state.currentTemplate.containers.length">
    <header class="hero">
      <ComponentSelector
        v-for="(selector, index) in $store.state.currentTemplate.containers[0]
          .components"
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
      <div class="col">
        <ComponentSelector
          v-for="(selector, index) in $store.state.currentTemplate.containers[1]
            .components"
          :id="selector.id"
          :key="selector.id"
          :count="$store.state.currentTemplate.containers[0].components.length"
          :index="index"
          :container-name="$store.state.currentTemplate.containers[1].name"
          type="main"
        />
        <AddSelector
          :container-name="$store.state.currentTemplate.containers[1].name"
        />
      </div>
      <div class="col">
        <ComponentSelector
          v-for="(selector, index) in $store.state.currentTemplate.containers[2]
            .components"
          :id="selector.id"
          :key="selector.id"
          :count="$store.state.currentTemplate.containers[0].components.length"
          :index="index"
          :container-name="$store.state.currentTemplate.containers[2].name"
          type="main"
        />
        <AddSelector
          :container-name="$store.state.currentTemplate.containers[2].name"
        />
      </div>
    </main>
  </div>
</template>

<script>
import ComponentSelector from '@/components/core/ComponentSelector'
import AddSelector from '@/components/core/AddSelector'
import { getUID } from '@/shared/utils'

export default {
  name: 'HeroTwoCol',
  components: {
    ComponentSelector,
    AddSelector
  },
  mounted: function() {
    this.$store.commit('setContainers', [
      {
        name: 'HeroTwoCol-Hero',
        components: [{ id: getUID() }]
      },
      {
        name: 'HeroTwoCol-Col1',
        components: [{ id: getUID() }]
      },
      {
        name: 'HeroTwoCol-Col2',
        components: [{ id: getUID() }]
      }
    ])
  }
}
</script>

<style lang="scss" scoped>
main {
  margin: 2rem 0;
  display: flex;
  .col {
    width: 100%;
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
