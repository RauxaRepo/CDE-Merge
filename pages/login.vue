<template>
  <section>
    <ContentPanel>
      <div class="container">
        <h1 class="title">
          merge
        </h1>
        <form @submit.prevent="userLogin">
          <b-field :type="isError ? 'is-danger' : ''" label="Username">
            <b-input v-model="login.username" maxlength="30"></b-input>
          </b-field>

          <b-field :type="isError ? 'is-danger' : ''" label="Password">
            <b-input v-model="login.password" type="password" password-reveal>
            </b-input>
          </b-field>
          <b-button
            tag="input"
            native-type="submit"
            label="Login"
            value="Login"
            :disabled="!login.username || !login.password"
          />
        </form>
      </div>
    </ContentPanel>
  </section>
</template>

<script>
import ContentPanel from '@/components/core/ContentPanel'

const users = [
  {
    id: '1',
    username: 'merge',
    password: 'merge123',
    admin: true
  },
  {
    id: '2',
    username: 'alaska',
    password: 'alaska123',
    admin: false,
    clients: ['alaska']
  }
]

export default {
  components: {
    ContentPanel
  },
  data: function() {
    return {
      isError: false,
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', { data: this.login })
        const existingUser = users.find(
          user =>
            user.username === this.login.username &&
            user.password === this.login.password
        )
        if (existingUser) {
          this.$auth.setUser(existingUser)
          this.$auth.$storage.setLocalStorage('user', {
            id: existingUser.id,
            templates: existingUser.templates,
            admin: existingUser.admin,
            username: existingUser.username
          })
          const client = this.$store.state.currentClient || (existingUser.clients ? existingUser.clients[0] : null)
          if (client) {
            this.$router.push(`/clients/${client.id}`)
          } else {
            this.$router.push('/')
          }
        } else {
          this.$auth.reset()
          this.isError = true
          throw new Error('Invalid user/password')
        }
      } catch (err) {
        this.loginError()
        console.log(err)
      }
    },
    loginError() {
      this.$buefy.toast.open({
        duration: 5000,
        message: 'Invalid username or password.',
        position: 'is-bottom',
        type: 'is-danger'
      })
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
form {
  text-align: left;
  .button {
    margin-top: 0.5rem;
    width: 100%;
    color: $button-secondary;
    background: $button-primary;
    border-radius: 0;
    border: none;
    &[disabled] {
      background: $button-disabled;
    }
    &:hover {
      background: $button-secondary;
      color: $button-primary;
      border: 1px solid $button-primary;
    }
  }
}
</style>
