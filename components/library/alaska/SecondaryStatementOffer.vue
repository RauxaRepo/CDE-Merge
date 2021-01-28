<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
  >
    <fragment v-if="!$store.state.editMode">
      {{ tableOneOpeningSnippet }}
    </fragment>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width:100%;max-width:500px;"
    >
      <tr>
        <td align="center" style="padding:0 0 50px 0;background-color:#ffffff;">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width:200px;"
          >
            <tr>
              <td
                align="center"
                style="padding: 0 0 50px 0; border-top: 2px solid #f1f1f1;mso-line-height-rule: exactly;"
              ></td>
            </tr>
          </table>

          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width:90%;max-width:450px;"
            class="w92"
          >
            <tr>
              <td
                align="center"
                style="width:25%;max-width:112px;padding-top:0px;"
              >
                <ImageSelector
                  v-model="fields.file"
                  placeholder="/images/alaska/20201104_Statement_secondaryE_protip.png"
                  border="0"
                  alt=""
                  width="72"
                  height="72"
                  :img-style="`display:block;border:0;outline:0;padding:0;width:72%;max-width:72px;height:auto;`"
                  aria-hidden="true"
                >
                  <p><small>Image width must be 144px, height should be the same or close.</small></p>
                </ImageSelector>
              </td>
              <td
                style="padding: 0 25px 0 25px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:16px; line-height:24px;text-align:left;color:#3c3b3f;"
              >
                <TextInput
                  v-model.lazy="fields.body"
                  link-style="text-decoration: underline; color: #2774ae;"
                  inline="true"
                />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <fragment v-if="!$store.state.editMode">
      {{ tableOneClosingSnippet }}
    </fragment>
  </td>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import ImageSelector from '@/components/core/inputs/ImageSelector'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAMCKSecondaryPeaceMindColor',
  components: {
    ImageSelector,
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      tableOneOpeningSnippet: `
      <!--[if (gte mso 9)|(IE)]>
      <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="width:500px;">
        <tr>
            <td align="center" valign="top">
                <![endif]-->`,

      tableOneClosingSnippet: `
      <!--[if (gte mso 9)|(IE)]>
          </td>
      </tr>
      </table>
      <![endif]-->`,
      fields: {
        file: null,
        body: `<p><strong>Bonus offer ends February 14!*</strong></p><p><a
                  href="\${clickthrough(
                    'secondary_d_buymiles_teaser_text',
                    'linkname=secondary_d_buymiles_teaser_text'
                  )}">Top off your Mileage Plan&trade; account</a> today and those miles will be ready when you want&nbsp;them.</p>`
      }
    }
  }
}
</script>
