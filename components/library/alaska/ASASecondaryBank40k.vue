<template>
  <td align="center">
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
      </div>
      <b-field>
        <b-checkbox v-model="fields.showCta">
          CTA
        </b-checkbox>
      </b-field>
    </portal>
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%;max-width:500px;"
    >
      <tr>
        <td style="background-color:#ffffff;">
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="width:100%;"
          >
            <tr>
              <td align="center">
                <!-- section image -->
                <a
                  href="${clickthrough('secondary_a_40k_img','linkname=secondary_a_40k_img')}"
                  style="text-decoration:none;"
                >
                  <img
                    src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/20200211_fa_secondary_a.jpg"
                    width="500"
                    border="0"
                    alt="two people on mountain watching the sunset"
                    style="display: block;border:0;outline:0;padding:0;width:100%;max-width:500px;height:auto;font-family:Arial,'Helvetica Neue', Helvetica,sans-serif;font-size:14px;color:#3c3b3f;"
                  />
                </a>
                <!-- / section image -->
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:30px 0;">
                <!-- section message -->
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="width:80%; max-width:400px;"
                >
                  <tr>
                    <td
                      style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-weight:bold;font-size:30px;line-height:40px;color:#2774ae;text-align:center;"
                    >
                      More flying with&nbsp;friends
                    </td>
                  </tr>
                </table>

                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="width:92%; max-width:460px;"
                >
                  <tr>
                    <td
                      style="padding-top:20px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:26px;color:#3c3b3f;text-align:center;"
                    >
                      Alaska Airlines Visa<span
                        style="font-size:55%; line-height:7px; vertical-align:7px;"
                        >&reg;</span
                      >
                      cardholders get more than just&nbsp;miles.<span
                        style="font-size:55%; line-height:7px; vertical-align:7px;"
                        >&dagger;</span
                      >
                      <br />
                      <img
                        src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/secondary_a_checkmark.png"
                        width="15"
                        height="12"
                        border="0"
                        style="width:15px; height:12px; display:inline-block; font-family:Arial, sans-serif; font-size:16px; color:#2774ae;"
                        alt="&#x2713;"
                      />
                      Alaskaʼs Famous Companion Fare&trade;&nbsp;offer
                      <br />
                      <img
                        src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/secondary_a_checkmark.png"
                        width="15"
                        height="12"
                        border="0"
                        style="width:15px; height:12px; display:inline-block; font-family:Arial, sans-serif; font-size:16px; color:#2774ae;"
                        alt="&#x2713;"
                      />
                      40,000 bonus mile&nbsp;offer
                      <br />
                      <img
                        src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/secondary_a_checkmark.png"
                        width="15"
                        height="12"
                        border="0"
                        style="width:15px; height:12px; display:inline-block; font-family:Arial, sans-serif; font-size:16px; color:#2774ae;"
                        alt="&#x2713;"
                      />
                      Free checked bag
                    </td>
                  </tr>
                  <tr v-if="fields.showCta">
                    <td
                      align="center"
                      style="padding-top:30px; padding-bottom:10px;"
                    >
                      <fragment v-if="!$store.state.editMode">
                        {{ ctaSnippet }}
                      </fragment>
                      <table
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        class="secondary_a_40k_cta"
                      >
                        <tr>
                          <td>
                            <div>
                              <a
                                v-if="
                                  (!$store.state.editMode ||
                                    $store.state.previewMode) &&
                                    fields.ctaLink
                                "
                                :href="fields.ctaLink"
                                style="background-color:#ffffff; border: 2px solid #2774ae; padding: 12px 25px; border-radius: 0px; color: #2774ae; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none; border-collapse: collapse;"
                                class="resetBorder buttonHoverBorderBlue"
                              >
                                <TextInput
                                  v-model.lazy="fields.ctaText"
                                  inline="true"
                                />
                              </a>
                              <span
                                v-else
                                style="background-color:#ffffff; border: 2px solid #2774ae; padding: 12px 25px; border-radius: 0px; color: #2774ae; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none; border-collapse: collapse;"
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

                <!-- / section message -->
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'
import LinkField from '@/components/core/inputs/LinkField'

export default {
  name: 'ASASecondaryBank40k',
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
            .secondary_a_40k_cta { background-color:#ffffff !important; border: 2px solid #2774ae !important; padding:12px 25px !important; border-collapse: collapse !important;}
            .resetBorder { border: none !important; }
        </style>
        <![endif]-->
        `,
      fields: {
        showIcon: true,
        showImageHeadline: true,
        showCta: true,
        ctaText: 'APPLY NOW',
        ctaLink: `\${clickthrough('secondary_a_40k_cta','linkname=secondary_a_40k_cta')}`,
        showDivider: true
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>
