<template>
  <div
    :style="`text-align:${alignment || 'left'};`"
    :class="{
      edit: $store.state.editMode && !$store.state.previewMode,
      selected: $store.state.editingId === id
    }"
  >
    <div v-if="$store.state.editMode">
      <img
        v-if="value && value.src"
        :src="value.src"
        :width="width || ''"
        :alt="alt || ''"
        :style="imgStyle || ''"
        :border="border || ''"
        @click="onShowControls"
      />
      <div
        v-else
        class="add-message"
        :style="imgStyle || ''"
        @click="onShowControls"
      >
        Image
      </div>
      <portal v-if="$store.state.editingId === id" to="controls">
        <div class="white-area">
          <h2>{{ containerText ? `${containerText} /` : '' }} Image</h2>
          <slot></slot>
          <b-field>
            <b-upload drag-drop @input="handleInput">
              <section class="section">
                <div class="content has-text-centered">
                  <p>
                    <b-icon icon="upload" size="is-large"></b-icon>
                  </p>
                  <p>Drop your files here or click to upload</p>
                </div>
              </section>
            </b-upload>
          </b-field>
        </div>
      </portal>
    </div>
    <img
      v-else
      :src="`./assets/${value ? value.name : ''}`"
      :width="width || ''"
      :alt="alt || ''"
      :style="imgStyle || ''"
      :border="border || ''"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { getUID } from '@/shared/utils'

export default {
  name: 'ImageSelector',
  components: {},
  props: [
    'placeholder',
    'value',
    'width',
    'border',
    'alt',
    'imgStyle',
    'alignment',
    'containerText'
  ],
  data() {
    return {
      id: getUID()
    }
  },
  computed: {
    src: function() {
      return this.value ? URL.createObjectURL(this.value) : ''
    }
  },
  mounted() {
    if (this.placeholder && !this.value) {
      const placeholderSegments = this.placeholder.split('/')
      return axios
        .get(this.placeholder, {
          responseType: 'blob'
        })
        .then(response =>
          this.handleInput(
            response.data,
            placeholderSegments[placeholderSegments.length - 1]
          )
        )
        .catch(err => console.log(err))
    }
  },
  methods: {
    handleInput(file, name) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        const base64data = reader.result
        this.$emit('input', {
          name: name || file.name,
          src: base64data
        })
        this.$store.commit('addAsset', {
          type: 'image',
          name: name || file.name,
          src: base64data
        })
      }
    },
    onShowControls() {
      this.$store.commit('setEditingId', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit.selected {
  display: block;
  border: 3px dashed $red;
  padding: 0.5rem;
}
.upload.is-expanded {
  width: auto;
}
.add-message {
  text-align: center !important;
  background: $black !important;
  color: $white !important;
  font-size: 1rem !important;
  padding: 1rem !important;
}
</style>
