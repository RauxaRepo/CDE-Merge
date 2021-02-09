<template>
  <td :key="$store.state.editMode ? `${component.id}_Edit` : component.id">
    <table
      class="w360"
      bgcolor="#ffffff"
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width: 100%; min-width: 360px; max-width: 720px"
    >
      <tr>
        <td
          height="24"
          style="
            font-size: 24px;
            height: 24px;
            mso-line-height-rule: exactly;
            line-height: 24px;
          "
        ></td>
      </tr>
      <tr>
        <td
          align="left"
          style="
            padding-right: 24px; padding-bottom: 70px; padding-left: 24px; color: #747676; font: 11px/13px 'AvenirLTPro-Book', Avenir, Helvetica, Arial, sans-serif;
          "
        >
          <TextInput v-model.lazy="fields.copyright" inline="true" />
          <br /><br />
          This email was sent to
          <a
          style="text-decoration: none; color: #747676"
            ><span
            style="text-decoration: none; color: #747676"
              >*|EMAIL|*</span
            ></a
          >. You can
          <a
            :href="fields.unsubLink"
            target="_blank"
            style="text-decoration: underline; color: #747676"
            >unsubscribe</a
          >
          from these emails at any time.
        </td>
      </tr>
    </table>
      <portal v-if="$store.state.editingId === component.id" to="controls">
        <h2>{{ containerText }}</h2>
        <LinkField v-model="fields.unsubLink" />
      </portal>
  </td>
</template>

<script>
import TextInput from "@/components/core/inputs/TextInput"
import { libComponentMixin } from "@/shared/mixins"

export default {
  name: "RauxaRadarFooter",
  components: {
    TextInput,
  },
  mixins: [libComponentMixin],
  data: function () {
    return {
      fields: {
        copyright: "&copy; 2021 Rauxa",
        unsubLink: '*|UNSUB|*'
      },
    }
  },
  mounted: function () {
    this.$emit('has-controls')
  }
}
</script>

<style lang="scss" scoped></style>
