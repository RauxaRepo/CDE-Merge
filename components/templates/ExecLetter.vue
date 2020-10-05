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
    <tr>
      <td align="center">
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          role="presentation"
          style="width:100%;max-width:500px;background-color:#01426a;border-radius:6px 4px 0 0;"
        >
          <tr>
            <td align="left" valign="top" style="width:40%;">
              <!-- logo -->
              <a
                href="${clickthrough('Logo_Home','linkname=Logo_Home')}"
                style="text-decoration:none;"
                target="_blank"
              >
                <img
                  src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/ALA_BI_Header1_Logox2_01_370x220.jpg"
                  width="185"
                  border="0"
                  alt="Alaska&reg;"
                  style="display:block;border:0;outline:0;padding:0;width:100%;max-width:185px;height:auto;border-radius:4px 0 0 0;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;"
                />
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center">
        <table
          role="presentation"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="width:100%;max-width:500px;"
        >
          <ComponentSelector
            v-for="(component, index) in $store.state.currentEmail.containers[1]
              .components"
            :key="component.id"
            :component="component"
            :count="$store.state.currentEmail.containers[1].components.length"
            :index="index"
            :container-name="$store.state.currentEmail.containers[1].name"
            type="asa-hero"
          />
        </table>
      </td>
    </tr>
    <tr>
      <td align="center">
        <table
          role="presentation"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="width:100%;max-width:500px;"
        >
          <ComponentSelector
            v-for="(component, index) in $store.state.currentEmail.containers[2]
              .components"
            :key="component.id"
            :component="component"
            :count="$store.state.currentEmail.containers[2].components.length"
            :index="index"
            :container-name="$store.state.currentEmail.containers[2].name"
            type="asa-main"
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
      type="asa-cta"
    />
    <ComponentSelector
      v-for="(component, index) in $store.state.currentEmail.containers[4]
        .components"
      :key="component.id"
      :component="component"
      :count="$store.state.currentEmail.containers[4].components.length"
      :index="index"
      :container-name="$store.state.currentEmail.containers[4].name"
      type="asa-footer"
    />
  </table>
</template>

<script>
import ComponentSelector from '@/components/core/ComponentSelector'
import { getUID } from '@/shared/utils'

export default {
  name: 'ExecLetter',
  components: {
    ComponentSelector
  },
  mounted: function() {
    if (!this.$store.state.currentEmail.containers.length) {
      this.$store.commit('setContainers', [
        {
          name: 'PreHeader',
          components: [{ id: getUID(), name: 'ASAExecLetterPreHeader' }]
        },
        {
          name: 'Hero',
          components: [{ id: getUID() }]
        },
        {
          name: 'Main',
          components: [{ id: getUID(), name: 'ASAExecLetterBody' }]
        },
        {
          name: 'CTA',
          components: [{ id: getUID() }]
        },
        {
          name: 'Footer',
          components: [{ id: getUID(), name: 'ASAExecLetterFooter' }]
        }
      ])
    }
  }
}
</script>

<style lang="scss" scoped></style>
