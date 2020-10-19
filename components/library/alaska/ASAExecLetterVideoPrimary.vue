<template>
  <td align="center" style="background-color: #ffffff; position:relative">
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showHeadline">
          Heading
        </b-checkbox>
      </div>
    </portal>
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      align="center"
      style="width: 92%; max-width: 460px"
    >
      <tr v-if="fields.showHeadline">
        <td
          style="
          padding-top: 40px;
          font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 24px;
          line-height: 30px;
          color: #2774ae;
          text-align: center;
        "
        >
          <strong>
            <TextInput v-model.lazy="fields.title" inline="true" />
          </strong>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding-top: 40px">
          <!-- section image -->
          <a
            v-if="
              !($store.state.editMode && !$store.state.previewMode) &&
                fields.link
            "
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
              :container-text="containerText"
            >
              <LinkField v-model="fields.link" />
            </ImageSelector>
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
            :container-text="containerText"
          >
            <LinkField v-model="fields.link" />
          </ImageSelector>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import ImageSelector from '@/components/core/inputs/ImageSelector'
import LinkField from '@/components/core/inputs/LinkField'
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAExecLetterVideoPrimary',
  components: {
    ImageSelector,
    TextInput,
    LinkField
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        file: null,
        link: '',
        title: 'Lorem ipsum dolor amet.',
        showHeadline: true
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
</style>
