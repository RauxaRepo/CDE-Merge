<template>
  <td :key="$store.state.editMode ? `${component.id}_Edit` : component.id">
    <table
      class="w360"
      cellspacing="0"
      cellpadding="0"
      border="0"
      role="presentation"
      bgcolor="#f6f6f6"
      style="min-width: 360px; width: 100%; max-width: 720px; margin: 0 auto"
    >
      <tr>
        <td
          align="right"
          style="
            padding: 8px 24px 8px 0; color: #747676; line-height: 12px; font-size: 10px; font: 10px AvenirLTPro-Book, Avenir, Helvetica, Arial, sans-serif;
          "
        >
          <TextInput v-model.lazy="fields.preheader" inline="true"></TextInput>
          <fragment v-if="!$store.state.editMode">
            {{ preheaderFallback }}
          </fragment>
        </td>
      </tr>
      <tr>
        <td
          height="1"
          width="100%"
          bgcolor="#333333"
          style="height: 1px; font-size: 1px; line-height: 1px"
        >
          &nbsp;
        </td>
      </tr>
    </table>
    <table
      :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
      class="w360"
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      bgcolor="#000000"
      style="min-width: 360px; width: 100%; max-width: 720px; margin: 0 auto"
    >
      <tr>
        <td align="left" style="padding: 22px 0 24px 24px">
          <a :href="fields.link" target="_blank">
            <ImageSelector
              v-model="fields.file"
              placeholder="/images/rauxa/rr_vz-rauxa.png"
              width="232"
              height="25"
              border="0"
              img-style="
                width: 232px;
                max-height: 25px;
                display: block;
                color: #ffffff;
                font: 14px Avenir, Helvetica, Arial, sans-serif;
              "
              alt="Verizon + Rauxa"
            ></ImageSelector>
          </a>
        </td>
      </tr>
      <tr>
        <td
          height="1"
          width="100%"
          bgcolor="#333333"
          style="height: 1px; font-size: 1px; line-height: 1px"
        >
          &nbsp;
        </td>
      </tr>
      <portal v-if="$store.state.editingId === component.id" to="controls">
        <h2>{{ containerText }}</h2>
        <LinkField v-model="fields.link" />
      </portal>
    </table>
  </td>
</template>

<script>
import ImageSelector from '@/components/core/inputs/ImageSelector'
import { libComponentMixin } from "@/shared/mixins"
import LinkField from "@/components/core/inputs/LinkField"

export default {
  name: "RauxaRadarHeader",
  components: {
    LinkField,
    ImageSelector
  },
  mixins: [libComponentMixin],
  data: function () {
    return {
      fields: {
        preheader: "You've got the latest insights from Rauxa for Verizon B2B.",
        link: "https://www.rauxaradar.com/",
        file: null,
      },
      preheaderFallback: '<!--[if !mso]><!--><div style="display:none;font-size:1px;color:#333333;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div><!--<![endif]-->',
    }
  },
  mounted: function () {
    this.$emit("has-controls")
  },
}
</script>

<style lang="scss" scoped></style>
