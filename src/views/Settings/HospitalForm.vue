<template>
  <v-container class="py-8">
    <h1 class="text-h5 mb-8">협력병원 등록/수정</h1>

    <v-form
      ref="form"
      v-model="isValid"
      lazy-validation
      class="white pa-4"
      >
      <v-row>
        <v-col cols="12" sm="6">
          <v-subheader>직업병 안심센터명</v-subheader>
          <v-text-field
            outlined
            placeholder="직업병 안심센터명"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12" sm="6">
          <v-subheader>협력병원명</v-subheader>
          <v-text-field
            outlined
            placeholder="협력병원명"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12">
          <v-subheader>기관 주소</v-subheader>
          <div class="d-flex flex-column flex-md-row">
            <v-text-field
              outlined
              placeholder="도로명 주소"
              append-icon="mdi-magnify"
              :rules="[v => !!v]"
              required
              hide-details
              class="mb-4 mb-md-0 mr-md-3"
              style="flex: 1;"
              @click="isPostcodeOpen = true" />
            <v-text-field
              outlined
              placeholder="상세 주소"
              :rules="[v => !!v]"
              required
              hide-details
              class="ml-0 ml-md-3"
              style="flex: 1;" />
          </div>
        </v-col>
        <v-col cols="12"><v-divider /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-h6">안심센터 관리자</v-col>
        <v-col cols="12" sm="4">
          <v-subheader>이름</v-subheader>
          <v-text-field
            outlined
            placeholder="이름"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12" sm="4">
          <v-subheader>전화번호</v-subheader>
          <v-text-field
            outlined
            v-mask="'###-####-####'"
            placeholder="전화번호"
            :rules="[v => !!v]"
            required
            hide-details />
        </v-col>
        <v-col cols="12" sm="4">
          <v-subheader>이메일 주소</v-subheader>
          <v-text-field
            outlined
            placeholder="이메일 주소"
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
        작성 완료
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

      isValid: true
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