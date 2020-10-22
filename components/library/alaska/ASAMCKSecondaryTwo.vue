<template>
  <td  :key="$store.state.editMode ? `${component.id}_Edit` : component.id " align="center">
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
        <ColorSelector
          v-model="fields.bgColor"
          :colors="bgColors"
          title="BG Color"
        />
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showIcon">
          Icon
        </b-checkbox>
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showHeadline">
          Headline
        </b-checkbox>
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showBody">
          Body Copy
        </b-checkbox>
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showCTA">
          CTA
        </b-checkbox>
      </div>
    </portal>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width:100%; max-width: 500px; background-color: #53B390;"
    >
      <tr>
        <td
          align="center"
          valign="top"
          style="padding-top: 60px; padding-bottom: 60px;"
        >
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width: 65%; max-width:325px;"
          >
            <tr>
              <td align="center">
                <ImageSelector
                  v-model="fields.file"
                  placeholder="/images/location_icon.png"
                  width="82"
                  border="0"
                  alt=""
                  img-style="display:block; width:49px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#ffffff;"
                />
              </td>
            </tr>
            <tr>
              <td
                style="padding-top: 30px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:24px;line-height:30px;color:#ffffff;text-align:center;"
              >
                <strong>
                  <TextInput v-model.lazy="fields.headline" inline="true" />
                </strong>
              </td>
            </tr>
            <tr>
              <td
                style="padding-top: 20px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:16px;line-height:24px;color:#ffffff;text-align:center;"
              >
                <TextInput v-model.lazy="fields.body" />
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-top: 20px;">
                <fragment v-if="!$store.state.editMode">
                  {{ ctaSnippet }}
                </fragment>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                >
                  <tr>
                    <td class="secondary1_cta">
                      <div>
                        <a
                          v-if="
                            (!$store.state.editMode ||
                              $store.state.previewMode) &&
                              fields.link
                          "
                          :href="fields.link"
                          style="border: 2px solid #ffffff; padding: 12px 24px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none;"
                          class="resetBorder buttonHoverBorderWhite"
                        >
                          CTA 20 CHAR MAX
                        </a>
                        <span
                          v-else
                          style="border: 2px solid #ffffff; padding: 12px 24px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none;"
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
  </td>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import ColorSelector from '@/components/core/inputs/ColorSelector'
import ImageSelector from '@/components/core/inputs/ImageSelector'
import { libComponentMixin } from '@/shared/mixins'
import LinkField from '@/components/core/inputs/LinkField'

export default {
  name: 'ASAMCKSecondaryTwo',
  components: {
    ColorSelector,
    ImageSelector,
    LinkField,
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      bgColors: ['#53B390', '#48A9C5', '#2774AE'],
      ctaSnippet: `
        <!-- border cta -->
        <!--[if gte mso 9]>
          <style type="text/css">
            .secondary1_cta {
              border: 2px solid #ffffff !important;
              padding: 12px 24px !important;
              border-collapse: collapse !important;
            }

            .resetBorder {
              border: none !important;
            }
          </style>
        <![endif]-->
        `,
      fields: {
        showIcon: true,
        file: null,
        bgColor: '#53B390',
        showHeadline: true,
        headline: '<p>Headline up to 32</p><p>character&nbsp;max</p>',
        showBody: true,
        body:
          'Body Paragraph: 249 character max, no line limit. Lorem ipsum   dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.',
        showCTA: true,
        ctaText: 'CTA 20 CHAR MAX',
        link: ''
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>
