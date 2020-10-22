<template>
  <td :key="$store.state.editMode ? `${component.id}_Edit` : component.id " align="center">
    <ImageSelector
      v-model="fields.file"
      placeholder="/images/mck-primary-4-default.png"
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
      style="width: 100%; max-width: 500px;"
    >
      <tr>
        <td
          height="300"
          valign="top"
          align="center"
          bgcolor="#ffffff"
          :background="
            $store.state.editMode
              ? fields.file
                ? fields.file.src
                : ''
              : `./images/${fields.file ? fields.file.name : ''}`
          "
          :style="
            `width: 100%; max-width:500px; height: 300px; background-size: cover; background-position: center bottom; background-repeat: no-repeat; vertical-align: top;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; text-align:center; background-color:#3891dc;${
              $store.state.editMode
                ? ''
                : `background: url(./images/${
                    fields.file ? fields.file.name : ''
                  });`
            }`
          "
        >
          <fragment v-if="!$store.state.editMode">
            {{ backgroundSnippet }}
          </fragment>
          <div>
            <!-- TOP HEADLINE AND BODY COPY -->
            <table
              align="center"
              cellpadding="0"
              cellspacing="0"
              border="0"
              role="presentation"
              style="margin: 0 auto;"
            >
              <tr>
                <td
                  :style="
                    `padding-top:70px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:21px;line-height:21px;color:${fields.textColor};text-align:center; letter-spacing: .05em;`
                  "
                >
                  <strong>
                    <TextInput v-model.lazy="fields.headline" inline="true" />
                  </strong>
                </td>
              </tr>
              <tr>
                <td
                  :style="
                    `padding-top: 5px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:32px;line-height:32px;color:${fields.textColor};text-align:center;`
                  "
                >
                  <strong>
                    <TextInput
                      v-model.lazy="fields.subHeadline"
                      inline="true"
                    />
                  </strong>
                </td>
              </tr>
              <tr v-if="fields.withPercentage">
                <td
                  style="padding-top: 20px; mso-padding-bottom-alt:10px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; color:#ffffff;text-align:center;mso-line-height-rule:exactly;"
                >
                  <table
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    role="presentation"
                    style="width: 200px;margin: 0 auto;"
                  >
                    <tr>
                      <td
                        width="140"
                        :style="
                          `width:140px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:100px;line-height:100px;color:${fields.textColor};text-align:center;mso-line-height-rule:exactly;`
                        "
                      >
                        <strong
                          ><TextInput v-model.lazy="fields.amount" inline="true"
                        /></strong>
                      </td>
                      <td
                        width="60"
                        :style="
                          `width:60px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:${fields.textColor};text-align:center;mso-line-height-rule:exactly;`
                        "
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
                            <!--   -->
                            <td
                              :style="
                                `font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:65px;line-height:46px; color:${fields.textColor};mso-line-height-alt:55px; mso-text-raise: -5px; mso-line-height-rule:exactly;`
                              "
                              class="percent_lh_fix"
                            >
                              <strong>%</strong>
                            </td>
                          </tr>
                          <tr>
                            <td
                              :style="
                                `font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:24px;line-height:24px; padding-top:5px; color:${fields.textColor};mso-line-height-rule:exactly;`
                              "
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
                  :style="`padding-top: 20px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:100px;line-height:100px;color:${fields.textColor};text-align:center;mso-line-height-rule:exactly;`"
                >
                  <span
                    style="font-size:58%; line-height:33px; vertical-align:33px;"
                    ><strong>$</strong></span
                  ><strong
                    ><TextInput v-model.lazy="fields.amount" inline="true"/><span
                      style="font-size:55%; line-height:35px; vertical-align:35px;"
                      >*</span
                    ></strong
                  >
                </td>
              </tr>
            </table>
          </div>
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
  name: 'ASAMCKPrimaryFour',
  components: {
    ColorSelector,
    ImageSelector,
    LinkField,
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      textColors: ['#48A9C5', '#2774AE', '#FFFFFF'],
      closingBackgroundSnippet: `
        <!--[if gte mso 9]>
        </td></tr></table>
        </v:textbox>
        </v:rect>
        <![endif]-->
      `,
      fields: {
        file: null,
        headline: 'ONE-WAY FLIGHTS',
        subHeadline: 'STARTING&nbsp;AT',
        textColor: '#FFFFFF',
        amount: 'XX',
        withPercentage: false
      }
    }
  },
  computed: {
    backgroundSnippet() {
      return this.fields.file
        ? `<!--[if gte mso 9]>
                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:500px; height:300px;">
                <v:fill type="frame" color="#3891dc" src="./images/${this.fields.file.name}" />
                <v:textbox inset="0,0,0,0">
                <table cellpadding="0" cellspacing="0"><tr><td height="300" align="center" valign="top" style="width:500px;height:300px;">
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
