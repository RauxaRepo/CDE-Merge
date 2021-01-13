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
        <b-checkbox v-model="fields.showDividerTop">
          Divider Top
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showImage">
          Image
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showHeadline">
          Headline
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showDisclaimer">
          Disclaimer
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showCta">
          CTA
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showDividerBottom">
          Divider Bottom
        </b-checkbox>
      </b-field>
    </portal>
    <fragment v-if="!$store.state.editMode">
      {{ openTableSnippet }}
    </fragment>
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%; max-width: 500px; background-color: #ffffff;"
    >
      <!-- dividing line -->
      <tr v-if="fields.showDividerTop">
        <td align="center">
          <table
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
      <!-- / dividing line -->
      <tr>
        <td align="center" valign="top" style="">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width: 68%;"
          >
            <tr v-if="fields.showImage">
              <td align="center" style="padding: 50px 0 0 0;">
                <a
                  v-if="!$store.state.editMode && fields.imageLink"
                  :href="fields.imageLink"
                  style="text-decoration:none;"
                >
                  <ImageSelector
                    v-model="fields.image"
                    width="229"
                    height=""
                    border="0"
                    :alt="fields.imageAlt"
                    img-style="display:block; width:229px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#2774ae;"
                  />
                </a>
                <ImageSelector
                  v-else
                  v-model="fields.image"
                  width="229"
                  height=""
                  border="0"
                  :alt="fields.imageAlt"
                  img-style="display:block; width:229px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#2774ae;"
                >
                  <LinkField v-model="fields.imageLink" />
                  <b-field label="Alt">
                    <b-input v-model.lazy="fields.imageAlt"></b-input>
                  </b-field>
                </ImageSelector>
              </td>
            </tr>
            <tr v-if="fields.showHeadline">
              <td
                style="padding: 30px 0 25px 0;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:24px;line-height:30px;color:#2774ae;text-align:center;"
              >
                <strong>
                  <TextInput v-model.lazy="fields.headline" inline="true" />
                </strong>
              </td>
            </tr>
            <tr v-if="fields.showDisclaimer">
              <td
                style="padding: 0 0 35px 0; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:16px;line-height:24px;color:#3c3b3f;text-align:center;"
              >
                <TextInput
                  v-model.lazy="fields.disclaimer"
                  inline="true"
                  sup-style="font-size:55%; line-height:6px; vertical-align:6px;"
                />
              </td>
            </tr>
            <tr v-if="fields.showCta">
              <td align="center" style="padding: 0 0 50px 0;">
                <fragment v-if="!$store.state.editMode">
                  {{ ctaSnippet }}
                </fragment>
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                >
                  <tr>
                    <td class="secondary_b_fasttrack_cta">
                      <div>
                        <a
                          v-if="
                            (!$store.state.editMode ||
                              $store.state.previewMode) &&
                              fields.ctaLink
                          "
                          :href="fields.ctaLink"
                          style="border: 2px solid #2774ae; padding: 11px 24px; border-radius: 0px; color: #2774ae; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none;"
                          class="resetBorder buttonHoverBorderBlue"
                        >
                          <TextInput
                            v-model.lazy="fields.ctaText"
                            inline="true"
                          />
                        </a>
                        <span
                          v-else
                          style="border: 2px solid #2774ae; padding: 11px 24px; border-radius: 0px; color: #2774ae; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none;"
                          class="resetBorder buttonHoverBorderBlue"
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
      <tr v-if="fields.showDividerBottom">
        <td align="center">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            align="center"
            style="width:50%; max-width: 200px;"
          >
            <tr>
              <td
                align="center"
                style="padding: 0 0 0 0; border-top: 2px solid #f1f1f1;mso-line-height-rule: exactly;"
              ></td>
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
  name: 'ASASecondaryBankCCSeven',
  components: {
    LinkField,
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      openTableSnippet: ` <!--[if (gte mso 9)|(IE)]>
      <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="width:500px;">
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
          .secondary_b_fasttrack_cta {border:2px solid #2774ae !important;padding:11px 24px !important;border-collapse:collapse !important;}
          .resetBorder {border:none !important;}
          </style>
          <![endif]-->
        `,
      fields: {
        showDividerTop: true,
        showImage: true,
        image:
          'https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/ABANXX_WE_CC_CTM_LRG_MKT_B_shadow.png',
        imageAlt: 'Alaska Airlines Mastercard credit card',
        imageLink: `\${clickthrough('secondary_a_canadacard_img','linkname=secondary_a_canadacard_img')}`,
        showHeadline: true,
        headline: '<p>$100 statement credit</p><p>is just the start.</p>',
        showCta: true,
        ctaText: 'APPLY NOW',
        ctaLink: `\${clickthrough('secondary_a_canadacard_cta','linkname=secondary_a_canadacard_cta')}`,
        showDisclaimer: true,
        disclaimer: '<p>Apply today and you could get a $100 statement credit offer<sup>&dagger;</sup> after qualifying spend, plus exclusive cardholder benefits built for our Canadian&nbsp;guests.</p>',
        showDividerBottom: true
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>
