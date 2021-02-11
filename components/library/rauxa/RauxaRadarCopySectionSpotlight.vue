<template>
  <td :key="$store.state.editMode ? `${component.id}_Edit` : component.id">
    <table
      class="w360"
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      bgcolor="#ffffff"
      style="width: 100%; min-width: 360px; max-width: 720px"
    >
      <tr>
        <td bgcolor="#d8dada" style="width: 1px"></td>
        <td align="center">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width: 100%; max-width: 718px"
          >
            <tr>
              <td align="left">
                <table
                  width="90"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                  align="left"
                >
                  <tr>
                    <td
                      height="8"
                      bgcolor="#c80a32"
                      style="
                        width: 90px;
                        height: 8px;
                        font-size: 8px;
                        mso-line-height-rule: exactly;
                        line-height: 8px;
                      "
                    ></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width: 100%; max-width: 718px"
          >
            <tr>
              <td style="width: 24px"></td>
              <td align="left" valign="top">
                <table
                  valign="top"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                  align="left"
                  style="width: 100%"
                >
                  <tr>
                    <td align="left" valign="top" width="100%">
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="width: 100%; max-width: 670px"
                      >
                        <tr>
                          <td
                            align="left"
                            valign="top"
                            style="
                              padding-left: 24px; padding-top: 15px; color: #000000; font: bold 16px/18px 'AvenirLTPro-Black', Avenir, Helvetica, Arial, sans-serif;
                            "
                          >
                            <TextInput
                              v-model.lazy="fields.eyebrow"
                              inline="true"
                            />
                          </td>
                        </tr>
                      </table>
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="width: 100%"
                      >
                        <tr>
                          <td
                            align="left"
                            valign="top"
                            style="
                              padding-top: 5px; padding-left: 24px; padding-right: 24px; color: #000000; font: bold 32px/34px 'AvenirLTPro-Black', Avenir, Helvetica, Arial, sans-serif;
                            "
                          >
                            <TextInput
                              v-model.lazy="fields.headline"
                              inline="true"
                            />
                          </td>
                        </tr>
                      </table>
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="width: 100%"
                      >
                        <tr>
                          <td
                            align="left"
                            valign="top"
                            style="
                              padding-top: 10px; padding-right: 48px; padding-left: 24px; color: #000000; font: 16px/18px 'AvenirLTPro-Book', Avenir, Helvetica, Arial, sans-serif;
                            "
                          >
                            <TextInput
                              v-model.lazy="fields.body1"
                              inline="true"
                            />
                          </td>
                          <td class="hide" style="width: 24px"></td>
                        </tr>
                      </table>
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="width: 100%"
                      >
                        <tr v-if="fields.showBody2">
                          <td
                            align="left"
                            valign="top"
                            style="
                              padding-top: 10px; padding-right: 48px; padding-left: 24px; color: #000000; font: 16px/18px 'AvenirLTPro-Book', Avenir, Helvetica, Arial, sans-serif;
                            "
                          >
                            <TextInput
                              v-model.lazy="fields.body2"
                              inline="true"
                            />
                          </td>
                          <td class="hide" style="width: 24px"></td>
                        </tr>
                        <tr v-if="fields.showFootnote">
                          <td
                            align="left"
                            valign="top"
                            style="
                              padding-left: 24px; padding-right: 48px; padding-top: 12px; color: #000000; font: 12px/12px 'AvenirLTPro-Book', Avenir, Helvetica, Arial, sans-serif;
                            "
                          >
                            <TextInput
                              v-model.lazy="fields.footnote"
                              inline="true"
                            />
                          </td>
                          <td class="hide" style="width: 24px"></td>
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
                  <tr>
                    <td align="right" valign="top" style="padding-right: 24px">
                      <fragment v-if="!$store.state.editMode">
                        {{ fallback }}
                      </fragment>
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                      >
                        <tr>
                          <td class="cta" style="padding-right: 24px">
                            <div>
                              <a
                                v-if="
                                  (!$store.state.editMode ||
                                    $store.state.previewMode) &&
                                  fields.ctaLink
                                "
                                :href="fields.ctaLink"
                                style="
                                  border: 1px solid #000000; padding: 12px 25px; border-radius: 0px; color: #000000; display: inline-block; text-align: center; text-decoration: none; letter-spacing: 0.02em; font: normal 16px/20px Avenir, Helvetica, Arial, sans-serif;
                                "
                                class="resetBorder"
                                target="_blank"
                              >
                                <TextInput
                                  v-model.lazy="fields.cta"
                                  inline="true"
                                />
                              </a>
                              <span
                                v-else
                                style="
                                  border: 1px solid #000000; padding: 12px 25px; border-radius: 0px; color: #000000; display: inline-block; text-align: center; text-decoration: none; letter-spacing: 0.02em; font: normal 16px/20px Avenir, Helvetica, Arial, sans-serif;
                                "
                                class="resetBorder"
                                target="_blank"
                              >
                                <TextInput
                                  v-model.lazy="fields.cta"
                                  inline="true"
                                >
                                  <LinkField v-model="fields.ctaLink" />
                                </TextInput>
                              </span>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td
                      height="24"
                      style="font-size: 24px; height: 24px; line-height: 24px"
                    ></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <td bgcolor="#d8dada" style="width: 1px"></td>
      </tr>
    </table>
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <h2>{{ containerText }}</h2>
      <div class="field">
        <b-checkbox v-model="fields.showBody2">
          Body 2
        </b-checkbox>
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showFootnote">
          Footnote
        </b-checkbox>
      </div>
    </portal>
  </td>
</template>

<script>
import TextInput from "@/components/core/inputs/TextInput"
import LinkField from "@/components/core/inputs/LinkField"
import { libComponentMixin } from "@/shared/mixins"

export default {
  name: "RauxaRadarCopySectionSpotlight",
  components: {
    TextInput,
    LinkField,
  },
  mixins: [libComponentMixin],
  data: function () {
    return {
      fields: {
        eyebrow: "BEST PRACTICES",
        headline:
          'Passive vs. active content. <br class="hide" /> Yes, there is such a&nbsp;thing.',
        body1:
          "Passive content. Active content. They both have their place. Passive content relies on visitors browsing on their own until they find what they&#8217;re looking for, and it gives them more control. But even the most motivated buyer won&#8217;t browse forever. Content activation turns a passive video or article into a hard-working tool to drive revenue. And with the right balance between the two types of content, brands can&nbsp;benefit.",
        body2:
          '<strong>Recommendation</strong>: Make your content work harder in two ways. First, identify top content and create recommendation logic that features similar articles and information. Second, support content with in-article email capture that can be used for subsequent nurture&nbsp;campaigns.',
        cta: "SEE HOW",
        ctaLink: "https://www.rauxaradar.com/",
        footnote: '*Example footnote.',
        showFootnote: false,
        showBody2: true,
      },
      fallback: "<!--[if gte mso 9]><style>.cta {border: 1px solid #000000 !important;padding: 12px 25px !important;border-collapse: collapse !important;}.resetBorder {border: none !important;}</style><![endif]-->"
    }
  },
  mounted: function () {
    this.$emit("has-controls")
  },
}
</script>

<style lang="scss" scoped></style>
