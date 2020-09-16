<template>
  <section>
    <div class="panel">
      <p class="panel-heading">
        Login
      </p>
      <div class="panel-block">
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
    </div>
  </section>
</template>

<script>
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
    templates: ['ExecLetter']
  }
]

export default {
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
            admin: existingUser.admin
          })
          this.$router.push('/')
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
section {
  position: relative;
  min-height: 300px;
  .panel {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .panel-block {
      padding-bottom: 1.5rem;
    }
  }
}
</style>
