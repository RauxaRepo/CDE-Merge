<template>
  <div>
    <h2>Edit recently saved emails</h2>
    <div v-if="emails.length > 0">
      <ul>
        <li v-for="email in emails" :key="email.id">
          <nuxt-link :to="`/emails/${email.id}`">
            {{ email.name }}
          </nuxt-link>
          <button @click="handleExportJSON(email)">
            <b-icon icon="export"></b-icon>
          </button>
          <button @click="confirm(email)">
            <b-icon icon="delete"></b-icon>
          </button>
        </li>
      </ul>
    </div>
    <div v-else>
      No recent emails
    </div>
  </div>
</template>

<script>
import { saveAs } from 'file-saver'

export default {
  props: ['emails'],
  mounted() {
    if (!this.$store.state.emails.list) {
      this.$store.dispatch('getEmails')
    }
  },
  methods: {
    handleExportJSON: function(email) {
      const json = JSON.stringify(email)
      const blob = new Blob([json], { type: 'application/json' })
      saveAs(blob, `${email.name}.json`)
    },
    deleteEmail: function(email) {
      this.$store.dispatch('deleteEmail', email.id)
    },
    confirm: function(email) {
      this.$buefy.dialog.confirm({
        message: `Are you sure to delete "${email.name}"?'`,
        onConfirm: () => this.deleteEmail(email)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid $black;
}
li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  a {
    color: $black;
    line-height: 24px;
    margin-right: 1rem;
  }
  button {
    background: none;
    border: none;
    padding: 0;
  }
}
</style>
