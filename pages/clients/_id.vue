<template>
  <section class="columns">
    <aside class="column is-one-quarter-tablet">
      <EmailList :emails="clientEmails" />
      <b-upload class="file-label" @input="handleInput">
        <span class="file-cta">
          <b-icon class="file-icon" icon="upload"></b-icon>
          <span class="file-label">Import JSON</span>
        </span>
      </b-upload>
    </aside>
    <main class="column">
      <div
        v-for="(templates, group) in templateGroups"
        :key="group"
        class="group"
      >
        <h2>{{ group }}</h2>
        <div class="columns">
          <div
            v-for="template in templates"
            :key="template.name"
            class="column is-one-third-tablet template"
          >
            <nuxt-link :to="`/create-email?template=${template.id}`">
              <img :src="template.img || '/images/placeholder.png'" alt="" />
              <span>{{ template.name }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import EmailList from '@/components/core/EmailList.vue'
import { importMixin } from '@/shared/mixins'
import { groupBy } from 'lodash'

export default {
  components: {
    EmailList
  },
  mixins: [importMixin],
  data: function() {
    return {
      emails: [],
      templateGroups: [],
      clientTemplates: []
    }
  },
  computed: {
    clientEmails: function() {
      return this.clientTemplates.length > 0 && this.$store.state.emails.list
        ? this.clientTemplates.reduce((allEmails, template) => {
            return [
              ...allEmails,
              ...this.$store.state.emails.list.filter(email => email.template === template.id)
            ]
          }, [])
        : []
    }
  },
  mounted: function() {
    const id = this.$route.params.id
    const currentClient = this.$store.state.clients.list.find(
      client => client.id === id
    )
    if (currentClient) {
      this.$store.commit('setCurrentClient', currentClient)
      this.$auth.$storage.setLocalStorage('currentClient', currentClient)
      this.clientTemplates = this.$store.state.templates.list.filter(
        template => template.clientId === id
      )
      if (this.clientTemplates.length > 0) {
        this.templateGroups = groupBy(this.clientTemplates, 'tag')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  padding: 4rem 0 2rem;
}
aside {
  margin-right: 4rem;
  ::v-deep {
    .upload {
      margin-top: 2rem;
    }
    .upload,
    .file-cta {
      width: 100%;
    }
    .file-cta {
      justify-content: center;
    }
  }
}
.group {
  max-width: 700px;
  margin-bottom: 1rem;
  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid $black;
  }
  .template {
    a {
      display: block;
    }
    img {
      width: 100%;
    }
    span {
      margin: 0.2rem 0 1rem;
      display: block;
      color: $black;
    }
  }
}
</style>
