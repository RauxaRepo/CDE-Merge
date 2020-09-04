<template>
  <td align="center" style="background-color:#ffffff; padding-bottom: 40px;">
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      align="center"
      style="width:73%;max-width: 366px;"
      class="w92"
    >
      <tr>
        <td align="left" style="padding-top:55px;" class="relative">
          <!--[if gte mso 9]>
            <style type="text/css">
              .primary_cta {
                background-color: #2774ae !important;
                border: 2px solid #2774ae !important;
                padding: 10px 24px !important;
                border-collapse: collapse !important;
              }

              .resetBorder {
                border: none !important;
              }
            </style>
          <![endif]-->
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            class="primary_cta"
          >
            <tr>
              <td>
                <div>
                  <LinkSelector v-model="fields.link" />
                  <a
                    v-if="!$store.state.editMode && fields.link"
                    :href="fields.link"
                    style="background-color:#2774ae; border: 2px solid #2774ae; padding: 10px 24px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 24px; text-align: center; text-decoration: none; border-collapse: collapse;"
                    class="resetBorder buttonHover"
                    target="_blank"
                  >
                    <TextInput v-model.lazy="fields.text" inline="true" />
                  </a>
                  <span
                    v-else
                    :href="fields.link"
                    style="background-color:#2774ae; border: 2px solid #2774ae; padding: 10px 24px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 24px; text-align: center; text-decoration: none; border-collapse: collapse;"
                    class="resetBorder buttonHover"
                    target="_blank"
                  >
                    <TextInput v-model.lazy="fields.text" inline="true" />
                  </span>
                </div>
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
import LinkSelector from '@/components/core/inputs/LinkSelector'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAExecLetterButton',
  components: {
    TextInput,
    LinkSelector
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        link: '',
        text: 'Learn More'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
