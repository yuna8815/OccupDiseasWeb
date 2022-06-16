<template>
  <v-navigation-drawer
    v-model="$props.params.isDrawer"
    app
    temporary
    class="pa-4">
    <div class="d-flex fill-height flex-column align-center justify-space-between">
      <div style="width: 100%;">
        <div class="px-2 py-4"><UserAvatar /></div>

        <v-divider class="my-4" />

        <v-list
          nav
          width="100%"
          class="pa-0">
          <v-list-item-group color="primary">
            <v-list-item
              link
              to="/form/inbox"
              class="mb-6 px-4">
              <v-list-item-icon class="mr-4"><edit-2-icon size="24"></edit-2-icon></v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>작성 목록</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              link
              to="/form/outbox"
              class="mb-6 px-4">
              <v-list-item-icon class="mr-4"><list-icon size="24"></list-icon></v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>의뢰 목록</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-group
              :value="true"
              no-action>
              <template v-slot:activator>
                <v-list-item class="px-4">
                  <v-list-item-icon class="mr-4"><settings-icon size="24"></settings-icon></v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>등록 관리</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>

              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                link
                :to="item.router"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list-item-group>
        </v-list>
      </div>
      
      <v-btn
        depressed
        rounded
        color="primary"
        to="/">
        로그아웃
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import UserAvatar from '@/components/widget/UserAvatar'

import { Edit2Icon, ListIcon, SettingsIcon } from 'vue-feather-icons'

export default {
  components: {
    UserAvatar,
    Edit2Icon,
    ListIcon,
    SettingsIcon
  },
  props: {
    params: Object
  },
  data() {
    return {
      items: [
        { title: '직업병 안심센터 관리', router: '/settings/center-list' },
        { title: '협력병원 관리', router: '/settings/center-list' },
        { title: '의료진 관리', router: '/settings/center-list' },
      ],
    }
  }
}
</script>