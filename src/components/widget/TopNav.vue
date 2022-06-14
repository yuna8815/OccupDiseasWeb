<template>
  <v-app-bar
    app
    flat
    color="white"
    class="px-sm-12"
  >
    <v-tabs
      height="34"
      class="py-4">
      <v-tab to="/form/inbox">작성 목록</v-tab>
      <v-tab to="/form/outbox">의뢰 목록</v-tab>
      <v-menu
        offset-y
        class="rounded-2">
        <template v-slot:activator="{ on, attrs }">
          <v-tab
            v-bind="attrs"
            v-on="on">
            등록 관리
          </v-tab>
        </template>
        <v-list>
          <v-list-item
            v-for="(menu, index) in menus"
            :key="index"
            :to="menu.router"
          >
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
            <v-list-item-icon>
              <chevron-right-icon size="20" class="text--text text--lighten-1"></chevron-right-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tabs>
    
    <v-spacer />
    <UserAvatar />

    <v-btn
      depressed
      rounded
      color="primary"
      @click="doLogout"
      class="ml-6">
      로그아웃
    </v-btn>
  </v-app-bar>
</template>

<script>
import { ChevronRightIcon } from 'vue-feather-icons'
import UserAvatar from '@/components/widget/UserAvatar'

export default {
  components: {
    ChevronRightIcon,
    UserAvatar
  },
  data() {
    return {
      menus: [
        { title: '직업병 안심센터 등록관리', router: '/settings/center-list' },
        { title: '협력병원 등록관리', router: '/settings/center-list' },
        { title: '의료진 등록관리', router: '/settings/center-list' }
      ]
    }
  },
  methods: {
    doLogout() {
      this.$router.replace('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.v-list-item + .v-list-item {
  border-top: solid 1px var(--v-gray-darken2)
}
</style>