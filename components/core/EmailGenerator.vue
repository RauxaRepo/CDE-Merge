<template>
  <div>
    <b-button
      tag="router-link"
      class="button link-button"
      :to="backLink"
      type="is-link"
      icon-left="chevron-left"
    >
      Back
    </b-button>
    <h1 v-if="selectedTemplateName">
      {{ selectedTemplateName }}
    </h1>
    <div class="template-actions">
      <b-field
        class="action-element"
        label-position="on-border"
        label="Name"
        :type="saveAttempted && !name ? 'is-danger' : ''"
        :message="saveAttempted && !name ? 'Name is required' : ''"
      >
        <b-input v-model="name"></b-input>
      </b-field>
      <!-- <b-button
        class="button action-element"
        icon-right="content-save"
        @click="handleSave"
      >
        Save
      </b-button> -->
      <b-button
        v-if="selectedTemplate"
        class="button"
        icon-right="export"
        @click="handleExportHTML"
      >
        Export
      </b-button>
    </div>
    <main v-if="selectedTemplate">
      <div class="template-wrapper">
        <nav class="tabs sticky">
          <ul>
            <li :class="{ ['is-active']: mode === 'edit' }">
              <a @click="toggleMode('edit')"><span>Edit</span></a>
            </li>
            <li :class="{ ['is-active']: mode === 'preview' }">
              <a @click="toggleMode('preview')"><span>Preview</span></a>
            </li>
            <li :class="{ ['is-active']: mode === 'code' }">
              <a @click="toggleMode('code')"><span>Code</span></a>
            </li>
          </ul>
          <div class="tab-actions">
            <b-button
              v-if="mode === 'code' && code"
              class="button merge-button secondary"
              @click="copyHtml"
            >
              Copy HTML
            </b-button>
            <b-button
              v-if="mode === 'preview'"
              class="button merge-button primary"
              icon-right="laptop"
              @click="mobilePreview = false"
            />
            <b-button
              v-if="mode === 'preview'"
              class="button merge-button primary"
              icon-right="cellphone"
              @click="mobilePreview = true"
            />
          </div>
        </nav>
        <div
          v-show="mode === 'edit' || mode === 'preview'"
          class="template-container"
          :style="templateStyle"
        >
          <div class="viewport">
            <div :class="{ ['mask']: mode === 'preview' && mobilePreview }">
              <div
                ref="emailContainer"
                class="email custom-scroll"
                :class="{ edit: mode === 'edit' }"
              >
                <component :is="componentInstance" />
              </div>
            </div>
          </div>
          <div v-show="mode === 'edit'" class="controls">
            <div
              class="sticky"
              :class="{ ['has-content']: $store.state.editingId }"
            >
              <div class="controls-target">
                <portal-target name="controls"></portal-target>
              </div>
              <b-button
                v-if="$store.state.editingId"
                class="merge-button secondary"
                @click="$store.commit('setEditingId', null)"
              >
                OK
              </b-button>
            </div>
          </div>
        </div>
        <div v-if="mode === 'code' && code" class="code-container">
          <vue-code-highlight language="html">
            <pre>
            {{ code }}
          </pre
            >
          </vue-code-highlight>
        </div>
      </div>
    </main>
    <!-- {{ currentEmail }} -->
  </div>
</template>

<script>
import JSZip from 'jszip'
import pretty from 'pretty'
import { saveAs } from 'file-saver'
import { component as VueCodeHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-tomorrow.css'

export default {
  components: {
    VueCodeHighlight
  },
  props: ['emailId', 'email'],
  data: function() {
    return {
      mode: 'edit',
      mobilePreview: false,
      code: '',
      name: '',
      saveAttempted: false,
      isImageModalActive: false,
      selectedTemplate: null,
      selectedTemplateName: null
    }
  },
  computed: {
    currentEmail() {
      return JSON.stringify(this.$store.state.currentEmail)
    },
    componentInstance() {
      const template = this.selectedTemplate
      if (!template) {
        return null
      }
      return () => import(`@/components/templates/${this.$store.state.currentClient.id}/${template}`)
    },
    templateStyle() {
      if (!this.selectedTemplate) {
        return ''
      }
      const client = this.getClient()
      return client ? client.templateStyle : ''
    },
    backLink() {
      return this.$store.state.currentClient
        ? `/clients/${this.$store.state.currentClient.id}`
        : '/'
    }
  },
  mounted: function() {
    // clear portal
    this.$store.commit('setEditingId', null)
    // On existing email
    if (this.emailId) {
      this.name = this.$store.state.currentEmail.name
      this.selectedTemplate = this.$store.state.currentEmail.template
    } else if (this.$route.query.template) {
      this.selectedTemplate = this.$route.query.template
    } else if (this.$store.state.currentClient) {
      this.$router.push(`/clients/${this.$store.state.currentClient.id}`)
    } else {
      this.$router.push('/')
    }
    // Set title
    const templateData = this.$store.state.templates.list.find(
      template => template.id === this.selectedTemplate
    )
    this.selectedTemplateName = templateData.name
  },
  methods: {
    getClient: function() {
      const emptyClient = {
        postHTML: '',
        preHTML: ''
      }
      const templateData = this.$store.state.templates.list.find(
        template => template.id === this.selectedTemplate
      )
      return templateData && templateData.clientId
        ? this.$store.state.clients.list.find(
            client => client.id === templateData.clientId
          ) || emptyClient
        : emptyClient
    },
    getHtml: function() {
      function componentToHex(c) {
        const hex = parseInt(c).toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }

      function rgbToHex(r, g, b) {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
      }
      const client = this.getClient()
      let rawHtml = this.$refs.emailContainer.innerHTML
        .replace(/data-v-[0-9a-z]*=""/g, '')
        .replace(/fragment="[0-9a-z]*"/g, '')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, "'")
        .replace(/<!---->/g, '')
        .replace(/ class=""/g, '')
      const colors = [...new Set(rawHtml.match(/rgba?\([^)]*\)/g))]
      colors.forEach(element => {
        try {
          /* eslint-disable */
          const re = new RegExp(
            element.replace('(', '\\(').replace(')', '\\)'),
            'g'
          )
          const values = element
            .split('(')[1]
            .split(')')[0]
            .split(',')
          const hex = rgbToHex(values[0], values[1], values[2]).replace(
            / /g,
            ''
          )
          rawHtml = rawHtml.replace(re, hex)
        } catch (error) {
          console.log(error)
        }
      })
      return pretty(`${client.preHTML}${rawHtml}${client.postHTML}`)
    },
    toggleMode: function(mode) {
      this.mode = mode
      this.$store.commit('setPreviewMode', mode === 'preview')
      if (mode === 'code') {
        this.$store.commit('toggleEditMode')
        setTimeout(() => {
          this.code = this.getHtml()
          this.$store.commit('toggleEditMode')
        }, 500)
      } else {
        this.code = ''
      }
    },
    handleTemplateSelected: function(value) {
      this.$store.commit('clearCurrentEmail')
      this.selectedTemplate = value || ''
    },
    handleExportHTML: function() {
      this.saveAttempted = true

      if (this.selectedTemplate && this.name) {
        this.$store.commit('toggleEditMode')
        setTimeout(() => {
          const html = this.getHtml()
          console.log(html)
          const emailName = this.name
          const zip = new JSZip()
          zip.file(`${emailName}.html`, html)
          zip.file(
            `${emailName}.json`,
            JSON.stringify({
              ...this.$store.state.currentEmail,
              name: this.name,
              template: this.selectedTemplate
            })
          )
          const assets = zip.folder('images')
          this.$store.state.currentEmail.assets.forEach(asset => {
            const base64String = asset.src.split('base64,')[1]
            assets.file(asset.name, base64String, { base64: true })
          })
          zip.generateAsync({ type: 'blob' }).then(function(content) {
            saveAs(content, `${emailName}.zip`)
          })
          this.$store.commit('toggleEditMode')
        }, 500)
      }
    },
    handleSave: function() {
      this.saveAttempted = true
      const email = {
        ...this.$store.state.currentEmail,
        name: this.name,
        template: this.selectedTemplate
      }
      if (this.selectedTemplate && this.name) {
        if (this.emailId) {
          this.$store.dispatch('updateEmail', email)
        } else {
          this.$store.dispatch('saveEmail', { newEmail: email })
        }
        this.$router.push(this.backLink)
      }
    },
    copyHtml: async function() {
      try {
        await this.$copyText(this.code)
        this.$buefy.toast.open({
          duration: 5000,
          message: 'HTML copied',
          position: 'is-bottom',
          type: 'is-success'
        })
      } catch (e) {
        console.error(e)
        this.$buefy.toast.open({
          duration: 5000,
          message: 'Error copying the HTML',
          position: 'is-bottom',
          type: 'is-danger'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.link-button {
  font-weight: bold;
  margin-top: 0.5rem;
  ::v-deep {
    .icon:first-child:not(:last-child) {
      margin-top: -2px;
      margin-right: 0;
    }
  }
}
h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.template-actions {
  .select {
    width: 100%;
  }
  @media screen and (min-width: $small) {
    display: flex;
  }
  .action-element {
    margin-bottom: 2rem;
    @media screen and (min-width: $small) {
      margin-right: 1rem;
      margin-bottom: 0;
    }
  }
}
.button {
  margin-bottom: 1.5rem;
}
.template-wrapper {
  width: 100%;
  position: relative;
}
.tabs {
  margin-bottom: 0;
  background: black;
  ul {
    border: none;
    li {
      a {
        padding: 0 1em;
        line-height: 40px;
        color: $white;
      }
      &.is-active {
        a {
          color: $black;
          background: $bars-bg;
        }
      }
    }
  }
  .tab-actions {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
  }
  .button {
    margin: 0;
  }
}
main {
  display: flex;
}

.template-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  .mask {
    background: url('/images/iphone.png');
    padding: 63px 91px;
    margin: 2rem 0;
    .email {
      width: 375px;
      height: 754px;
      overflow: auto;
    }
  }
  .email.edit {
    ::v-deep {
      a {
        pointer-events: none;
        display: inline-block;
      }
    }
  }
}
.viewport {
  width: 100%;
  display: flex;
  justify-content: center;
}

.controls {
  background: $white;
  width: 100%;
  max-width: 450px;
  position: relative;
  padding-left: 1rem;
  .sticky {
    transform: translateY(1rem);
    top: 2.5rem;
    padding: 1rem;
    &.has-content {
      background: $bars-bg;
      border: 1px solid $bars-over;
    }
    ::v-deep {
      .white-area {
        margin: -1rem -1rem 1rem;
        padding: 1rem;
        background: $white;
        border-bottom: 1px solid $bars-over;
      }
    }
  }
  .button {
    min-width: 100px;
    margin-top: 1rem;
    margin-bottom: 0;
  }
  ::v-deep {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .field {
      max-width: 308px;
    }
  }
}
// Code style
::v-deep {
  pre[class*='language-'] {
    margin-top: 0;
    font-size: 0.8rem;
  }
  .token.tag {
    background: rgba(51, 170, 51, 0.1) !important;
  }
}
</style>
