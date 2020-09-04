<template>
  <td align="center" style="background-color: #ffffff">
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      align="center"
      style="width: 92%; max-width: 460px"
    >
      <tr>
        <td
          style="
          padding: 40px 0px;
          font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 24px;
          line-height: 30px;
          color: #2774ae;
          text-align: center;
        "
        >
          <strong><TextInput v-model.lazy="fields.title" inline="true" /></strong>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding-bottom: 50px">
          <!-- section image -->
          <a
            v-if="!$store.state.editMode && fields.link"
            :href="fields.link"
            style="text-decoration: none"
            target="_blank"
          >
            <ImageSelector
              v-model="fields.file"
              width="460"
              border="0"
              img-style="
                display: block;
                border: 0;
                outline: 0;
                padding: 0;
                width: 100%;
                max-width: 460px;
                height: auto;
                font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                font-size: 14px;
                color: #3c3b3f;
              "
              alt=""
            />
          </a>
          <ImageSelector
            v-else
            v-model="fields.file"
            placeholder="/images/andrew_herovid_tmpl.jpg"
            width="460"
            border="0"
            img-style="
                display: block;
                border: 0;
                outline: 0;
                padding: 0;
                width: 100%;
                max-width: 460px;
                height: auto;
                font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                font-size: 14px;
                color: #3c3b3f;
              "
            alt=""
          />
          <LinkSelector v-model="fields.link" />
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import ImageSelector from '@/components/core/inputs/ImageSelector'
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAExecLetterVideoPrimary',
  components: {
    ImageSelector,
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        file: null,
        link: '',
        title: 'Lorem ipsum dolor amet.'
      }
    }
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
</style>
