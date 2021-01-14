<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
    style="padding:15px 0;"
  >
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width: 92%; max-width:460px;"
    >
      <tr>
        <td
          style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;line-height:20px;color:#3c3d3f;text-align:left;"
        >
          <TextInput
            v-if="$store.state.editMode && !$store.state.previewMode"
            v-model.lazy="fields.preheader"
            inline="true"
          >
            <LinkField v-model="fields.link" />
          </TextInput>
          <a
            v-else
            :href="fields.link"
            style="color:#3c3d3f; text-decoration:underline;"
            target="_blank"
          >
            <TextInput v-model.lazy="fields.preheader" inline="true" />
          </a>
          <fragment v-if="!$store.state.editMode">
            {{ hackSnippet }}
          </fragment>
          &nbsp;|&nbsp;
          <a
            href="${clickthrough('webview','linkname=webview')}"
            style="color:#3c3d3f;text-decoration:underline;"
            target="_blank"
          >
            Web&nbsp;view
          </a>
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
  name: 'ASAExecLetterPreHeader',
  components: {
    TextInput,
    LinkField
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      hackSnippet: `<!-- <#include "cms://contentlibrary/globalassets/header/ph_space_longer.htm"> -->`,
      fields: {
        preheader: 'TBD Preheader',
        link: `\${clickthrough('preheader_all_text','linkname=preheader_all_text')}}`
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
