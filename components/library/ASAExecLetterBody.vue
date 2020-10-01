<template>
  <td align="center" style="background-color:#ffffff;">
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <h2>{{ containerText }}</h2>
      <AlignmentSelector
        v-model="fields.alignment"
        component-style="right:100%; left: auto"
      />
    </portal>
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      align="center"
      style="width:73%;max-width: 366px;"
      class="w92"
    >
      <!-- body copy -->
      <tr>
        <td
          style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#3c3b3f;text-align:left;"
          :style="
            `font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#3c3b3f;text-align:${fields.alignment};`
          "
        >
          <TextInput
            v-model.lazy="fields.body"
            link-style="color:#3c3d3f; text-decoration:underline;"
          />
        </td>
      </tr>
      <!-- sincerely + signature image + signoff -->
      <tr>
        <td
          :style="
            `font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#3c3b3f;text-align:${fields.alignment};`
          "
        >
          <TextInput
            v-model.lazy="fields.signatureStart"
            inline="true"
          /><br /><br />
        </td>
      </tr>
      <tr>
        <td
          :style="
            `font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; color:#3c3b3f;text-align:${fields.alignment};`
          "
        >
          <ImageSelector
            v-model="fields.file"
            placeholder="/images/andrew_sig_templ.png"
            width="124"
            border="0"
            alt=""
            img-style="display:inline-block;border:0;outline:0;width:100%;max-width:124px;height:auto;"
            :alignment="fields.alignment"
            :container-text="containerText"
          />
        </td>
      </tr>
      <tr>
        <td
          :style="
            `font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:24px;color:#3c3b3f;text-align:${fields.alignment};`
          "
        >
          <TextInput v-model.lazy="fields.signatureName" inline="true" /> <br />
          <TextInput
            v-model.lazy="fields.signaturePosition"
            inline="true"
          /><br />
          <TextInput v-model.lazy="fields.signatureCompany" inline="true" />
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import ImageSelector from '@/components/core/inputs/ImageSelector'
import AlignmentSelector from '@/components/core/inputs/AlignmentSelector'
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAExecLetterBody',
  components: {
    ImageSelector,
    AlignmentSelector,
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        file: null,
        link: '',
        alignment: 'left',
        signatureStart: 'Sincerely,',
        signatureName: 'Andrew Harrison',
        signaturePosition: 'Chief Commercial Officer',
        signatureCompany: 'Alaska Airlines',
        body:
          '<p>${FIRST_NAME?capitalize},</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non&nbsp;proident.</p><p>Sun in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur&nbsp;magni. </p><p> Dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat&nbsp;volup.</p>'
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>

<style lang="scss" scoped>
.image {
  position: relative;
}
img {
  width: 100%;
}
.title-container {
  position: relative;
  &.edit {
    padding-top: 4rem;
  }
}
</style>
