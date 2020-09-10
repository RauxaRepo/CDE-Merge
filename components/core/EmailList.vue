<template>
  <div v-if="$store.state.emails.list && $store.state.emails.list.length">
    <h2>My Emails</h2>
    <ul>
      <li v-for="email in $store.state.emails.list" :key="email.id">
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
</template>

<script>
import { saveAs } from 'file-saver'

export default {
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
        message: 'Are you sure you want to delete? (Progress will be lost)',
        cancelText: 'No',
        confirmText: 'Yes',
        onConfirm: () => this.deleteEmail(email)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  text-transform: uppercase;
  margin-bottom: 1rem;
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
