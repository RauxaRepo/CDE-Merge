<template>
  <td :key="$store.state.editMode ? `${component.id}_Edit` : component.id " align="center">
    <ImageSelector
      v-model="fields.file"
      width="500"
      border="0"
      :container-text="`${containerText}`"
      :controls-id="component.id"
    >
      <ColorSelector
        v-model="fields.textColor"
        :colors="textColors"
        title="Text Color"
      />
      <div class="field">
        <div class="field">
          <b-checkbox v-model="fields.showLegal">
            Legal
          </b-checkbox>
        </div>
        <div class="field">
          <b-checkbox v-model="fields.withPercentage">
            Percent off version
          </b-checkbox>
        </div>
      </div>
      <h4>Background</h4>
    </ImageSelector>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width: 100%; max-width: 500px;background-color: #ffffff;"
    >
      <tr>
        <td
          align="center"
          valign="top"
          :background="
            typeof fields.file === 'string'
              ? fields.file
              : $store.state.editMode
              ? fields.file
                ? fields.file.src
                : ''
              : `./images/${fields.file ? fields.file.name : ''}`
          "
          :style="
            `max-width:500px; height: 460px;padding-top: 60px; padding-bottom: 60px;${
              $store.state.editMode
                ? ''
                : `background-image: url(${
                    typeof fields.file === 'string'
                      ? fields.file
                      : `./images/${fields.file ? fields.file.name : ''}`
                  });`
            }background-size: cover; background-position: center; background-repeat: no-repeat;`
          "
        >
          <fragment v-if="!$store.state.editMode">
            {{ backgroundSnippet }}
          </fragment>
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width: 100%;"
          >
            <tr>
              <td
                :style="
                  `font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:36px;line-height:38px;color:${fields.textColor};text-align:center; letter-spacing: .05em;`
                "
              >
                <strong>
                  <TextInput v-model.lazy="fields.headline" inline="true" />
                </strong>
              </td>
            </tr>
            <tr>
              <td
                :style="`padding-top: 5px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:21px;line-height:24px;color:${fields.textColor};text-align:center;letter-spacing: .13em;`"
              >
                <strong>
                  <TextInput v-model.lazy="fields.subHeadline" inline="true" />
                </strong>
              </td>
            </tr>
            <tr v-if="fields.withPercentage">
              <td
                :style="
                  `padding-top: 20px; mso-padding-bottom-alt:10px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; color:${fields.textColor};text-align:center;mso-line-height-rule:exactly;`
                "
              >
                <table
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                  style="width: 285px;margin: 0 auto;"
                >
                  <tr>
                    <td
                      width="200 "
                      :style="`width:200px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:140px;line-height:140px;color:${fields.textColor};text-align:center;mso-line-height-rule:exactly;`"
                    >
                      <strong>
                        <TextInput v-model.lazy="fields.amount" inline="true" />
                      </strong>
                    </td>
                    <td
                      width="85"
                      :style="`width:85px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:${fields.textColor};text-align:center;mso-line-height-rule:exactly;`"
                    >
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="width: 100%"
                      >
                        <tr>
                          <td
                            :style="`font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:90px;line-height:60px; mso-line-height-alt:72px; mso-text-raise: -10px;color:${fields.textColor};mso-line-height-rule:exactly;`"
                          >
                            <strong>%</strong>
                          </td>
                        </tr>
                        <tr>
                          <td
                            :style="`font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:36px;line-height:36px; padding-top:5px; color:${fields.textColor};mso-line-height-rule:exactly;`"
                          >
                            <strong
                              >OFF<span
                                style="font-size:65%; line-height:10px; vertical-align:10px;"
                                >*</span
                              ></strong
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr v-else>
              <td
                :style="`padding-top: 20px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:140px;line-height:140px;color:${fields.textColor};text-align:center;mso-line-height-rule:exactly;`"
              >
                <span
                  style="font-size:58%; line-height:44px; vertical-align:44px;"
                  ><strong>$</strong></span
                ><strong
                  ><TextInput v-model.lazy="fields.amount" inline="true" /><span
                    style="font-size:55%; line-height:46px; vertical-align:46px;"
                    >*</span
                  ></strong
                >
              </td>
            </tr>
            <tr>
              <td align="center">
                <fragment v-if="!$store.state.editMode">
                  {{ ctaSnippet }}
                </fragment>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                  class="primary3a_cta"
                >
                  <tr>
                    <td>
                      <div>
                        <a
                          v-if="
                            (!$store.state.editMode ||
                              $store.state.previewMode) &&
                              fields.link
                          "
                          :href="fields.link"
                          style="background-color:#2774ae; border: 2px solid #2774ae; padding: 11px 20px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none; border-collapse: collapse;"
                          class="resetBorder buttonHover"
                        >
                          <TextInput
                            v-model.lazy="fields.ctaText"
                            inline="true"
                          />
                        </a>
                        <span
                          v-else
                          style="background-color:#2774ae; border: 2px solid #2774ae; padding: 11px 20px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none; border-collapse: collapse;"
                          class="resetBorder buttonHover"
                        >
                          <TextInput
                            v-model.lazy="fields.ctaText"
                            inline="true"
                          >
                            <LinkField v-model="fields.link" />
                          </TextInput>
                        </span>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- /border cta -->
              </td>
            </tr>
            <tr v-if="fields.showLegal">
              <td
                style="padding-top: 20px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;line-height:17px;color:#656565;text-align:center;"
              >
                <TextInput
                  v-model.lazy="fields.legal"
                  inline="true"
                  link-style="text-decoration:underline; color: #656565;"
                />
              </td>
            </tr>
          </table>

          <fragment v-if="!$store.state.editMode">
            {{ closingBackgroundSnippet }}
          </fragment>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import ColorSelector from '@/components/core/inputs/ColorSelector'
import ImageSelector from '@/components/core/inputs/ImageSelector'
import { libComponentMixin } from '@/shared/mixins'
import LinkField from '@/components/core/inputs/LinkField'

export default {
  name: 'ASAMCKPrimaryThree',
  components: {
    ColorSelector,
    ImageSelector,
    LinkField,
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      textColors: ['#2774ae', '#FFFFFF'],
      closingBackgroundSnippet: `
        <!--[if gte mso 9]>
        </td></tr></table>
        </v:textbox>
        </v:rect>
        <![endif]-->
      `,
      ctaSnippet: `
        <!-- border cta -->
        <!--[if gte mso 9]>
        <style type="text/css">
          .primary3a_cta {
            background-color: #2774ae !important;
            border: 2px solid #2774ae !important;
            padding: 11px 20px !important;
            border-collapse: collapse !important;
          }

          .resetBorder {
            border: none !important;
          }
        </style>
      <![endif]-->
        `,
      fields: {
        file: null,
        headline: 'ONE DAY ONLY!',
        subHeadline: 'ONE-WAY STARTING&nbsp;AT',
        textColor: '#2774ae',
        amount: 'XX',
        withPercentage: false,
        showLegal: true,
        legal: '*Legal line about offer goes here with link.',
        ctaText: 'CTA 20 CHAR MAX',
        link: ''
      }
    }
  },
  computed: {
    backgroundSnippet() {
      return this.fields.file
        ? `<!--[if gte mso 9]>
                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:500px; height:460px;">
                <v:fill type="frame" color="#2774ae" src="./images/${this.fields.file.name}" />
                <v:textbox inset="0,0,0,0">
                <table cellpadding="0" cellspacing="0"><tr><td height="460" align="center" valign="top" style="width:500px;height:460px;">
                <!
          [endif]-->`
        : ''
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>
