<template>
  <v-app>
    <TopNav v-if="!$vuetify.breakpoint.xs" />
    <TopNavXs v-else :params="$data" />
    <SideNavXs :params="$data" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TopNav from '@/components/widget/TopNav'
import TopNavXs from '@/components/widget/TopNavXs'
import SideNavXs from '@/components/widget/SideNavXs'

export default {
  components: {
    TopNav,
    TopNavXs,
    SideNavXs
  },
  data() {
    return {
      isDrawer: false
    }
  },
  watch: {
    "$vuetify.breakpoint.xs": function() {
      this.isDrawer = false;
    }
  },
}
</script>