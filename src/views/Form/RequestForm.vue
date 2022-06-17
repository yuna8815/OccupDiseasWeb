<template>
  <v-container class="py-8">
    <div class="d-sm-flex justify-space-between align-center pb-8">
      <h1 class="text-h5 mb-4 mb-sm-0">직업병 의심 사례 협진 의뢰</h1>
      
      <div class="d-flex d-sm-block justify-end">
        <v-btn
          :icon="$vuetify.breakpoint.xs"
          outlined
          rounded
          color="primary"
          class="mr-4"
          @click="doSave">
          <save-icon v-if="$vuetify.breakpoint.xs" size="20"></save-icon>
          <span v-else>임시 저장</span>
        </v-btn>
        <v-btn
          :fab="$vuetify.breakpoint.xs"
          depressed
          rounded
          color="primary">
          <download-icon v-if="$vuetify.breakpoint.xs" size="20"></download-icon>
          <span v-else>파일 다운로드</span>
        </v-btn>
      </div>
    </div>

    <v-form
      ref="form"
      v-model="isValid"
      lazy-validation
      class="white pa-4"
      >
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-subheader>의뢰번호</v-subheader>
            <v-text-field
              outlined
              placeholder="의뢰번호"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>병원등록번호</v-subheader>
            <v-text-field
              outlined
              placeholder="병원등록번호"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12" sm="6">
            <v-subheader>환자이름</v-subheader>
            <v-text-field
              outlined
              placeholder="환자이름"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>주민등록번호</v-subheader>
            <v-text-field
              v-mask="'######-#######'"
              outlined
              placeholder="주민등록번호"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12">
            <v-subheader>환자 주소</v-subheader>
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
          <v-col cols="12" sm="6">
            <v-subheader>휴대폰 번호</v-subheader>
            <v-text-field
              v-mask="'###-####-####'"
              outlined
              placeholder="휴대폰 번호"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>직업 또는 회사명</v-subheader>
            <v-text-field
              outlined
              placeholder="직업 또는 회사명"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12">
            <v-subheader>사업장 주소</v-subheader>
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
        </v-row>
        <v-row><v-col><v-divider /></v-col></v-row>
        <v-row>
          <v-col class="text-h6">진단</v-col>
        </v-row>
        <v-row
          v-for="(list, index) in diagnosticList"
          :key="index">
          <v-col cols="12" md="4">
            <v-subheader>진단 분류</v-subheader>
            <v-radio-group
              row
              :rules="[v => !!v]"
              hide-details>
              <v-radio
                v-for="(item, index) in diagnosticGroup"
                :key="index"
                :label="item"
                :value="index + 1"/>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-subheader>진단명</v-subheader>
            <v-text-field
              outlined
              placeholder="진단명"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>질병분류 기호</v-subheader>
            <v-text-field
              outlined
              placeholder="질병분류 기호"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              outlined
              rounded
              color="primary"
              @click="doAddDiagnosticList"
              class="mr-4">
              추가
            </v-btn>
            <v-btn
              :disabled="diagnosticList.length < 2"
              depressed
              rounded
              color="primary"
              @click="doRemoveDiagnosticList">
              삭제
            </v-btn>
          </v-col>
        </v-row>
        <v-row><v-col><v-divider /></v-col></v-row>
        <v-row>
          <v-col>
            <v-subheader>발병일</v-subheader>
            <v-text-field
              v-mask="'####-##-##'"
              outlined
              placeholder="YYYY-MM-DD"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
        </v-row>
        <v-row><v-col><v-divider /></v-col></v-row>
        <v-row>
          <v-col cols="12" class="text-h6">의뢰 내용 <span class="text-subtitle-2 text--text text--lighten-1">협진 의뢰시 필수 정보</span></v-col>
          <v-col cols="12" sm="6">
            <v-subheader>성별</v-subheader>
            <v-radio-group
              row
              :rules="[v => !!v]"
              hide-details>
              <v-radio
                label="남성"
                value="M" />
              <v-radio
                label="여성"
                value="F" />
            </v-radio-group>
          </v-col>
          <v-col>
            <v-subheader>연령</v-subheader>
            <v-text-field
              outlined
              placeholder="연령"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12" sm="6">
            <v-subheader>주호소</v-subheader>
            <v-text-field
              outlined
              placeholder="주호소 (단순 손상 제외)"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>발병일</v-subheader>
            <v-text-field
              v-mask="'####-##-##'"
              outlined
              placeholder="YYYY-MM-DD"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12">
            <v-subheader>직업</v-subheader>
            <v-text-field
              outlined
              placeholder="직업 (환자 진술 그대로 입력)"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>중대재해 의심여부 (다음 중 택 1)</v-subheader>
            <v-radio-group
              v-model="disasterGroup"
              :rules="[v => !!v]"
              hide-details>
              <v-radio
                v-for="(list, index ) in disasterList"
                :key="index"
                :label="list.text"
                :value="list.value" />
              <v-radio
                value="G"
                class="align-start">
                <template v-slot:label>
                  <div class="flex-grow-1">
                    <p class="mb-0">그 외</p>
                    <v-text-field
                      v-if="disasterGroup == 'G'"
                      outlined
                      placeholder="내용을 입력해 주세요"
                      :rules="[v => !!v]"
                      required
                      hide-details
                      class="mt-2" />
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row><v-col><v-divider /></v-col></v-row>
        <v-row>
          <v-col cols="12" class="text-body-1">위와 같이 직업성 질병에 대한 전문 진료가 필요하여 의뢰합니다.</v-col>
          <v-col cols="12" sm="6">
            <v-subheader>협진의뢰일</v-subheader>
            <v-text-field
              v-mask="'####-##-##'"
              outlined
              placeholder="YYYY-MM-DD"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>협진의뢰과</v-subheader>
            <v-text-field
              outlined
              placeholder="협진의뢰과"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12" sm="6">
            <v-subheader>전문의</v-subheader>
            <div class="d-flex">
              <v-text-field
                outlined
                placeholder="전문의"
                hide-details />
              <v-btn
                v-if="!$vuetify.breakpoint.mobile"
                outlined
                rounded
                color="primary"
                class="ml-4"
                @click="openQrcode">
                서명
              </v-btn>
            </div>
              <canvas
                v-if="$vuetify.breakpoint.mobile"
                height="150"
                class="mt-4">
                여기에 서명을 해주세요
              </canvas>
          </v-col>
          <v-col>
            <v-subheader>전공의</v-subheader>
            <div class="d-flex">
              <v-text-field
                outlined
                placeholder="전공의"
                append-icon="mdi-magnify"
                hide-details
                @click="openUserList" />
              <v-btn
                v-if="!$vuetify.breakpoint.mobile"
                outlined
                rounded
                color="primary"
                class="ml-4"
                @click="openQrcode">
                서명
              </v-btn>
            </div>
            <canvas
              v-if="$vuetify.breakpoint.mobile"
              height="150"
              class="mt-4">
              여기에 서명을 해주세요
            </canvas>
          </v-col>
        </v-row>
      </v-container>
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

    <QrcodeModal :params="qrcodeModalParams" />
    <UserListModal :params="$data" />
    <ConfirmModal :params="confirmModalParams" />
    <AlertModal :params="alertModalParams" />
  </v-container>
</template>

<script>
import { DownloadIcon, SaveIcon } from 'vue-feather-icons'
import { VueDaumPostcode } from "vue-daum-postcode"
import QrcodeModal from "@/components/modal/QrcodeModal"
import UserListModal from "@/components/modal/UserListModal"
import ConfirmModal from '@/components/modal/ConfirmModal'
import AlertModal from '@/components/modal/AlertModal'

export default {
  components: {
    DownloadIcon,
    SaveIcon,
    VueDaumPostcode,
    QrcodeModal,
    UserListModal,
    ConfirmModal,
    AlertModal
  },
  data() {
    return {
      isPostcodeOpen: false,
      isUserListOpen: false,
      qrcodeModalParams: { isOpened: false },
      confirmModalParams: { isOpened: false, title: '', message: '', callback: null},
      alertModalParams: { isOpened: false, title: '', message: ''},

      isValid: true,
      diagnosticGroup: ['임상적 추정', '최종 진단'],
      diagnosticList: [
        { category: null, name: null, code: null }
      ],
      disasterGroup: null,
      disasterList: [
        { text: '사망', value: 'A' },
        { text: '의식변화, 의식장애, 현훈', value: 'B' },
        { text: '급성호흡곤란, 폐부종, 기타 호흡기계 이상소견', value: 'C' },
        { text: '실신, 어지럼증, 두통 기타 신경학적 이상소견', value: 'D' },
        { text: '중독 및 대사장애', value: 'E' },
        { text: '호흡곤란, 과호흡', value: 'F' }
      ]
    }
  },
  mounted() {
    console.log("this.$route.params=", this.$route.params.id)
    // if (this.$route.params.id > 0) {
    // } else {
    // }
  },
  methods: {
    showConfirm(tit, msg, callback) {
      this.confirmModalParams = { isOpened: true, title: tit, message: msg, callback: callback};
    },
    showAlert(tit, msg) {
      this.alertModalParams = { isOpened: true, title: tit, message: msg};
    },
    onComplete(e) {
			console.log(e);
			this.isPostcodeOpen = false;
		},
    doAddDiagnosticList() {
      this.diagnosticList.push({ category: null, name: null, code: null })
    },
    doRemoveDiagnosticList() {
      this.diagnosticList.pop()
    },
    openQrcode() {
      this.qrcodeModalParams.isOpened = true;
    },
    openUserList() {
      this.isUserListOpen = true
    },
    doValidate() {
      this.$refs.form.validate();
    },
    doCancel() {
      this.$router.back()
    },
    doSave() {
      const _temp = false;

      if(_temp) {
        this.showConfirm('임시 저장하기', '이미 임시 저장된 내용이 있습니다.\r\n해당 내용으로 덮어씌우시겠습니까?', null);
      }
      else {
        this.showAlert('임시 저장', '작성한 내용이 임시 저장되었습니다.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  border: solid 1px var(--v-primary-lighten2);
}
</style>