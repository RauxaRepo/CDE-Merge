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
      <b-field>
        <b-checkbox v-model="fields.showBody">
          Body
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showBulletOne">
          Bullet One
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showBulletTwo">
          Bullet Two
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showBulletThree">
          Bullet Three
        </b-checkbox>
      </b-field>
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
            <tr v-if="fields.showImage">
              <td align="center">
                <!-- section image -->
                <a
                  v-if="!$store.state.editMode && fields.imageLink"
                  :href="fields.imageLink"
                  style="text-decoration:none;"
                >
                  <ImageSelector
                    v-model="fields.image"
                    width="500"
                    border="0"
                    :alt="fields.imageAlt"
                    img-style="display: block;border:0;outline:0;padding:0;width:100%;max-width:500px;height:auto;font-family:Arial,'Helvetica Neue', Helvetica,sans-serif;font-size:14px;color:#3c3b3f;"
                  />
                </a>
                <ImageSelector
                  v-else
                  v-model="fields.image"
                  width="500"
                  border="0"
                  :alt="fields.imageAlt"
                  img-style="display: block;border:0;outline:0;padding:0;width:100%;max-width:500px;height:auto;font-family:Arial,'Helvetica Neue', Helvetica,sans-serif;font-size:14px;color:#3c3b3f;"
                >
                  <LinkField v-model="fields.imageLink" />
                  <b-field label="Alt">
                    <b-input v-model.lazy="fields.imageAlt"></b-input>
                  </b-field>
                </ImageSelector>
                <!-- / section image -->
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:30px 0;">
                <!-- section message -->
                <table
                  v-if="fields.showHeadline"
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
                      <TextInput v-model.lazy="fields.headline" inline="true" />
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
                      <TextInput
                        v-if="fields.showBody"
                        v-model.lazy="fields.body"
                        inline="true"
                        sup-style="font-size:55%; line-height:7px; vertical-align:7px;"
                      />
                      <br v-if="fields.showBulletOne" />
                      <img
                        v-if="fields.showBulletOne"
                        src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/secondary_a_checkmark.png"
                        width="15"
                        height="12"
                        border="0"
                        style="width:15px; height:12px; display:inline-block; font-family:Arial, sans-serif; font-size:16px; color:#2774ae;"
                        alt="&#x2713;"
                      />
                      <TextInput
                        v-if="fields.showBulletOne"
                        v-model.lazy="fields.bulletOne"
                        inline="true"
                      />
                      <br v-if="fields.showBulletTwo" />
                      <img
                        v-if="fields.showBulletTwo"
                        src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/secondary_a_checkmark.png"
                        width="15"
                        height="12"
                        border="0"
                        style="width:15px; height:12px; display:inline-block; font-family:Arial, sans-serif; font-size:16px; color:#2774ae;"
                        alt="&#x2713;"
                      />
                      <TextInput
                        v-if="fields.showBulletTwo"
                        v-model.lazy="fields.bulletTwo"
                        inline="true"
                      />
                      <br v-if="fields.showBulletThree" />
                      <img
                        v-if="fields.showBulletThree"
                        src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/secondary_a_checkmark.png"
                        width="15"
                        height="12"
                        border="0"
                        style="width:15px; height:12px; display:inline-block; font-family:Arial, sans-serif; font-size:16px; color:#2774ae;"
                        alt="&#x2713;"
                      />
                      <TextInput
                        v-if="fields.showBulletThree"
                        v-model.lazy="fields.bulletThree"
                        inline="true"
                      />
                    </td>
                  </tr>
                  <tr v-if="fields.showCta">
                    <td
                      align="center"
                      style="padding-top:30px; padding-bottom:10px;"
                    >
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
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
        showImage: true,
        image:
          'https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/20200211_fa_secondary_a.jpg',
        imageAlt: 'two people on mountain watching the sunset',
        imageLink: `\${clickthrough('secondary_a_40k_img','linkname=secondary_a_40k_img')}`,
        showHeadline: true,
        headline: 'More flying with&nbsp;friends',
        showBody: true,
        body: `<p>Alaska Airlines Visa<sup>&reg;</sup> cardholders get more than just&nbsp;miles.<sup>&dagger;</sup></p>`,
        showBulletOne: true,
        bulletOne: 'Alaskaʼs Famous Companion Fare&trade;&nbsp;offer',
        showBulletTwo: true,
        bulletTwo: '40,000 bonus mile&nbsp;offer',
        showBulletThree: true,
        bulletThree: 'Free checked bag',
        showCta: true,
        ctaText: 'APPLY NOW',
        ctaLink: `\${clickthrough('secondary_a_40k_cta','linkname=secondary_a_40k_cta')}`
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>
