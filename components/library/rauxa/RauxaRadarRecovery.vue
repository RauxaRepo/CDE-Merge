<template>
  <td :key="$store.state.editMode ? `${component.id}_Edit` : component.id">
    <table
      class="w360"
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      bgcolor="#000000"
      style="width: 100%; min-width: 360px; max-width: 720px"
    >
      <tr>
        <td
          height="24"
          style="font-size: 24px; height: 24px; line-height: 24px"
        >
          &nbsp;
        </td>
      </tr>
      <tr>
        <td
          align="left"
          valign="top"
          style="
            color: #ffffff; padding-left: 24px; padding-right: 24px; font: bold 24px/26px Avenir, Helvetica, Arial, sans-serif;
          "
        >
          <TextInput v-model.lazy="fields.headline" inline="true"></TextInput>
        </td>
      </tr>
      <tr>
        <td
          align="left"
          valign="top"
          style="
            padding-top: 10px; color: #ffffff; padding-right: 24px; padding-left: 24px; font: 16px/18px 'AvenirLTPro-Book', Avenir, Helvetica, Arial, sans-serif;
          "
        >
          <TextInput v-model.lazy="fields.body" inline="true"></TextInput>
        </td>
      </tr>
      <tr>
        <td
          class="pad-top-24"
          width="100%"
          align="right"
          style="padding-right: 24px"
        >
          <table
            align="right"
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            bgcolor="#000000"
          >
            <tr>
              <td align="right">
                <fragment v-if="!$store.state.editMode">
                  {{ fallback }}
                </fragment>
                <table
                  align="right"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                >
                  <tr>
                    <td class="cta">
                      <div>
                        <a
                          v-if="
                            (!$store.state.editMode ||
                              $store.state.previewMode) &&
                            fields.ctaLink
                          "
                          :href="fields.ctaLink"
                          style="
                            border: 1px solid #ffffff; padding: 12px 30px; border-radius: 0px; color: #ffffff; display: inline-block; text-align: center; text-decoration: none; letter-spacing: 0.02em; font: normal 16px/20px Avenir, Helvetica, Arial, sans-serif;
                          "
                          class="resetBorder"
                          target="_blank"
                        >
                          <TextInput v-model.lazy="fields.cta" inline="true" />
                        </a>
                        <span
                          v-else
                          style="
                            border: 1px solid #ffffff; padding: 12px 30px; border-radius: 0px; color: #ffffff; display: inline-block; text-align: center; text-decoration: none; letter-spacing: 0.02em; font: normal 16px/20px Avenir, Helvetica, Arial, sans-serif;
                          "
                          class="resetBorder"
                          target="_blank"
                        >
                          <TextInput v-model.lazy="fields.cta" inline="true" />
                        </span>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
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
    </table>
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <h2>{{ containerText }}</h2>
      <LinkField v-model="fields.ctaLink" />
    </portal>
  </td>
</template>

<script>
import TextInput from "@/components/core/inputs/TextInput"
import { libComponentMixin } from "@/shared/mixins"

export default {
  name: "RauxaRadarRecovery",
  components: {
    TextInput,
  },
  mixins: [libComponentMixin],
  data: function () {
    return {
      fields: {
        cta: "LET'S TALK",
        headline: "CONTINUE THE CONVERSATION",
        body:
          'Want to know how these ideas can work for your line of business? <br class="hide">Reach out anytime to talk to a Rauxa strategist. We’d love to show <br class="hide">you more of what we&nbsp;do.',
        ctaLink: "mailto:rauxaradar@rauxa.com?subject=re%3A%20rauxa%20radar",
      },
      fallback: '<!--[if gte mso 9]><style>.cta {border: 1px solid #ffffff !important;padding: 12px 30px !important;border-collapse: collapse !important;}.resetBorder {border: none !important;}</style><![endif]-->'
    }
  },
  mounted: function () {
    this.$emit("has-controls")
  },
}
</script>

<style lang="scss" scoped></style>
