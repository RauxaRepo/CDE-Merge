<template>
  <table
    v-if="$store.state.currentEmail.containers.length"
    align="center"
    cellpadding="0"
    cellspacing="0"
    border="0"
    role="presentation"
    style="width:100%;max-width:500px;"
    class="mw98"
  >
    <ComponentSelector
      v-for="(component, index) in $store.state.currentEmail.containers[0]
        .components"
      :key="component.id"
      :component="component"
      :count="$store.state.currentEmail.containers[0].components.length"
      :index="index"
      :container-name="$store.state.currentEmail.containers[0].name"
      type="asa-preheader"
    />
    <ComponentSelector
      v-for="(component, index) in $store.state.currentEmail.containers[1]
        .components"
      :key="component.id"
      :component="component"
      :count="$store.state.currentEmail.containers[1].components.length"
      :index="index"
      :container-name="$store.state.currentEmail.containers[1].name"
      type="asa-header"
    />
    <tr>
      <td align="center">
        <table
          role="presentation"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="width:100%;max-width:500px;"
        >
          <draggable v-model="contentComponents" :options="{disabled : $store.state.previewMode}">
            <ComponentSelector
              v-for="(component, index) in $store.state.currentEmail
                .containers[2].components"
              :key="component.id"
              :component="component"
              :count="$store.state.currentEmail.containers[2].components.length"
              :max-components="2"
              :index="index"
              :container-name="$store.state.currentEmail.containers[2].name"
              type="asa-content"
              draggable="true"
              has-search="true"
            />
          </draggable>
          <AddSelector
            :container-name="$store.state.currentEmail.containers[2].name"
            button-text="Add Module"
          />
        </table>
      </td>
    </tr>
    <ComponentSelector
      v-for="(component, index) in $store.state.currentEmail.containers[3]
        .components"
      :key="component.id"
      :component="component"
      :count="$store.state.currentEmail.containers[3].components.length"
      :index="index"
      :container-name="$store.state.currentEmail.containers[3].name"
      type="asa-footer"
    />
  </table>
</template>

<script>
import draggable from 'vuedraggable'
import AddSelector from '@/components/core/AddSelector'
import ComponentSelector from '@/components/core/ComponentSelector'
import { getUID } from '@/shared/utils'

export default {
  name: 'MCKOffer',
  components: {
    ComponentSelector,
    AddSelector,
    draggable
  },
  computed: {
    contentComponents: {
      get() {
        return this.$store.state.currentEmail.containers[2].components
      },
      set(value) {
        this.$store.commit('updateContainer', {
          containerIndex: 2,
          newContainer: {
            ...this.$store.state.currentEmail.containers[2],
            components: value
          }
        })
      }
    }
  },
  mounted: function() {
    if (!this.$store.state.currentEmail.containers.length) {
      this.$store.commit('setContainers', [
        {
          name: 'PreHeader',
          components: [{ id: getUID(), name: 'ASAExecLetterPreHeader' }]
        },
        {
          name: 'Header',
          components: [{ id: getUID(), name: 'ASAHeaderNine' }]
        },
        {
          name: 'Content',
          components: [{ id: getUID() }]
        },
        {
          name: 'Footer',
          components: [{ id: getUID(), name: 'ASAFooter' }]
        }
      ])
    }
  }
}
</script>

<style lang="scss" scoped></style>
