<template>
  <v-app-bar
    app
    flat
    color="white">
    <v-skeleton-loader
      width="40"
      max-height="40"
      type="image">
    </v-skeleton-loader>
    <v-spacer />
    <v-app-bar-nav-icon @click.stop="$props.params.isDrawer = !$props.params.isDrawer"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    params: Object
  }
}
</script>