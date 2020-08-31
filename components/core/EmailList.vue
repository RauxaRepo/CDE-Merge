<template>
  <div>
    <b-menu>
      <b-menu-list label="Templates">
        <b-menu-item
          v-for="email in $store.state.emails.list"
          :key="email.id"
          :label="email.name"
          :to="`/emails/${email.id}`"
          icon="link"
          tag="router-link"
        >
        </b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
export default {}
</script>
