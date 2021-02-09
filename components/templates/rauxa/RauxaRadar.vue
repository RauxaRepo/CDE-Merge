<template>
  <table
    v-if="$store.state.currentEmail.containers.length"
    valign="top"
    width="100%"
    align="center"
    cellpadding="0"
    cellspacing="0"
    border="0"
    role="presentation"
    style="width:100%;max-width:720px;"
  >
    <ComponentSelector
      v-for="(component, index) in $store.state.currentEmail.containers[0]
        .components"
      :key="component.id"
      :component="component"
      :count="$store.state.currentEmail.containers[0].components.length"
      :index="index"
      :container-name="$store.state.currentEmail.containers[0].name"
      type="rauxaradar-header"
    />
    <ComponentSelector
      v-for="(component, index) in $store.state.currentEmail.containers[1]
        .components"
      :key="component.id"
      :component="component"
      :count="$store.state.currentEmail.containers[1].components.length"
      :index="index"
      :container-name="$store.state.currentEmail.containers[1].name"
      type="rauxaradar-hero"
    />
    <draggable
      v-model="contentComponents"
      :options="{ disabled: $store.state.previewMode }"
    >
      <ComponentSelector
        v-for="(component, index) in $store.state.currentEmail.containers[3]
          .components"
        :key="component.id"
        :component="component"
        :count="$store.state.currentEmail.containers[3].components.length"
        :max-components="4"
        :index="index"
        :container-name="$store.state.currentEmail.containers[3].name"
        type="rauxaradar-content"
        draggable="true"
        has-search="true"
      />
    </draggable>
    <AddSelector
      :container-name="$store.state.currentEmail.containers[3].name"
      button-text="Add Module"
    />
    <ComponentSelector
      v-for="(component, index) in $store.state.currentEmail.containers[2]
        .components"
      :key="component.id"
      :component="component"
      :count="$store.state.currentEmail.containers[2].components.length"
      :index="index"
      :container-name="$store.state.currentEmail.containers[2].name"
      type="rauxaradar-footer"
    />
  </table>
</template>

<script>
import draggable from 'vuedraggable'
import AddSelector from '@/components/core/AddSelector'
import ComponentSelector from "@/components/core/ComponentSelector"
import { getUID } from "@/shared/utils"

export default {
  name: "RauxaRadar",
  components: {
    ComponentSelector,
    AddSelector,
    draggable
  },
  computed: {
    contentComponents: {
      get() {
        return this.$store.state.currentEmail.containers[3].components
      },
      set(value) {
        this.$store.commit('updateContainer', {
          containerIndex: 3,
          newContainer: {
            ...this.$store.state.currentEmail.containers[3],
            components: value
          }
        })
      }
    }
  },
  mounted: function () {
    if (!this.$store.state.currentEmail.containers.length) {
      this.$store.commit("setContainers", [
        {
          name: "Header",
          components: [{ id: getUID(), name: "RauxaRadarHeader" }],
        },
        {
          name: "Hero",
          components: [{ id: getUID(), name: "RauxaRadarHero" }],
        },
        {
          name: "Footer",
          components: [{ id: getUID(), name: "RauxaRadarFooter" }],
        },
        {
          name: "Main Content",
          components: [{ id: getUID() }],
        },
      ])
    }
  },
}
</script>

<style lang="scss" scoped></style>
