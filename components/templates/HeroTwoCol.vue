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
      <div class="col">
        <ComponentSelector
          v-for="(component, index) in $store.state.currentEmail.containers[1]
            .components"
          :key="component.id"
          :component="component"
          :count="$store.state.currentEmail.containers[0].components.length"
          :index="index"
          :container-name="$store.state.currentEmail.containers[1].name"
          type="main"
        />
        <AddSelector
          :container-name="$store.state.currentEmail.containers[1].name"
        />
      </div>
      <div class="col">
        <ComponentSelector
          v-for="(component, index) in $store.state.currentEmail.containers[2]
            .components"
          :key="component.id"
          :component="component"
          :count="$store.state.currentEmail.containers[0].components.length"
          :index="index"
          :container-name="$store.state.currentEmail.containers[2].name"
          type="main"
        />
        <AddSelector
          :container-name="$store.state.currentEmail.containers[2].name"
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
    if (!this.$store.state.currentEmail.containers.length) {
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
