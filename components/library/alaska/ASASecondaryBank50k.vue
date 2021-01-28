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
        <b-checkbox v-model="fields.showHeadlineImage">
          Headline Image
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showImage">
          Image
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
            v-if="fields.showDividerTop"
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="width:100%;"
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
        <td
          align="center"
          valign="top"
          :style="
            `width: 100%;${fields.showCta ? '' : 'padding: 0 0 50px 0;;'}`
          "
        >
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width: 100%;"
          >
            <tr v-if="fields.showHeadlineImage">
              <td align="center">
                <a
                  v-if="!$store.state.editMode && fields.imageHeadlineLink"
                  :href="fields.imageHeadlineLink"
                  style="text-decoration:none;"
                >
                  <ImageSelector
                    v-model="fields.imageHeadline"
                    width="258"
                    height=""
                    border="0"
                    :alt="fields.imageHeadlineAlt"
                    img-style="display:block; width:258px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#2774ae;"
                  />
                </a>
                <ImageSelector
                  v-else
                  v-model="fields.imageHeadline"
                  placeholder="/images/alaska/20210106_Statement_secondaryA_CC50k_lockup.png"
                  width="258"
                  height=""
                  border="0"
                  :alt="fields.imageHeadlineAlt"
                  img-style="display:block; width:258px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#2774ae;"
                >
                  <b-field label="Link URL">
                    <b-input v-model.lazy="fields.imageHeadlineLink"></b-input>
                  </b-field>
                  <b-field label="Alt">
                    <b-input v-model.lazy="fields.imageHeadlineAlt"></b-input>
                  </b-field>
                </ImageSelector>
              </td>
            </tr>
            <tr v-if="fields.showImage">
              <td align="center">
                <a
                  v-if="!$store.state.editMode && fields.imageLink"
                  :href="fields.imageLink"
                  style="text-decoration:none;"
                >
                  <ImageSelector
                    v-model="fields.image"
                    width="261"
                    height=""
                    border="0"
                    :alt="fields.imageAlt"
                    img-style="display:block; width:261px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#2774ae;"
                  />
                </a>
                <ImageSelector
                  v-else
                  v-model="fields.image"
                  placeholder="/images/alaska/20210106_Statement_secondaryA_CCtouchless.png"
                  width="261"
                  height=""
                  border="0"
                  :alt="fields.imageAlt"
                  img-style="display:block; width:261px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#2774ae;"
                >
                  <b-field label="Link URL">
                    <b-input v-model.lazy="fields.imageLink"></b-input>
                  </b-field>
                  <b-field label="Alt">
                    <b-input v-model.lazy="fields.imageAlt"></b-input>
                  </b-field>
                </ImageSelector>
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
              <td align="center" style="padding: 40px 0 50px 0;">
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
                    <td class="secondary_a_50k_cta">
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
          .secondary_a_50k_cta {border:2px solid #2774ae !important;padding:11px 24px !important;border-collapse:collapse !important;}
          .resetBorder {border:none !important;}
          </style>
          <![endif]-->
        `,
      fields: {
        showDividerTop: true,
        showHeadlineImage: true,
        imageHeadline: null,
        imageHeadlineAlt: 'Get a 50,000 bonus mile offer.',
        imageHeadlineLink: `\${clickthrough('secondary_a_50k_img','linkname=secondary_a_50k_img')}`,
        showImage: true,
        image: null,
        imageAlt: 'Alaska Airlines Visa Sagnature credit card',
        imageLink: `\${clickthrough('secondary_a_50k_img','linkname=secondary_a_50k_img')}`,
        showCta: true,
        ctaText: 'APPLY NOW',
        ctaLink: `\${clickthrough('secondary_a_50k_cta','linkname=secondary_a_50k_cta')}`
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>
