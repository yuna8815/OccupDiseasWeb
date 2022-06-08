<template>
  <v-container class="white">
    <div class="d-flex align-center justify-center">
      <v-skeleton-loader
        width="64"
        height="64"
        type="image"
        class="mr-4"
      ></v-skeleton-loader>
      <h1>직업병 안심센터</h1>
    </div>
    <v-form>
      <v-text-field
        placeholder="아이디"
        outlined
        />
      <v-text-field
        placeholder="비밀번호"
        type="password"
        outlined
        />
    </v-form>

    <v-btn depressed color="primary">로그인</v-btn>
    <v-btn text>가입하고 시작하세요</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style lang="scss" scoped>
.container {
  padding: 102px 0;
}
</style>