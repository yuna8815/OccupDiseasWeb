<template>
  <v-navigation-drawer
    v-model="$props.params.isDrawer"
    absolute
    temporary
    class="pa-4">
    <div class="px-2 py-4">
      <UserAvatar />
    </div>

    <v-divider class="my-4" />

    <v-list nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import UserAvatar from '@/components/widget/UserAvatar'

export default {
  components: {
    UserAvatar
  },
  props: {
    params: Object
  },
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
    }
  }
}
</script>