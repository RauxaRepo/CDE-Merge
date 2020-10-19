<template>
  <td style="background-color: #ffffff; padding:0;">
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showHeading">
          Heading
        </b-checkbox>
      </div>
    </portal>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width: 100%"
    >
      <tr>
        <td align="center" class="relative">
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
              width="500"
              border="0"
              img-style="
                display: block;
                border: 0;
                outline: 0;
                padding: 0;
                width: 100%;
                max-width: 500px;
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
            placeholder="/images/andrew_heroimg_tmpl.jpg"
            width="500"
            border="0"
            img-style="
                display: block;
                border: 0;
                outline: 0;
                padding: 0;
                width: 100%;
                max-width: 500px;
                height: auto;
                font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                font-size: 14px;
              "
            alt=""
            :container-text="containerText"
          >
            <LinkField v-model="fields.link" />
          </ImageSelector>
        </td>
      </tr>
    </table>

    <table
      v-if="fields.showHeading"
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width: 100%"
    >
      <tr>
        <td align="center" style="padding-top: 50px;">
          <!-- headline - 2 lines of text approximated with lorem ipsum -->
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            align="center"
            style="width: 73%; max-width: 366px"
            class="w92"
          >
            <tr>
              <td
                style="
                font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                font-size: 24px;
                line-height: 28px;
                color: #2774ae;
                text-align: left;
              "
              >
                <strong>
                  <TextInput v-model.lazy="fields.title" inline="true" />
                </strong>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import ImageSelector from '@/components/core/inputs/ImageSelector'
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'
import LinkField from '@/components/core/inputs/LinkField'

export default {
  name: 'ASAExecLetterImagePrimary',
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
        showHeading: true
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
