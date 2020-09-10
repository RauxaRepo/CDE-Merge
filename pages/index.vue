<template>
  <ContentPanel>
    <div class="container">
      <h1 class="title">
        merge
      </h1>
      <div class="actions">
        <!-- <b-button
          tag="router-link"
          to="/emails"
          type="is-link"
          icon-right="email"
        >
          Create Email
        </b-button> -->
        <b-dropdown
          v-if="$store.state.clients.list.length > 0"
          aria-role="list"
        >
          <button slot="trigger" class="button">
            <span>Select Client</span>
            <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item
            v-for="client in $store.state.clients.list"
            :key="client.id"
            aria-role="listitem"
            @click="goToClient(client)"
          >
            {{ client.name }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </ContentPanel>
</template>

<script>
import ContentPanel from '@/components/core/ContentPanel'

export default {
  components: {
    ContentPanel
  },
  beforeCreate: function() {
    this.$store.commit('clearCurrentEmail')
    this.$store.commit('clearCurrentClient')
  },
  methods: {
    goToClient: function(client) {
      this.$router.push(`/clients/${client.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 3rem 0;
}
.title {
  display: block;
  font-weight: bold;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.actions {
  ::v-deep {
    .upload,
    .file-cta,
    .dropdown,
    .dropdown .dropdown-trigger,
    .dropdown button,
    .dropdown-menu,
    .dropdown-item {
      width: 100%;
    }
    .file-cta {
      justify-content: center;
    }
    .separator {
      display: block;
      margin: 1rem 0;
    }
  }
}

.file-label {
  display: none;
  visibility: hidden;
}
</style>
