<template>
  <v-app>
    <TopNav v-if="!$vuetify.breakpoint.xs" />
    <TopNavXs v-else />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TopNav from '@/components/widget/TopNav'
import TopNavXs from '@/components/widget/TopNavXs'

export default {
  components: {
    TopNav,
    TopNavXs
  }
}
</script>