<template>
  <v-container class="fill-height align-center">
    <v-row>
      <v-col class="white"> 
        <div class="d-flex align-center justify-center mb-4">
          <v-skeleton-loader
            width="64"
            height="64"
            type="image"
            class="mr-4"
          ></v-skeleton-loader>
          <h1 class="text-h4">직업병 안심센터</h1>
        </div>

        <v-form class="pa-4 mx-auto">
          <v-text-field
            placeholder="아이디"
            outlined
            hide-details="auto"
            :rules="[v => !!v || '아이디를 확인해주세요']"
            class="text-body-2 mb-6">
            <template v-slot:message>
              <div class="d-flex align-center">
                <alert-triangle-icon size="16" class="text--text text--lighten-1 mr-1"></alert-triangle-icon>
                아이디를 확인해주세요
              </div>
            </template>
          </v-text-field>
          <v-text-field
            placeholder="비밀번호"
            type="password"
            outlined
            hide-details="auto"
            :rules="[v => !!v || '비밀번호를 확인해주세요']"
            class="text-body-2">
            <template v-slot:message>
              <div class="d-flex align-center">
                <alert-triangle-icon size="16" class="text--text text--lighten-1 mr-1"></alert-triangle-icon>
                비밀번호를 확인해주세요
              </div>
            </template>
          </v-text-field>
        </v-form>

        <div class="d-flex align-center flex-column">
          <v-btn
            depressed
            rounded
            color="primary"
            class="my-4">
            로그인
          </v-btn>
          <v-btn
            text
            color="primary">
            <u>가입하고 시작하세요</u>
            <arrow-right-icon size="16" class="ml-2"></arrow-right-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ArrowRightIcon, AlertTriangleIcon } from 'vue-feather-icons'

export default {
  name: 'LoginPage',
  components: {
    ArrowRightIcon,
    AlertTriangleIcon
  }
}
</script>

<style lang="scss" scoped>
.col {
  padding: 102px 0;
}
.v-form {
  max-width: 480px;
}
</style>