<template>
  <div class="container">
    <div>
      <h1 class="title">
        cde-merge
      </h1>
      <div class="links">
        <b-button
          tag="router-link"
          to="/emails"
          type="is-link"
          icon-right="email"
        >
          Create Email
        </b-button>
        <b-upload class="file-label" @input="handleInput">
          <span class="file-cta">
            <b-icon class="file-icon" icon="upload"></b-icon>
            <span class="file-label">Import Email</span>
          </span>
        </b-upload>
      </div>
      <div class="list">
        <EmailList />
      </div>
    </div>
  </div>
</template>

<script>
import EmailList from '@/components/core/EmailList.vue'

export default {
  components: {
    EmailList
  },
  beforeCreate: function() {
    this.$store.commit('clearCurrentEmail')
  },
  mounted() {
    this.$store.dispatch('getEmails')
  },
  methods: {
    handleInput(file) {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onloadend = () => {
        const json = JSON.parse(reader.result)
        delete json.id
        this.$store.dispatch('saveEmail', json)
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding: 2rem 0;
}
.list {
  text-align: left;
}
</style>
