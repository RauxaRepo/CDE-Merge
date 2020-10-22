<template>
  <td align="center" style="background-color: #ffffff;">
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showHeadline">
          Headline
        </b-checkbox>
      </div>
    </portal>
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      align="center"
      style="max-width: 366px"
      class="w92"
    >
      <tr>
        <td
          valign="top"
          style="width: 25%; max-width: 107px; padding-top: 60px"
        >
          <ImageSelector
            v-model="fields.file"
            placeholder="/images/andrew_pic_tmpl.png"
            width="82"
            border="0"
            alt=""
            img-style="display: block;border: 0;outline: 0;padding: 0;width: 82px;height: auto;"
          />
        </td>
      </tr>
      <tr>
        <td
          style="
          font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 16px;
          line-height: 24px;
          color: #3c3b3f;
          text-align: left;
          font-weight: normal;
          padding-top: 24px;
        "
        >
          <TextInput v-model.lazy="fields.name" inline="true" />
        </td>
      </tr>
      <tr v-if="fields.showHeadline">
        <td
          style="
          padding-top: 0px;
          font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 24px;
          font-weight: bold;
          line-height: 28px;
          color: #2774ae;
          text-align: left;
        "
        >
          <TextInput v-model.lazy="fields.title" inline="true" />
        </td>
      </tr>
      <!-- divider line -->
      <tr>
        <td align="left" style="padding-top: 30px;">
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="max-width: 320px"
          >
            <tr>
              <td
                height="3"
                width="320"
                style="
                height: 2px;
                width: 320px;
                font-size: 0;
                line-height: 3px;
                background-color: #e9e9e9;
              "
                class="w200p"
              >
                &nbsp;
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

export default {
  name: 'ASAExecLetterTitleBasedPrimary',
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
        name: 'Andrew Harrison, CCO',
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
