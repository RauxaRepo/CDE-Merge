<template>
  <div>
    <b-button tag="router-link" class="button" to="/" type="is-link">
      Go Back
    </b-button>
    <h1>{{ title }}</h1>
    <div class="template-actions">
      <b-field
        v-if="!emailId && filteredTemplates.length > 1"
        label-position="on-border"
        label="Template"
        class="action-element template-selector-container"
        :type="saveAttempted && !selectedTemplate ? 'is-danger' : ''"
        :message="
          saveAttempted && !selectedTemplate ? 'Template is required' : ''
        "
      >
        <b-select
          placeholder="Select a template"
          @input="handleTemplateSelected"
        >
          <option value="" />
          <option v-for="template in filteredTemplates" :key="template.name">
            {{ template.name }}
          </option>
        </b-select>
      </b-field>
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
        class="button action-element"
        icon-right="content-save"
        @click="handleSave"
      >
        Save
      </b-button>
      <b-button
        v-if="selectedTemplate"
        class="button"
        icon-right="export"
        @click="handleExportHTML"
      >
        Export
      </b-button>
    </div>
    <div v-if="selectedTemplate">
      <div ref="templateContainer">
        <component :is="componentInstance" />
      </div>
    </div>
    <!-- {{ currentEmail }} -->
  </div>
</template>

<script>
import JSZip from 'jszip'
import pretty from 'pretty'
import { saveAs } from 'file-saver'

export default {
  props: ['emailId', 'title', 'email'],
  data: function() {
    return {
      userData: null,
      name: '',
      saveAttempted: false,
      isImageModalActive: false,
      selectedTemplate: null
    }
  },
  computed: {
    filteredTemplates() {
      if (this.userData && this.userData.admin) {
        return this.$store.state.templates.list
      }
      return this.userData && this.userData.templates
        ? this.$store.state.templates.list.filter(template =>
            this.userData.templates.some(
              userTemplate => userTemplate === template.name
            )
          )
        : []
    },
    currentEmail() {
      return JSON.stringify(this.$store.state.currentEmail)
    },
    componentInstance() {
      const template = this.selectedTemplate
      if (!template) {
        return null
      }
      return () => import(`@/components/templates/${template}`)
    }
  },
  mounted: function() {
    // On refresh
    if (this.$auth.loggedIn) {
      if (this.$auth.user && !this.$auth.user.id) {
        this.userData = this.$auth.$storage.getLocalStorage('user')
      } else {
        this.userData = this.$auth.user
      }
    }
    // On existing email
    if (this.emailId) {
      this.name = this.$store.state.currentEmail.name
      this.selectedTemplate = this.$store.state.currentEmail.template
    } else if (
      this.userData &&
      this.userData.templates &&
      this.userData.templates.length === 1
    ) {
      this.selectedTemplate = this.userData.templates[0]
    }
  },
  methods: {
    handleTemplateSelected: function(value) {
      this.$store.commit('clearCurrentEmail')
      this.selectedTemplate = value || ''
    },
    handleExportHTML: function() {
      this.saveAttempted = true

      if (this.selectedTemplate && this.name) {
        this.$store.commit('toggleEditMode')
        setTimeout(() => {
          const html = this.$refs.templateContainer.innerHTML.replace(
            /data-v-[0-9a-z]*=""/g,
            ''
          )
          console.log(html)
          const emailName = this.name
          const zip = new JSZip()
          const emptyClient = {
            postHTML: '',
            preHTML: ''
          }
          const templateData = this.$store.state.templates.list.find(
            template => template.name === this.selectedTemplate
          )
          const client =
            templateData && templateData.clientId
              ? this.$store.state.clients.list.find(
                  client => client.id === templateData.clientId
                ) || emptyClient
              : emptyClient
          zip.file(
            'index.html',
            pretty(`${client.preHTML}${html}${client.postHTML}`)
          )
          zip.file(
            `${emailName}.json`,
            JSON.stringify(this.$store.state.currentEmail)
          )
          const assets = zip.folder('assets')
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
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
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
    }
  }
}
.button {
  margin-bottom: 1.5rem;
}
</style>
