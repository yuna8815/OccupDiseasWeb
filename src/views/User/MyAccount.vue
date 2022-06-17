<template>
  <v-container class="py-8">
    <v-tabs
      v-model="tabsModel"
      class="pt-0 pb-8 transparent">
      <v-tab
        v-for="(tab, index) in tabs"
        :key="index"
        class="text-h5">
        {{ tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabsModel" class="transparent">
      <v-tab-item :key="0">
        <PersonalInfo />
      </v-tab-item>
      <v-tab-item :key="1">
        <ChangePw />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import PersonalInfo from '@/views/User/PersonalInfo'
import ChangePw from '@/views/User/ChangePw'

export default {
  components: {
    PersonalInfo,
    ChangePw
  },
  data() {
    return {
      tabsModel: null,
      tabs: ['회원정보 수정', '비밀번호 변경']
    }
  }
}
</script>

<style lang="scss" scoped>
.v-tab:not(.v-tab--active) {
  color: var(--v-text-base) !important;
}
</style>