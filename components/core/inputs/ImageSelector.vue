<template>
  <fragment>
    <fragment v-if="!controlsId">
      <div
        v-if="$store.state.editMode"
        :class="{
          edit: !$store.state.previewMode,
          selected: $store.state.editingId === id
        }"
      >
        <img
          v-if="value"
          :src="typeof value === 'string' ? value : value.src"
          :width="width || ''"
          :alt="alt || ''"
          :style="imgStyle || ''"
          :border="border || ''"
          :align="align || ''"
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
        v-else
        :src="
          typeof value === 'string'
            ? value
            : `./images/${value ? value.name : ''}`
        "
        :width="width || ''"
        :alt="alt || ''"
        :style="imgStyle || ''"
        :border="border || ''"
        :align="align || ''"
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
        <b-field :type="isError ? 'is-danger' : ''" label="Image URL">
          <b-input
            v-model.lazy="url"
            placeholder="https://rauxa.com/my-img.jpg"
          ></b-input>
        </b-field>
      </div>
    </portal>
  </fragment>
</template>

<script>
import axios from 'axios'
import { getUID, isUrl } from '@/shared/utils'

export default {
  name: 'ImageSelector',
  components: {},
  props: [
    'placeholder',
    'value',
    'width',
    'border',
    'alt',
    'align',
    'imgStyle',
    'alignment',
    'containerText',
    'controlsId'
  ],
  data() {
    return {
      id: getUID(),
      url: '',
      isError: false
    }
  },
  computed: {
    src: function() {
      return this.value ? URL.createObjectURL(this.value) : ''
    }
  },
  watch: {
    url: function() {
      if (this.url) {
        if (isUrl(this.url)) {
          this.$emit('input', this.url)
          this.$store.commit('removeAsset', this.id)
          this.isError = false
        } else {
          this.isError = true
        }
      } else {
        this.isError = false
      }
    }
  },
  mounted() {
    // parent controls logic
    if (this.controlsId) {
      this.id = this.controlsId
    }
    // Placeholder string url
    if (typeof this.value === 'string') {
      this.url = this.value
    }
    // Placeholder file
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
        this.isError = false
        this.url = ''
        this.$emit('input', {
          name: name || file.name,
          src: base64data
        })
        this.$store.commit('addAsset', {
          id: this.id,
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
