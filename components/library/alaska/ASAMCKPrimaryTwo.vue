<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
  >
    <ImageSelector
      v-model="fields.file"
      placeholder="/images/mck-primary-2-default.jpg"
      width="500"
      border="0"
      :container-text="`${containerText}`"
      :controls-id="component.id"
    >
      <b-field>
        <b-checkbox v-model="fields.showHeadline">
          Headline
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showCta">
          CTA
        </b-checkbox>
      </b-field>
      <h4>Background</h4>
      <p><small>Image size must be 1000 x 900px.</small></p>
    </ImageSelector>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width: 100%; max-width: 500px;"
    >
      <tr>
        <td
          height="450"
          valign="top"
          align="center"
          bgcolor="#ffffff"
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
            `width:100%; max-width: 500px; height: 450px;vertical-align: top;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; text-align:center;background-color:#2774ae;${
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
          <fragment v-if="!$store.state.editMode || $store.state.emailMode">
            {{ backgroundSnippet }}
          </fragment>
          <div>
            <!-- TOP HEADLINE AND BODY COPY -->
            <table
              v-if="fields.showHeadline"
              align="center"
              cellpadding="0"
              cellspacing="0"
              border="0"
              role="presentation"
              style="margin: 0 auto;"
            >
              <tr>
                <td
                  align="center"
                  :style="
                    `padding-top: 50px; font-size:36px; line-height:40px; color:${fields.textColor};`
                  "
                >
                  <strong>
                    <TextInput v-model.lazy="fields.headline" inline="true">
                      <ColorSelector
                        v-model="fields.textColor"
                        :colors="textColors"
                        title="Color"
                      />
                    </TextInput>
                  </strong>
                </td>
              </tr>
            </table>

            <!-- CTA AND SUB COPY -->
            <table
              v-if="fields.showCta"
              align="center"
              cellpadding="0"
              cellspacing="0"
              border="0"
              role="presentation"
              style="margin: 0 auto;"
            >
              <tr>
                <td
                  align="center"
                  width="500"
                  style="width:100%; max-width: 500px; padding-top: 20px;"
                >
                  <table
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    role="presentation"
                  >
                    <tr>
                      <td align="center">
                        <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                          {{ ctaSnippet }}
                        </fragment>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          role="presentation"
                          class="primary2_cta"
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
                  </table>
                </td>
              </tr>
            </table>
          </div>
          <fragment v-if="!$store.state.editMode || $store.state.emailMode">
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
  name: 'ASAMCKPrimaryTwo',
  components: {
    ColorSelector,
    ImageSelector,
    LinkField,
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      ctaSnippet: `
        <!-- border cta -->
        <!--[if gte mso 9]>
        <style type="text/css">
          .primary2_cta {
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
      closingBackgroundSnippet: `
        <!--[if gte mso 9]>
        </td></tr></table>
        </v:textbox>
        </v:rect>
        <![endif]-->
      `,
      textColors: ['#2774ae', '#FFFFFF'],
      fields: {
        file: null,
        headline: '<p>Lorem ipsum headline </p><p>$XX/XX% OFF</p>',
        textColor: '#FFFFFF',
        ctaText: 'CTA 20 CHAR MAX',
        link: '',
        showHeadline: true,
        showCta: true,
      }
    }
  },
  computed: {
    backgroundSnippet() {
      return this.fields.file
        ? `<!--[if gte mso 9]>
                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:500px; height:450px;">
                <v:fill type="frame" color="#2774ae" src="./images/${this.fields.file.name}" />
                <v:textbox inset="0,0,0,0">
                <table role="presentation" cellpadding="0" cellspacing="0"><tr><td height="450" align="center" valign="top" style="width:500px;height:450px;">
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
