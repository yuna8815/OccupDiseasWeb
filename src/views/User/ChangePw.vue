<template>
  <v-sheet class="transparent">
    <v-form
      v-model="isValid"
      ref="form"
      class="white pa-4">
      <v-row>
        <v-col cols="12">
          <v-subheader>현재 비말번호</v-subheader>
          <v-text-field
            outlined
            require
            placeholder="현재 비말번호"
            :rules="[v => !!v]"
            hide-details />
        </v-col>
        <v-col cols="12">
          <v-subheader>새 비밀번호</v-subheader>
          <v-text-field
            outlined
            readonly
            placeholder="새 비밀번호"
            :rules="[v => !!v]"
            hide-details />
        </v-col>
        <v-col cols="12">
          <v-subheader>새 비밀번호 확인</v-subheader>
          <v-text-field
            outlined
            require
            placeholder="새 비밀번호 확인"
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
      isValid: true
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