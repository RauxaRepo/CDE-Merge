<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    style="background-color:#ffffff;"
  >
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="width:100%;"
    >
      <tr>
        <td align="center" style="padding:0;">
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
              :alt="fields.alt"
            />
          </a>
          <ImageSelector
            v-else
            v-model="fields.file"
            placeholder="/images/mck-primary-1-default.png"
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
            :alt="fields.alt"
          >
            <LinkField v-model="fields.link" />
            <b-field label="Alt">
              <b-input v-model.lazy="fields.alt"></b-input>
            </b-field>
          </ImageSelector>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import ImageSelector from '@/components/core/inputs/ImageSelector'
import { libComponentMixin } from '@/shared/mixins'
import LinkField from '@/components/core/inputs/LinkField'

export default {
  name: 'ASAMCKPrimaryOne',
  components: {
    ImageSelector,
    LinkField
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        file: null,
        link: '',
        alt: ''
      }
    }
  }
}
</script>
