<template>
  <v-sheet class="transparent">
    <v-form
      v-model="isValid"
      ref="form"
      class="white pa-4">
      <v-row>
        <v-col cols="12" class="text-h6">계정 정보</v-col>
        <v-col cols="12" sm="6">
          <v-subheader>아이디</v-subheader>
          <v-text-field
            outlined
            placeholder="아이디"
            readonly
            hide-details />
        </v-col>
        <v-col>
          <v-subheader>이름</v-subheader>
          <v-text-field
            outlined
            placeholder="이름"
            readonly
            hide-details />
        </v-col>
        <v-col cols="12" sm="6">
          <v-subheader>전화번호</v-subheader>
          <v-text-field
            outlined
            placeholder="전화번호"
            required
            :rules="[v => !!v]"
            hide-details />
        </v-col>
        <v-col>
          <v-subheader>이메일 주소</v-subheader>
          <v-text-field
            outlined
            placeholder="이메일 주소"
            require
            :rules="[v => !!v]"
            hide-details />
        </v-col>
        <v-col cols="12"><v-divider /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-h6">소속 정보</v-col>
        <v-col cols="12" sm="6">
          <v-subheader>직업병 안심센터명</v-subheader>
          <v-select
            :items="centerItems"
            outlined
            placeholder="직업병 안심센터 선택"
            :rules="[v => !!v]"
            required
            hide-details="auto"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-subheader>협력병원명</v-subheader>
          <v-text-field
            outlined
            require
            placeholder="협력병원명"
            :rules="[v => !!v]"
            hide-details />
        </v-col>
        <v-col cols="12" sm="6">
          <v-subheader>기관 주소</v-subheader>
          <v-text-field
            outlined
            readonly
            placeholder="기관 주소"
            hide-details />
        </v-col>
        <v-col cols="12" sm="6">
          <v-subheader>소속과</v-subheader>
          <v-text-field
            outlined
            require
            placeholder="소속과"
            :rules="[v => !!v]"
            hide-details />
        </v-col>
      </v-row>
    </v-form>

    <div class="py-8 text-center">
      <v-btn
        outlined
        rounded
        color="primary"
        @click="doCancel"
        class="mr-4">
        취소
      </v-btn>
      <v-btn
        depressed
        rounded
        color="primary"
        @click="doValidate">
        저장
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      isValid: true,
      centerItems: ['직업병 안심센터 A', '직업병 안심센터 B', '직업병 안심센터 C', '직업병 안심센터 D']
    }
  },
  methods: {
    doCancel() {
      this.$router.back();
    },
    doValidate() {
      this.$refs.form.validate()
    }
  }
}
</script>