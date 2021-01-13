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
        <b-checkbox v-model="fields.showImage">
          Image
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showHeadline">
          Headline
        </b-checkbox>
      </b-field>
      <b-field v-if="fields.showHeadline">
        <b-checkbox v-model="fields.showIcon">
          Headline Inline Icon
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showImageHeadline">
          Image-based headline
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
        <b-checkbox v-model="fields.showDivider">
          Bottom Divider
        </b-checkbox>
      </b-field>
    </portal>
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%; max-width: 500px; background-color: #ffffff;"
    >
      <tr>
        <td align="center" valign="top" style="">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width: 100%;"
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
                    width="227"
                    border="0"
                    :alt="fields.imageAlt"
                    img-style="display:block; width:227px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#2774ae;"
                  />
                </a>
                <ImageSelector
                  v-else
                  v-model="fields.image"
                  width="227"
                  border="0"
                  :alt="fields.imageAlt"
                  img-style="display:block; width:227px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#2774ae;"
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
                align="center"
                style="padding-top: 25px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:24px;line-height:30px;color:#2774ae;"
              >
                <!-- Headline font-size/line-height is either 24/30 or 30/40 -->
                <strong>
                  <img
                    v-if="fields.showIcon"
                    src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/secondary_e_newperks_icon.png"
                    width="22"
                    border="0"
                    style="width: 22px; height: auto; display:inline-block;"
                    alt=""
                  />
                  <TextInput v-model.lazy="fields.headline" inline="true" />
                </strong>
              </td>
            </tr>

            <!-- optional image-based header  -->
            <tr v-if="fields.showImageHeadline">
              <td align="center" style="padding: 30px 0 10px 0;">
                <ImageSelector
                  v-model="fields.imageHeadline"
                  width="186"
                  height=""
                  border="0"
                  :alt="fields.imageHeadlineAlt"
                  img-style="display:block; width:186px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#2774ae;"
                >
                  <b-field label="Alt">
                    <b-input v-model.lazy="fields.imageHeadlineAlt"></b-input>
                  </b-field>
                </ImageSelector>
              </td>
            </tr>
            <!-- optional image-based header  -->
          </table>

          <table
            v-if="fields.showDisclaimer"
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width:55%;"
          >
            <tr>
              <td
                style="padding: 15px 0 35px 0; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:16px;line-height:24px;color:#3c3b3f;text-align:center;"
              >
                <TextInput
                  v-model.lazy="fields.disclaimer"
                  inline="true"
                  sup-style="font-size:55%; line-height:7px; vertical-align:7px;"
                />
              </td>
            </tr>
          </table>

          <table
            v-if="fields.showCta"
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width:100%;"
          >
            <tr>
              <td align="center" style="padding: 0 0 40px 0;">
                <fragment v-if="!$store.state.editMode">
                  {{ ctaSnippet }}
                </fragment>
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td class="card_cta">
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
      <!-- divider line -->
      <tr v-if="fields.showDivider">
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
      <!-- / divider line -->
    </table>
  </td>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'
import LinkField from '@/components/core/inputs/LinkField'

export default {
  name: 'ASASecondaryBankCCThree',
  components: {
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
        .card_cta {border:2px solid #2774ae !important;padding:11px 24px !important;border-collapse:collapse !important;}
        .resetBorder {border:none !important;}
        </style>
        <![endif]-->
        `,
      fields: {
        showImage: true,
        image:
          'https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/20200708_Statement_visa_sig_card_anita.png',
        imageAlt: 'Alaska Airlines Visa Signature card',
        imageLink: `\${clickthrough('secondary_a_40k_img','linkname=secondary_a_40k_img')}`,
        showIcon: true,
        showHeadline: true,
        headline: '40,000 bonus mile offer.',
        showImageHeadline: true,
        imageHeadline:
          'https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/2019_estatement_refresh_secondary_d_card_HL.jpg',
        imageHeadlineAlt: '40,000 bonus mile offer.',
        showCta: true,
        ctaText: 'APPLY NOW',
        ctaLink: `\${clickthrough('secondary_a_40k_cta','linkname=secondary_a_40k_cta')}`,
        showDivider: true,
        showDisclaimer: true,
        disclaimer: `<p>Ready for more? Get a 40,000 bonus mile offer with the Alaska Airlines</p><p>Visa Signature card.<sup>&dagger;</sup></p>`
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>
