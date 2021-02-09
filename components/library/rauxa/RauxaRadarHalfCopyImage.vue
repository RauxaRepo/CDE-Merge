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
            cellspacing="0"
            cellpadding="0"
            border="0"
            role="presentation"
            style="width: 100%; max-width: 718px"
          >
            <tr>
              <th
                align="left"
                valign="top"
                bgcolor="#ffffff"
                style="
                  vertical-align: top;
                  font-size: 0;
                  direction: rtl;
                  padding: 0;
                "
              >
              <fragment v-if="!$store.state.editMode">
                {{ fallback }}
              </fragment>
                <div
                  style="
                    display: inline-block;
                    width: 50%;
                    min-width: 358px;
                    max-width: 359px;
                    vertical-align: top;
                    font-size: 0;
                    direction: ltr;
                  "
                >
                  <table
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      display: inline-block;
                      vertical-align: bottom;
                      text-align: center;
                      direction: ltr;
                      background-color: #000000;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#000000"
                        style="vertical-align: bottom"
                      >
                        <a
                          v-if="
                            !(
                              $store.state.editMode && !$store.state.previewMode
                            ) && fields.ctaLink
                          "
                          :href="fields.ctaLink"
                          target="_blank"
                        >
                          <ImageSelector
                            v-model="fields.file"
                            alt=""
                            width="358"
                            height="537"
                            border="0"
                            img-style="display: block;
                            font-family: Helvetica, Arial, sans-serif;
                            color: #000000;
                            font-size: 14px;"
                          />
                        </a>
                        <ImageSelector
                          v-else
                          v-model="fields.file"
                          placeholder="/images/rauxa/rr_content-image.gif"
                          alt=""
                          width="358"
                          height="537"
                          border="0"
                          img-style="display: block;
                            font-family: Helvetica, Arial, sans-serif;
                            color: #000000;
                            font-size: 14px;"
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <fragment v-if="!$store.state.editMode">
                  {{ fallback2 }}
                </fragment>
                <div
                  style="
                    display: inline-block;
                    width: 50%;
                    min-width: 358px;
                    max-width: 359px;
                    vertical-align: top;
                    direction: ltr;
                  "
                >
                  <table
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      display: inline-block;
                      vertical-align: top;
                      text-align: center;
                      direction: ltr;
                    "
                  >
                    <tr>
                      <td
                        class="hauto"
                        align="left"
                        valign="top"
                        width="100%"
                        height="467"
                        style="height: 467px"
                      >
                        <table
                          valign="top"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          role="presentation"
                          align="left"
                        >
                          <tr>
                            <td width="100%" calign="left" height="">
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
                                    width="90"
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
                          <tr>
                            <td
                              align="left"
                              valign="top"
                              style="
                                padding-top: 15px; padding-right: 24px; padding-left: 24px; color: #000000; font: bold 16px/18px 'AvenirLTPro-Black', Avenir, Helvetica, Arial, sans-serif;
                              "
                            >
                              <TextInput
                                v-model.lazy="fields.eyebrow"
                                inline="true"
                              ></TextInput>
                            </td>
                          </tr>
                          <tr>
                            <td
                              align="left"
                              valign="top"
                              style="
                                padding-top: 5px; padding-right: 24px; padding-left: 24px; color: #000000; font: bold 32px/34px 'AvenirLTPro-Black', Avenir, Helvetica, Arial, sans-serif;
                              "
                            >
                              <TextInput
                                v-model.lazy="fields.headline"
                                inline="true"
                              ></TextInput>
                            </td>
                          </tr>
                          <tr>
                            <td
                              align="left"
                              valign="top"
                              style="
                                padding-top: 10px;padding-right: 48px;padding-bottom: 24px;padding-left: 24px;color: #000000; font: normal 16px/18px 'AvenirLTPro-Book', Avenir, Helvetica, Arial, sans-serif;
                              "
                            >
                              <TextInput
                                v-model.lazy="fields.body"
                                inline="true"
                              ></TextInput>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="right"
                        width="100%"
                        height="70"
                        valign="top"
                        style="height: 70px; padding-right: 24px"
                      >
                      <fragment v-if="!$store.state.editMode">
                        {{ fallback3 }}
                      </fragment>
                        <table
                          valign="top"
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
                                  />
                                </span>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              <fragment v-if="!$store.state.editMode">
                {{ fallback4 }}
              </fragment>
              </th>
            </tr>
          </table>
        </td>
        <td bgcolor="#d8dada" style="width: 1px"></td>
      </tr>
    </table>
  </td>
</template>

<script>
import ImageSelector from "@/components/core/inputs/ImageSelector"
import TextInput from "@/components/core/inputs/TextInput"
import { libComponentMixin } from "@/shared/mixins"

export default {
  name: "RauxaRadarHalfCopyImage",
  components: {
    TextInput,
    ImageSelector,
  },
  mixins: [libComponentMixin],
  data: function () {
    return {
      fields: {
        file: null,
        eyebrow: 'CREATIVE SPOTLIGHT',
        headline: 'Visualizing “ready” <br class="hide">in a whole new way.',
        body:
          "The idea of being ready for business can feel murky. So our 5 States of Ready emails clearly brought to life different moments for businesses, and used fresh animated visuals to show how Verizon can be there at every step.",
        cta: "SEE MORE",
        ctaLink: "https://rauxaradar.com/december-issue-6-statesofready/",
      },
      fallback: '<!--[if (gte mso 9)|(IE)]><table cellpadding="0" cellspacing="0" border="0" style="width:718px;"><tr><td style="width:359px" valign="top"><![endif]-->',
      fallback2: '<!--[if (gte mso 9)|(IE)]></td><td style="width:358px" valign="top"><![endif]-->',
      fallback3: '<!--[if gte mso 9]><style>.cta {border: 1px solid #000000 !important;padding: 12px 25px !important;border-collapse: collapse !important;}.resetBorder {border: none !important;}</style><![endif]-->',
      fallback4: '<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->'
    }
  },
}
</script>

<style lang="scss" scoped></style>
