<template>
  <v-sheet class="d-flex align-center flex-shrink-0">
    <v-avatar
      color="primary lighten-1"
      size="40"
      class="pa-2 mr-2">
      <user-icon class="white--text"></user-icon>
    </v-avatar>

    <div class="flex-shrink-0">
      <p class="ma-0 text-subtitle-1">홍길동</p>
      <p class="ma-0 text-body-2 text--text text--lighten-1">안심센터 관리자</p>
    </div>
  </v-sheet>
</template>

<script>
import { UserIcon } from 'vue-feather-icons'

export default {
  name: 'UserAvatar',
  components: {
    UserIcon
  }
}
</script>