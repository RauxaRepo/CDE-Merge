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
        <td
          class="relative"
          :style="
            `padding-top:55px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#3c3b3f;text-align:left;text-align:${fields.alignment};`
          "
        >
          <a
            v-if="!($store.state.editMode && !$store.state.previewMode) && fields.link"
            :href="fields.link"
            style="color:#2774ae;text-decoration:underline;"
            target="_blank"
          >
            <TextInput v-model.lazy="fields.text" inline="true" />
          </a>
          <span
            v-else
            style="color:#2774ae;text-decoration:underline;"
            target="_blank"
          >
            <TextInput v-model.lazy="fields.text" inline="true" />
          </span>
          <portal v-if="$store.state.editingId === component.id" to="controls">
            <h2>{{ containerText }}</h2>
            <AlignmentSelector
              v-model="fields.alignment"
              component-style="right:100%; left: auto"
            />
            <LinkField v-model="fields.link" />
          </portal>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import LinkField from '@/components/core/inputs/LinkField'
import { libComponentMixin } from '@/shared/mixins'
import AlignmentSelector from '@/components/core/inputs/AlignmentSelector'

export default {
  name: 'ASAExecLetterLink',
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
