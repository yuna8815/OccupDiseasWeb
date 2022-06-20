<template>
  <v-container class="py-8">
    <h1 class="text-h5 mb-8">계정 상세정보</h1>

    <v-form
      ref="form"
      v-model="isValid"
      lazy-validation
      class="white pa-4"
      >
      <v-row>
        <v-col cols="12" sm="6">
          <v-subheader>아이디</v-subheader>
          <v-text-field
            outlined
            readonly
            placeholder="아이디"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12" sm="6">
          <v-subheader>이름</v-subheader>
          <v-text-field
            outlined
            readonly
            placeholder="이름"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12" sm="6">
          <v-subheader>전화번호</v-subheader>
          <v-text-field
            outlined
            readonly
            v-mask="'###-####-####'"
            placeholder="전화번호"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12" sm="6">
          <v-subheader>이메일 주소</v-subheader>
          <v-text-field
            outlined
            readonly
            placeholder="이메일 주소"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12"><v-divider /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-subheader>직업병 안심센터명</v-subheader>
          <v-text-field
            outlined
            readonly
            placeholder="직업병 안심센터명"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12" sm="6">
          <v-subheader>협력병원명</v-subheader>
          <v-text-field
            outlined
            readonly
            placeholder="협력병원명"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12" sm="6">
          <v-subheader>기관 주소</v-subheader>
          <v-text-field
            outlined
            readonly
            placeholder="기관 주소"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12" sm="6">
          <v-subheader>소속 과</v-subheader>
          <v-text-field
            outlined
            readonly
            placeholder="소속 과"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12">
          <v-subheader>권한 설정</v-subheader>
          <v-radio-group
            :row="!$vuetify.breakpoint.mobile"
            hide-details>
            <v-radio
              v-for="(item, index) in authItems"
              :key="index"
              :label="item"/>
          </v-radio-group>
        </v-col>
        <v-col cols="12">
          <v-subheader>계정 승인</v-subheader>
          <v-radio-group
            row
            hide-details>
            <v-radio label="승인" />
            <v-radio label="미승인" />
          </v-radio-group>
        </v-col>
        <v-col cols="12"><v-divider /></v-col>
        <v-col>
          <v-subheader>마지막 접속일자</v-subheader>
          <v-text-field
            outlined
            readonly
            placeholder="마지막 접속일자"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
      </v-row>
    </v-form>

    <div class="pa-8 text-center">
      <v-btn
        outlined
        rounded
        color="primary"
        class="mr-4"
        @click="doCancel">
        취소
      </v-btn>
      <v-btn
        :disabled="!isValid"
        depressed
        rounded
        color="primary"
        @click="doValidate">
        저장
      </v-btn>
    </div>

    <v-dialog
      v-model="isPostcodeOpen"
      width="400">
      <VueDaumPostcode @complete="onComplete" />
    </v-dialog>
  </v-container>
</template>

<script>
import { VueDaumPostcode } from "vue-daum-postcode"

export default {
  components: {
    VueDaumPostcode
  },
  data() {
    return {
      isPostcodeOpen: false,

      isValid: true,
      authItems: [
        // '시스템 관리자', 
        '안심센터 관리자', '안심센터 의료진', '협력병원 관리자', '협력병원 의료진']
    }
  },
  methods: {
    doValidate() {
      this.$refs.form.validate();
    },
    doCancel() {
      this.$router.back()
    },
  }
}
</script>