<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
    style="padding:20px 0;"
    bgcolor="#ffffff"
  >
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
      </div>
      <b-field>
        <b-checkbox v-model="fields.showHeadline">
          Show Headline
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showBody">
          Body Copy
        </b-checkbox>
      </b-field>
      <ListingControl
        v-model="fields.listing"
        :listing-defaults="listingDefaults"
      />
      <b-field>
        <b-checkbox v-model="fields.showSecondaryBody">
          Secondary Body Copy
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showCta">
          CTA
        </b-checkbox>
      </b-field>
    </portal>
    <!-- section message -->
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width:70%;max-width:350px;"
    >
      <tr v-if="fields.showHeadline">
        <td
          style="padding-top: 20px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:24px;line-height:36px;color:#2774ae;text-align:center;"
        >
          <strong>
            <TextInput v-model.lazy="fields.headline" inline="true" />
          </strong>
        </td>
      </tr>
      <tr v-if="fields.showBody">
        <td
          style="padding-top: 20px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#656565;text-align:center;"
        >
          <TextInput v-model.lazy="fields.body" />
        </td>
      </tr>
      <tr v-if="fields.listing.length > 0">
        <td
          style="padding-top: 20px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#656565;text-align:left;"
        >
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#656565;"
          >
            <tr v-for="(item, i) in fields.listing" :key="`listing_${i}`">
              <td
                style="vertical-align:top; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#656565;"
              >
                &#8226;
              </td>
              <td
                style="padding-left: 10px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#656565;"
              >
                <TextInput
                  v-model.lazy="fields.listing"
                  :item-index="i"
                  inline="true"
                />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr v-if="fields.showSecondaryBody">
        <td
          style="padding-top: 20px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#656565;text-align:center;"
        >
          <TextInput v-model.lazy="fields.secondaryBody" />
        </td>
      </tr>
      <tr v-if="fields.showCta">
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
import ListingControl from '@/components/core/inputs/ListingControl'
import { libComponentMixin } from '@/shared/mixins'
import LinkField from '@/components/core/inputs/LinkField'

export default {
  name: 'ASAMCKSecondaryOne',
  components: {
    LinkField,
    TextInput,
    ListingControl
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
      listingDefaults: [
        '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p><p>Repellat, aliquam! Velit veniam.</p>',
        '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>',
        '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>'
      ],
      fields: {
        file: null,
        showHeadline: true,
        headline: 'Lorem ipsum dolor sit&nbsp;amet.',
        showBody: true,
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo&nbsp;eiusmod.',
        showSecondaryBody: false,
        secondaryBody:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo&nbsp;eiusmod.',
        showCta: true,
        ctaText: 'CTA 20 CHAR MAX',
        link: `\${clickthrough('secondary1_cta','linkname=secondary1_cta')}`,
        listing: []
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>
