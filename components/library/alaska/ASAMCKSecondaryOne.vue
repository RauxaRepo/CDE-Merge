<template>
  <td :key="$store.state.editMode ? `${component.id}_Edit` : component.id " align="center" style="padding:20px 0;" bgcolor="#ffffff">
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showBody">
          Body Copy
        </b-checkbox>
      </div>
      <b-checkbox v-model="fields.showCTA">
        CTA
      </b-checkbox>
    </portal>
    <!-- section message -->
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width:70%;max-width:350px;"
    >
      <tr>
        <td
          style="padding-top: 20px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:24px;line-height:36px;color:#2774ae;text-align:center;"
        >
          <strong><TextInput v-model.lazy="fields.headline" inline="true" /></strong>
        </td>
      </tr>
      <tr v-if="fields.showBody">
        <td
          style="padding-top: 20px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#656565;text-align:center;"
        >
          <TextInput v-model.lazy="fields.body" />
        </td>
      </tr>
      <tr v-if="fields.showCTA">
        <td align="center" style="padding-top:20px; padding-bottom:40px;">
          <fragment v-if="!$store.state.editMode">
            {{ ctaSnippet }}
          </fragment>
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            class="primary5a_cta"
          >
            <tr>
              <td>
                <div>
                  <a
                    v-if="
                      (!$store.state.editMode || $store.state.previewMode) &&
                        fields.link
                    "
                    :href="fields.link"
                    style="background-color:#2774ae; border: 2px solid #2774ae; padding: 11px 20px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none; border-collapse: collapse;"
                    class="resetBorder buttonHover"
                  >
                    <TextInput v-model.lazy="fields.ctaText" inline="true" />
                  </a>
                  <span
                    v-else
                    style="background-color:#2774ae; border: 2px solid #2774ae; padding: 11px 20px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 20px; text-align: center; text-decoration: none; border-collapse: collapse;"
                    class="resetBorder buttonHover"
                  >
                    <TextInput v-model.lazy="fields.ctaText" inline="true">
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

    <!-- / section message -->
  </td>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'
import LinkField from '@/components/core/inputs/LinkField'

export default {
  name: 'ASAMCKSecondaryOne',
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
              .primary5a_cta {
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
      <![endif]-->
        `,
      fields: {
        file: null,
        headline: 'Lorem ipsum dolor sit&nbsp;amet.',
        showBody: true,
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo&nbsp;eiusmod.',
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
