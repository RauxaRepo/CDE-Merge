<template>
  <header>
    <div class="wrapper">
      <span class="logo"><nuxt-link to="/">merge</nuxt-link></span>
      <div v-if="$store.state.auth.user" class="actions">
        <b-dropdown v-if="this.$store.state.currentClient" aria-role="list">
          <button slot="trigger" class="button">
            <span>{{ this.$store.state.currentClient.name }}</span>
            <b-icon v-if="otherClients.length > 0" icon="menu-down"></b-icon>
          </button>
          <b-dropdown-item
            v-for="client in otherClients"
            :key="client.id"
            aria-role="listitem"
            @click="goToClient(client)"
          >
            {{ client.name }}
          </b-dropdown-item>
        </b-dropdown>
        <b-dropdown aria-role="list">
          <button slot="trigger" class="button profile-button">
            <span>Hi {{ $store.state.auth.user.username }}</span>
            <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item aria-role="listitem" @click="logout">
            Logout
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    otherClients: function() {
      return this.$store.state.currentClient
        ? this.$store.state.clients.list.filter(
            client =>
              this.$store.state.auth.user &&
              (this.$store.state.auth.user.admin ||
                (this.$store.state.auth.user.clients &&
                  this.$store.state.auth.user.clients.includes(client.id))) &&
              client.id !== this.$store.state.currentClient.id
          )
        : this.$store.state.clients.list
    }
  },
  methods: {
    logout() {
      this.$auth.reset()
      this.$router.push('/login')
    },
    goToClient: function(client) {
      this.$router.push(`/clients/${client.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background: $bars-bg;
  .wrapper {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-weight: bold;
      font-size: 1.5rem;
      a {
        color: $black;
      }
    }
    .actions {
      display: flex;
      button {
        height: 3rem;
        line-height: 3rem;
        padding: 0 2rem;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        background: none;
        color: $black;
        border-radius: 0;
        &.profile-button {
          background: $bars-over;
        }
      }
    }
  }
}
</style>
