<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
  >
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
      </div>
      <b-field>
        <b-checkbox v-model="fields.showDivider">
          Divider
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showAnd">
          And
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showCta">
          CTA
        </b-checkbox>
      </b-field>
    </portal>
    <fragment v-if="!$store.state.editMode">
      {{ openTableSnippet }}
    </fragment>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width:100%; max-width: 500px; background-color: #ffffff;"
    >
      <!-- dividing line -->
      <tr>
        <td align="center" style="padding: 0 0 50px 0;">
          <table
            v-if="fields.showDivider"
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="max-width:200px;"
          >
            <tr>
              <td
                height="2"
                width="100"
                style="height:2px; width:200px; max-width: 200px; font-size:0;line-height:2px; background-color:#f1f1f1;"
              >
                &nbsp;
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- dividing line -->
    </table>

    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%; max-width: 500px; background-color: #ffffff;"
    >
      <tr>
        <td align="center" valign="top">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width: 100%;"
          >
            <tr>
              <td align="center">
                <a
                  v-if="!$store.state.editMode && fields.imageLink"
                  :href="fields.imageLink"
                  style="text-decoration:none;"
                >
                  <ImageSelector
                    v-model="fields.image"
                    width="233"
                    height=""
                    border="0"
                    :alt="fields.imageAlt"
                    img-style="display:block; width:233px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#2774ae;"
                  />
                </a>
                <ImageSelector
                  v-else
                  v-model="fields.image"
                  width="233"
                  height=""
                  border="0"
                  :alt="fields.imageAlt"
                  img-style="display:block; width:233px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#2774ae;"
                >
                  <LinkField v-model="fields.imageLink" />
                  <b-field label="Alt">
                    <b-input v-model.lazy="fields.imageAlt"></b-input>
                  </b-field>
                </ImageSelector>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style="padding-top: 40px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:24px;line-height:30px; color:#2774ae;"
              >
                <strong>
                  <TextInput
                    v-model.lazy="fields.headline"
                    inline="true"
                    sup-style="font-size:55%; line-height:6px; vertical-align:6px;"
                  />
                </strong>
              </td>
            </tr>
            <tr v-if="fields.showAnd">
              <td
                align="center"
                style="padding-top:5px; padding-bottom: 5px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:24px;line-height:30px; color:#40A9C7;"
              >
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                >
                  <tr>
                    <td
                      height="40"
                      valign="middle"
                      align="center"
                      style="height:40px; vertical-align:middle; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:0px; color:#40A9C7;"
                      class="mobpadrl5"
                    >
                      <img
                        src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/20201007_Statement_primary_divider.png"
                        width="150"
                        border="0"
                        style="display:block; width:100%; max-width:150px; height:auto;"
                        alt=""
                      />
                    </td>
                    <td
                      height="40"
                      width="52"
                      valign="middle"
                      align="center"
                      style="width:52px; height:40px; vertical-align:middle; padding-left: 5px; padding-right: 5px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:24px;line-height:30px; color:#40A9C7;"
                    >
                      <strong>and</strong>
                    </td>
                    <td
                      height="40"
                      valign="middle"
                      align="center"
                      style="height:40px; vertical-align:middle; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:0px; color:#40A9C7;"
                      class="mobpadrl5"
                    >
                      <img
                        src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/20201007_Statement_primary_divider.png"
                        width="150"
                        border="0"
                        style="display:block; width:100%; max-width:150px; height:auto;"
                        alt=""
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr v-if="fields.showAnd">
              <td
                align="center"
                style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:24px;line-height:30px; color:#2774ae;"
              >
                <strong
                  ><TextInput v-model.lazy="fields.andText" inline="true"
                /></strong>
              </td>
            </tr>
          </table>

          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width:100%;"
          >
            <tr>
              <td
                align="center"
                :style="`padding: ${fields.showCta ? `40px` : `0`} 0 50px 0;`"
              >
                <fragment v-if="fields.showCta && !$store.state.editMode">
                  {{ ctaSnippet }}
                </fragment>
                <table
                  v-if="fields.showCta"
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                >
                  <tr>
                    <td class="secondary_a_40k_cta">
                      <div>
                        <a
                          v-if="
                            (!$store.state.editMode ||
                              $store.state.previewMode) &&
                              fields.ctaLink
                          "
                          :href="fields.ctaLink"
                          style="border: 2px solid #2774ae; padding: 11px 24px; border-radius: 0px; color: #2774ae; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none;"
                          class="resetBorder buttonHoverBorder"
                        >
                          <TextInput
                            v-model.lazy="fields.ctaText"
                            inline="true"
                          />
                        </a>
                        <span
                          v-else
                          style="border: 2px solid #2774ae; padding: 11px 24px; border-radius: 0px; color: #2774ae; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none;"
                          class="resetBorder buttonHoverBorder"
                        >
                          <TextInput
                            v-model.lazy="fields.ctaText"
                            inline="true"
                          >
                            <LinkField v-model="fields.ctaLink" />
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

    <fragment v-if="!$store.state.editMode">
      {{ closeTableSnippet }}
    </fragment>
  </td>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'
import LinkField from '@/components/core/inputs/LinkField'

export default {
  name: 'ASASecondaryBankCCSix',
  components: {
    LinkField,
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      openTableSnippet: `<!--[if (gte mso 9)|(IE)]>
    <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:500px;">
    <tr>
    <td align="center" valign="top">
    <![endif]-->`,
      closeTableSnippet: `
      <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
      <![endif]-->`,
      ctaSnippet: `
        <!-- border cta -->
        <!--[if gte mso 9]>
          <style type="text/css">
            .secondary_a_40k_cta {
              border: 2px solid #2774ae !important;
              padding: 11px 24px !important;
              border-collapse: collapse !important;
            }
            .resetBorder {
              border: none !important;
            }
          </style>
        <![endif]-->
        `,
      fields: {
        image:
          'https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/20201104_statement_secondaryA_CC.png',
        imageAlt: 'Alaska Airlines Visa credit card',
        imageLink: `\${clickthrough('secondary_a_40k_img','linkname=secondary_a_40k_img')}`,
        headline:
          '<p>$0 introductory annual fee,</p><p>then $75 per&nbsp;year<sup>†</sup></p>',
        showAnd: true,
        andText: '40,000 bonus mile offer.*',
        showCta: true,
        ctaText: 'APPLY NOW',
        ctaLink: `\${clickthrough('secondary_a_canadacard_cta','linkname=secondary_a_canadacard_cta')}`,
        showDivider: true
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>
