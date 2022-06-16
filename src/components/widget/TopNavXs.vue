<template>
  <v-app-bar
    app
    elevate-on-scroll
    color="white">
    <v-container class="d-flex align-center">
      <Logo width="40" height="40" />
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="$props.params.isDrawer = !$props.params.isDrawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>
</template>

<script>
import Logo from '@/components/widget/Logo'

export default {
  components: {
    Logo
  },
  props: {
    params: Object
  }
}
</script>