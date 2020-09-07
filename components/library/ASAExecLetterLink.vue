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
          :style="`padding-top:55px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#3c3b3f;text-align:left;text-align:${fields.alignment};`"
        >
          <AlignmentSelector v-model="fields.alignment" component-style="right:100%; left: auto" />
          <LinkSelector v-model="fields.link" />
          <a
            v-if="!$store.state.editMode && fields.link"
            :href="fields.link"
            style="color:#2774ae;text-decoration:underline;"
            target="_blank"
          >
            <TextInput v-model.lazy="fields.text" inline="true" />
          </a>
          <span
            v-else
            :href="fields.link"
            style="color:#2774ae;text-decoration:underline;"
            target="_blank"
          >
            <TextInput v-model.lazy="fields.text" inline="true" />
          </span>
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
  name: 'ASAExecLetterLink',
  components: {
    TextInput,
    LinkSelector
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
  }
}
</script>

<style lang="scss" scoped></style>
