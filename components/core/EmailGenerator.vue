<template>
  <div>
    <b-button tag="router-link" class="button" to="/" type="is-link">
      Go Back
    </b-button>
    <h1>{{ title }}</h1>
    <div class="template-actions">
      <b-field
        v-if="!id"
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
          <option
            v-for="template in $store.state.templates.list"
            :key="template"
          >
            {{ template }}
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
      <b-button @click="handleSave" class="button action-element">
        Save
      </b-button>
    </div>
    <div v-if="selectedTemplate">
      <div ref="templateContainer">
        <component :is="componentInstance" />
      </div>
      <b-button @click="handleExport" class="button">
        Export HTML
      </b-button>
    </div>
    {{ currentEmail }}
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'email'],
  data: function() {
    return {
      name: '',
      saveAttempted: false,
      isImageModalActive: false,
      selectedTemplate: null
    }
  },
  mounted: function() {
    if (this.id) {
      this.name = this.$store.state.currentEmail.name
      this.selectedTemplate = this.$store.state.currentEmail.template
    }
  },
  methods: {
    handleTemplateSelected: function(value) {
      this.$store.commit('clearCurrentEmail')
      this.selectedTemplate = value || ''
    },
    handleExport: function() {
      this.$store.commit('toggleEditMode')
      this.$nextTick(function() {
        const html = this.$refs.templateContainer.innerHTML.replace(
          /data-v-[0-9a-z]*=""/g,
          ''
        )
        this.$store.commit('toggleEditMode')
      })
    },
    handleSave: function() {
      this.saveAttempted = true
      const email = {
        ...this.$store.state.currentEmail,
        name: this.name,
        template: this.selectedTemplate
      }
      if (this.selectedTemplate && this.name) {
        if (this.id) {
          this.$store.dispatch('updateEmail', email)
        } else {
          this.$store.dispatch('saveEmail', email)
        }
        this.$router.push('/')
      }
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
      return () => import(`@/components/templates/${template}`)
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
      margin-right: 2rem;
    }
  }
}
.button {
  margin-bottom: 1.5rem;
}
</style>
