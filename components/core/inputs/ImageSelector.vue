<template>
  <fragment>
    <fragment v-if="!controlsId">
      <div
        v-if="$store.state.editMode && !$store.state.previewMode"
        class="edit"
        :class="{
          selected: $store.state.editingId === id
        }"
      >
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
      </div>
      <img
        v-if="$store.state.editMode && $store.state.previewMode"
        :src="value.src"
        :width="width || ''"
        :alt="alt || ''"
        :style="imgStyle || ''"
        :border="border || ''"
      />
      <img
        v-else
        :src="`./images/${value ? value.name : ''}`"
        :width="width || ''"
        :alt="alt || ''"
        :style="imgStyle || ''"
        :border="border || ''"
      />
    </fragment>
    <portal v-if="$store.state.editingId === id" to="controls">
      <div class="white-area">
        <h2>{{ containerText ? `${containerText}` : 'Image' }}</h2>
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
  </fragment>
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
    'containerText',
    'controlsId'
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
    if (this.controlsId) {
      this.id = this.controlsId
    }
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
.edit {
  cursor: pointer;
  display: inline-block;
  border: 3px dashed transparent;
  &:hover {
    border: 3px dashed $button-secondary;
  }
  &.selected {
    border: 3px dashed $red;
  }
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
