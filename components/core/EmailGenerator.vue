<template>
  <div>
    <div v-html="globalStyle"></div>
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
      <b-button
        v-if="!loading && selectedTemplate"
        class="button action-element"
        icon-right="export"
        @click="handleExportHTML"
      >
        Export
      </b-button>
      <b-button
        v-else
        loading
        class="button action-element"
        icon-right="export"
      >
        Loading
      </b-button>
      <b-button
        class="button action-element"
        @click="isEmailModalActive = true"
      >
        <b-icon icon="email"></b-icon>
      </b-button>
    </div>
    <b-modal v-model="isEmailModalActive">
      <div class="send-email">
        <b-field
          label="Send email to:"
          :type="addAttempted && !sendEmail ? 'is-danger' : ''"
          :message="addAttempted && !sendEmail ? 'Email is required' : ''"
        >
          <b-input
            v-model="sendEmail"
            rounded
            placeholder="Email address"
            icon="magnify"
            clearable
          >
          </b-input>
          <b-button
            class="button merge-button secondary"
            @click="handleAddEmail"
          >
            Add
          </b-button>
        </b-field>
        <section v-if="emailList.length > 0" class="columns">
          <b-field
            v-for="listItem in emailList"
            :key="listItem.email"
            class="column is-half"
          >
            <b-checkbox v-model="listItem.checked">
              {{ listItem.email }}
            </b-checkbox>
            <b-button
              type="is-danger"
              icon-right="delete"
              @click="deleteEmail(listItem.email)"
            />
          </b-field>
        </section>
        <b-field
          :type="
            sendAttempted && checkedEmailList.length === 0 ? 'is-danger' : ''
          "
          :message="
            sendAttempted && checkedEmailList.length === 0
              ? 'At least one Email is required'
              : ''
          "
        >
          <div class="control">
            <b-checkbox v-model="rememberEmail">
              Remember Email list
            </b-checkbox>
          </div>
        </b-field>
        <div class="button-container">
          <b-button
            v-if="!loading"
            class="button merge-button secondary"
            @click="handleSendEmail"
          >
            Send
          </b-button>

          <b-button v-else loading class="merge-button secondary">
            Loading
          </b-button>
        </div>
      </div>
    </b-modal>
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
              :class="{ active: $store.state.mobilePreview === false }"
              icon-right="laptop"
              @click="toggleMobilePreview(false)"
            />
            <b-button
              v-if="mode === 'preview'"
              class="button merge-button primary"
              :class="{ active: $store.state.mobilePreview === true }"
              icon-right="cellphone"
              @click="toggleMobilePreview(true)"
            />
          </div>
        </nav>
        <div
          v-show="mode === 'edit' || mode === 'preview'"
          class="template-container"
          :style="templateStyle"
        >
          <div class="viewport">
            <div
              v-if="mode === 'preview' && $store.state.mobilePreview"
              class="phone-options"
            >
              <b-button
                v-for="(phone, index) in phones"
                :key="phone.name"
                class="button merge-button secondary"
                :class="{ ['active']: index === selectedPhoneIndex }"
                @click="selectedPhoneIndex = index"
              >
                {{ phone.name }}
              </b-button>
            </div>
            <div
              :class="{
                ['phone']: mode === 'preview' && $store.state.mobilePreview
              }"
            >
              <style
                v-if="
                  $store.state.editMode &&
                    mode === 'preview' &&
                    $store.state.mobilePreview
                "
                v-html="mobileStyle"
              ></style>
              <div
                ref="emailContainer"
                class="email custom-scroll"
                :class="{ edit: mode === 'edit' }"
                :style="{
                  width:
                    mode === 'preview' && $store.state.mobilePreview
                      ? phones[selectedPhoneIndex].width
                      : 'auto',
                  height:
                    mode === 'preview' && $store.state.mobilePreview
                      ? phones[selectedPhoneIndex].height
                      : 'auto'
                }"
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
import { comb } from 'email-comb'
import axios from 'axios'

export default {
  components: {
    VueCodeHighlight
  },
  props: ['emailId', 'email'],
  data: function() {
    return {
      loading: false,
      client: null,
      mode: 'edit',
      code: '',
      name: '',
      sendEmail: '',
      savedEmails: [],
      emailList: [],
      rememberEmail: true,
      sendAttempted: false,
      addAttempted: false,
      saveAttempted: false,
      isEmailModalActive: false,
      selectedTemplate: null,
      selectedTemplateName: null,
      phones: [
        {
          name: 'iPhone 8',
          width: '375px',
          height: '667px'
        },
        {
          name: 'iPhone 11',
          width: '414px',
          height: '896px'
        },
        {
          name: 'Nexus 6P',
          width: '411px',
          height: '731px'
        },
        {
          name: 'Google Pixel 4',
          width: '411px',
          height: '869px'
        },
        {
          name: 'Galaxy S10',
          width: '360px',
          height: '760px'
        }
      ],
      selectedPhoneIndex: 0
    }
  },
  computed: {
    currentEmail() {
      return JSON.stringify(this.$store.state.currentEmail)
    },
    filteredSavedEmails() {
      return this.savedEmails.filter(option =>
        option
          .toString()
          .toLowerCase()
          .includes(this.sendEmail.toLowerCase())
      )
    },
    componentInstance() {
      const template = this.selectedTemplate
      if (!template) {
        return null
      }
      return () =>
        import(
          `@/components/templates/${this.$store.state.currentClient.id}/${template}`
        )
    },
    templateStyle() {
      if (!this.selectedTemplate) {
        return ''
      }
      const client = this.getClient()
      return client ? client.templateStyle : ''
    },
    globalStyle() {
      if (!this.selectedTemplate) {
        return ''
      }
      const client = this.getClient()
      return client ? client.globalStyle : ''
    },
    mobileStyle() {
      if (!this.selectedTemplate) {
        return ''
      }
      const client = this.getClient()
      return client ? client.mobileStyle : ''
    },
    backLink() {
      return this.$store.state.currentClient
        ? `/clients/${this.$store.state.currentClient.id}`
        : '/'
    },
    checkedEmailList() {
      return this.emailList.filter(option => option.checked)
    }
  },
  mounted: function() {
    // Set preview mode as false if it was true in previous interaction
    this.$store.commit('setPreviewMode', false)
    this.$store.commit('setMobilePreview', false)
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
    // Saved emails
    this.savedEmails = []
    try {
      const saveEmailsItem = localStorage.getItem('savedEmails')
      if (saveEmailsItem) {
        this.savedEmails = JSON.parse(saveEmailsItem).savedEmails
        this.emailList = this.savedEmails.map(email => ({
          checked: true,
          email
        }))
      }
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    getClient: function() {
      if (this.client) {
        return this.client
      }
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
        .replace(/&lt/g, '<')
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
      return pretty(
        comb(`${client.preHTML}${rawHtml}${client.postHTML}`).result
      )
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
    toggleMobilePreview: function(isModalPreview) {
      this.$store.commit('setMobilePreview', isModalPreview)
    },
    handleTemplateSelected: function(value) {
      this.$store.commit('clearCurrentEmail')
      this.selectedTemplate = value || ''
    },
    handleExportHTML: function() {
      this.saveAttempted = true

      if (this.selectedTemplate && this.name) {
        this.$store.commit('toggleEditMode')
        this.loading = true
        setTimeout(() => {
          const html = this.getHtml()
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
          this.loading = false
        }, 500)
      }
    },
    handleSendEmail: function() {
      this.sendAttempted = true
      if (this.selectedTemplate && this.checkedEmailList.length > 0) {
        this.$store.commit('setPreviewMode', true)
        this.$store.commit('toggleEmailMode')
        this.loading = true
        setTimeout(() => {
          const html = this.getHtml()
          const emailName = this.name
          if (this.rememberEmail) {
            this.savedEmails = [
              ...this.savedEmails,
              ...this.checkedEmailList
                .map(item => item.email)
                .filter(email => !this.savedEmails.includes(email))
            ]
            localStorage.setItem(
              'savedEmails',
              JSON.stringify({
                savedEmails: this.savedEmails
              })
            )
          }
          this.checkedEmailList.forEach(item => {
            axios
              .post('/api/send-email', {
                email: item.email.toLowerCase(),
                name: emailName,
                html: html
              })
              .then(response => {
                this.$buefy.toast.open({
                  duration: 5000,
                  message: `Email successfully sent to ${item.email}!`,
                  position: 'is-bottom',
                  type: 'is-success'
                })
              })
              .catch(error => {
                console.log(error)
                this.$buefy.toast.open({
                  duration: 5000,
                  message: `Error sending the email to ${item.email}`,
                  position: 'is-bottom',
                  type: 'is-danger'
                })
              })
              .finally(() => {
                this.loading = false
                this.isEmailModalActive = false
              })
          })
          this.$store.commit('setPreviewMode', false)
          this.$store.commit('toggleEmailMode')
        }, 500)
      }
    },
    handleAddEmail: function() {
      this.addAttempted = true
      if (this.sendEmail) {
        this.emailList = [
          {
            checked: true,
            email: this.sendEmail
          },
          ...this.emailList
        ]
        this.sendEmail = ''
        this.addAttempted = false
      }
    },
    deleteEmail: function(email) {
      this.savedEmails = this.savedEmails.filter(item => item != email)
      this.emailList = this.emailList.filter(item => item.email != email)
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
  button.action-element {
    @media screen and (min-width: $small) {
      margin-bottom: 1rem;
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
  .phone {
    border: 40px solid #121212;
    box-shadow: 0px 3px 0 #000, 0px 4px 0 #000, 0px 5px 0 #000, 0px 7px 0 #000,
      0px 10px 20px #000;
    border-width: 55px 7px;
    border-radius: 40px;
    overflow: hidden;
    transition: all 0.5s ease;
    margin: 2rem 0;
    .email {
      display: flex;
      justify-content: center;
      -webkit-transition: all 0.5s ease;
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
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  .phone-options {
    position: absolute;
    top: 1rem;
    right: 0;
    display: flex;
    flex-direction: column;
    .button {
      justify-content: flex-start;
      margin: 0 0 1px;
    }
  }
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
      .section-separator {
        margin: 1rem 0;
        border-bottom: 1px solid $bars-over;
      }
      h4 {
        margin-bottom: 0.75rem;
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
  }
}
.send-email {
  padding: 30px;
  background: $white;
  max-width: 720px;
  margin: 0 auto;
  .secondary {
    margin-bottom: 0;
  }
  .input {
    width: 300px;
  }
  section.columns {
    border: black dashed 1px;
    margin-top: 1rem;
    padding: 1rem;
    flex-wrap: wrap;
    .column {
      padding: 0;
      margin: 0;
      .b-checkbox {
        margin-right: 0;
      }
    }
    button {
      background: none;
      color: red;
      margin-bottom: 0;
    }
  }
  .button-container {
    .button {
      max-width: 250px;
      width: 100%;
      margin-bottom: 0;
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
