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
        <td :align="fields.alignment" style="padding-top:55px;" class="relative">
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
                  <a
                    v-if="(!$store.state.editMode || $store.state.previewMode) && fields.link"
                    :href="fields.link"
                    style="background-color:#2774ae; border: 2px solid #2774ae; padding: 10px 24px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 24px; text-align: center; text-decoration: none; border-collapse: collapse;"
                    class="resetBorder buttonHover"
                    target="_blank"
                  >
                    <TextInput v-model.lazy="fields.text" inline="true" />
                  </a>
                  <span
                    v-else
                    style="background-color:#2774ae; border: 2px solid #2774ae; padding: 10px 24px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 24px; text-align: center; text-decoration: none; border-collapse: collapse;"
                    class="resetBorder buttonHover"
                    target="_blank"
                  >
                    <TextInput v-model.lazy="fields.text" inline="true" />
                  </span>
                </div>
                <portal v-if="$store.state.editingId === component.id" to="controls">
                  <h2>{{ containerText }}</h2>
                  <AlignmentSelector v-model="fields.alignment" component-style="right:100%; left: auto" />
                  <LinkField v-model="fields.link" />
                </portal>
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
import LinkField from '@/components/core/inputs/LinkField'
import AlignmentSelector from '@/components/core/inputs/AlignmentSelector'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAExecLetterButton',
  components: {
    TextInput,
    LinkField,
    AlignmentSelector
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        link: '',
        alignment: 'left',
        text: 'Learn More'
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  },
}
</script>

<style lang="scss" scoped></style>
