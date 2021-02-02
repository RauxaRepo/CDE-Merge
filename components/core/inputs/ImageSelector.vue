<template>
  <fragment>
    <fragment v-if="!controlsId">
      <div
        v-if="$store.state.editMode || $store.state.inlineImages"
        :class="{
          edit: !$store.state.previewMode,
          selected: $store.state.editingId === id
        }"
      >
        <img
          v-if="itemValue"
          :src="typeof itemValue === 'string' ? itemValue : itemValue.src"
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
          typeof itemValue === 'string'
            ? itemValue
            : `./images/${itemValue ? itemValue.name : ''}`
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
    'controlsId',
    'itemIndex'
  ],
  data() {
    return {
      id: getUID(),
      url: '',
      isError: false
    }
  },
  computed: {
    itemValue: function() {
      return this.itemIndex !== undefined
        ? this.value[this.itemIndex]
          ? this.value[this.itemIndex].image
          : null
        : this.value
    }
  },
  watch: {
    url: function() {
      if (this.url) {
        if (isUrl(this.url)) {
          if (this.itemIndex !== undefined) {
            this.$emit(
              'input',
              this.value.map((item, i) =>
                this.itemIndex === i
                  ? { ...item, image: this.url }
                  : this.value[i]
              )
            )
          } else {
            this.$emit('input', this.url)
          }
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
    if (typeof this.itemValue === 'string') {
      this.url = this.itemValue
    }
    // Placeholder file
    if (this.placeholder && !this.itemValue) {
      const placeholderSegments = this.placeholder.split('/')
      setTimeout(() => {
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
      }, ((this.itemIndex || -1) + 1) * 300)
    }
  },
  methods: {
    handleInput(file, name) {
      const reader = new FileReader()
      const value = this.value
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        const base64data = reader.result
        this.isError = false
        this.url = ''
        if (this.itemIndex !== undefined) {
          const newValue = this.value.map((item, i) =>
            this.itemIndex === i
              ? {
                  ...item,
                  image: {
                    name: name || file.name,
                    src: base64data
                  }
                }
              : value[i]
          )
          this.$emit('input', newValue)
        } else {
          this.$emit('input', {
            name: name || file.name,
            src: base64data
          })
        }
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
  background: $blue !important;
  color: $white !important;
  font-size: 1rem !important;
  padding: 1rem !important;
}
</style>
