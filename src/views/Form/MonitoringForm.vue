<template>
  <v-container class="py-8">
    <div class="d-sm-flex justify-space-between align-center pb-8">
      <h1 class="text-h5 mb-4 mb-sm-0">직업성 질병 모니터링 조사항목</h1>
      
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
      >
      <v-container
        v-for="(list, index) in lists"
        :key="index"
        class="white pa-4">
        <v-row>
          <v-col cols="12" sm="2">
            <v-subheader>연번</v-subheader>
            <v-text-field
              :value="list.id"
              outlined
              placeholder="연번"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
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
            <v-subheader>주민등록번호</v-subheader>
            <v-text-field
              outlined
              v-mask="'######-#######'"
              placeholder="주민등록번호"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col class="d-flex align-end justify-end">
            <v-btn
              outlined
              :icon="!$vuetify.breakpoint.xs"
              :block="$vuetify.breakpoint.xs"
              :rounded="$vuetify.breakpoint.xs"
              color="primary"
              @click="doToggle(index)">
              <chevron-up-icon v-if="list.isExpand" size="24" />
              <chevron-down-icon v-else size="24" />
            </v-btn>
          </v-col>
        </v-row>
        <v-row v-if="list.isExpand">
          <v-col cols="12" sm="6">
            <v-subheader>
              병원등록번호
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <help-circle-icon 
                    v-bind="attrs"
                    v-on="on"
                    size="20"
                    class="ml-2 text--text text--lighten-1"/>
                </template>

                <div class="text-body-2">이 외에도 식별을 위한 다른 정보를 기재할 수 있다.</div>
              </v-tooltip>
            </v-subheader>
            <v-text-field
              outlined
              placeholder="병원등록번호"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>
              사업장명
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <help-circle-icon 
                    v-bind="attrs"
                    v-on="on"
                    size="20"
                    class="ml-2 text--text text--lighten-1"/>
                </template>

                <div class="text-body-2">실제 근무하는 사업장을 기재하되, 미응답 등으로 정보를 알 수 없는 경우에는 해당 사유를 기재한다.</div>
              </v-tooltip>
            </v-subheader>
            <v-text-field
              outlined
              placeholder="사업장명"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12"><v-divider /></v-col>
          <v-col cols="12" class="text-h6">진단</v-col>
          <v-col cols="12" sm="6">
            <v-subheader>
              임상 진단명
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <help-circle-icon 
                    v-bind="attrs"
                    v-on="on"
                    size="20"
                    class="ml-2 text--text text--lighten-1"/>
                </template>

                <div class="text-body-2">임상 진료과에서 기재한 상병명을 기재한다. (한국표준질병사인분류코드 이용)</div>
              </v-tooltip>
            </v-subheader>
            <v-text-field
              outlined
              placeholder="임상 진단명"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>
              진단일
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <help-circle-icon 
                    v-bind="attrs"
                    v-on="on"
                    size="20"
                    class="ml-2 text--text text--lighten-1"/>
                </template>

                <div class="text-body-2">임상진료과 진료일을 기재한다.</div>
              </v-tooltip>
            </v-subheader>
            <v-text-field
              outlined
              v-mask="'####-##-##'"
              placeholder="YYYY-MM-DD"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12"><v-divider /></v-col>
          <v-col cols="12" class="text-h6">보고</v-col>
          <v-col cols="12" sm="4">
            <v-subheader>
              보고일
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <help-circle-icon 
                    v-bind="attrs"
                    v-on="on"
                    size="20"
                    class="ml-2 text--text text--lighten-1"/>
                </template>

                <div class="text-body-2">직업병 안심센터에 의뢰(보고)된 날을 기재한다.</div>
              </v-tooltip>
            </v-subheader>
            <v-text-field
              outlined
              v-mask="'####-##-##'"
              placeholder="YYYY-MM-DD"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12" sm="4">
            <v-subheader>보고경로</v-subheader>
            <v-text-field
              outlined
              placeholder="보고경로"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12" sm="4">
            <v-subheader>보고병원</v-subheader>
            <v-text-field
              outlined
              placeholder="보고병원"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12" sm="4">
            <v-subheader>보고과</v-subheader>
            <v-text-field
              outlined
              placeholder="보고과"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12" sm="4">
            <v-subheader>보고의사</v-subheader>
            <v-text-field
              outlined
              placeholder="보고의사"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12"><v-divider /></v-col>
          <v-col cols="12" sm="4">
            <v-subheader>
              직업력 및 병력
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <help-circle-icon 
                    v-bind="attrs"
                    v-on="on"
                    size="20"
                    class="ml-2 text--text text--lighten-1"/>
                </template>

                <div class="text-body-2">직업성 질병과 관련된 주요 직업력(작업내용)과 질병이 발생하게 된 상황을 중심으로 기재한다.</div>
              </v-tooltip>
            </v-subheader>
            <v-text-field
              outlined
              placeholder="직업력 및 병력"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12" sm="4">
            <v-subheader>
              유해인자
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <help-circle-icon 
                    v-bind="attrs"
                    v-on="on"
                    size="20"
                    class="ml-2 text--text text--lighten-1"/>
                </template>

                <div class="text-body-2">질병과 관련된 유해인자를 기재하되, 추정할 수 없는 경우 해당 사유를 기재한다.</div>
              </v-tooltip>
            </v-subheader>
            <v-text-field
              outlined
              placeholder="유해인자"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>
              최종 진단명
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <help-circle-icon 
                    v-bind="attrs"
                    v-on="on"
                    size="20"
                    class="ml-2 text--text text--lighten-1"/>
                </template>

                <div class="text-body-2">직업력과 병력, 유해인자를 고려한 최종 진단명을 기재한다. (한국표준질병사인분류코드 이용)</div>
              </v-tooltip>
            </v-subheader>
            <v-text-field
              outlined
              placeholder="최종 진단명"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12">
            <v-subheader>업무 관련성</v-subheader>
            <v-radio-group
              :row="!$vuetify.breakpoint.xs"
              :rules="[v => !!v]"
              hide-details>
              <v-radio 
                label="확실 (Definite)"
                value="A" />
              <v-radio 
                label="가능성 높음 (Probible)"
                value="B" />
              <v-radio 
                label="가능성 있음 (Possible)"
                value="C" />
              <v-radio 
                label="가능성 낮음 (Unlikely)"
                value="D" />
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <div class="py-8 d-flex">
      <v-btn
        outlined
        rounded
        color="primary"
        @click="doAddList">
        목록 추가
      </v-btn>
      <v-spacer />
      <v-btn
        outlined
        rounded
        color="primary"
        @click="doCancel">
        취소
      </v-btn>
      <v-btn
        depressed
        rounded
        color="primary"
        class="ml-4"
        @click="doValidate">
        작성 완료
      </v-btn>
    </div>

    <!-- <div class="text-body-2">
      &#8226; 병원등록번호: 이 외에도 식별을 위한 다른 정보를 기재할 수 있다.<br>
      &#8226; 사업장명: 실제 근무하는 사업장을 기재하되, 미응답 등으로 정보를 알 수 없는 경우에는 해당 사유를 기재한다.<br>
      &#8226; 임상진단명: 임상 진료과에서 기재한 상병명을 기재한다. (한국표준질병사인분류코드 이용)<br>
      &#8226; 진단일: 임상진료과 진료일을 기재한다.<br>
      &#8226; 보고일: 직업병 안심센터에 의뢰(보고)된 날을 기재한다.<br>
      &#8226; 직업력 및 병력: 직업성 질병과 관련된 주요 직업력(작업내용)과 질병이 발생하게 된 상황을 중심으로 기재한다.<br>
      &#8226; 유해인자: 질병과 관련된 유해인자를 기재하되, 추정할 수 없는 경우 해당 사유를 기재한다.<br>
      &#8226; 최종진단명: 직업력과 병력, 유해인자를 고려한 최종 진단명을 기재한다. (한국표준질병사인분류코드 이용)<br>
      &#8226; 업무관련성: 확실(Definite), 가능성 높음(Probable), 가능성 있음(Possible), 가능성 낮음(Unlikely) 등으로 구분한다.<br>
    </div> -->

    <ConfirmModal :params="confirmModalParams" />
    <AlertModal :params="alertModalParams" />
  </v-container>
</template>

<script>
import ConfirmModal from '@/components/modal/ConfirmModal'
import AlertModal from '@/components/modal/AlertModal'

import { SaveIcon, DownloadIcon, ChevronUpIcon, ChevronDownIcon, HelpCircleIcon } from 'vue-feather-icons'

export default {
  components: {
    SaveIcon,
    DownloadIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    HelpCircleIcon,
    ConfirmModal,
    AlertModal
  },
  data() {
    return {
      confirmModalParams: { isOpened: false, title: '', message: '', callback: null},
      alertModalParams: { isOpened: false, title: '', message: ''},
      
      isValid: true,

      lists: [
        { id: 0, isExpand: true }
      ]
    }
  },
  methods: {
    showConfirm(tit, msg, callback) {
      this.confirmModalParams = { isOpened: true, title: tit, message: msg, callback: callback};
    },
    showAlert(tit, msg) {
      this.alertModalParams = { isOpened: true, title: tit, message: msg};
    },
    doToggle(index) {
      this.lists[index].isExpand = !this.lists[index].isExpand;
    },
    doAddList() {
      this.lists.push({ id: this.lists.length, isExpand: true })
    },
    doCancel() {
      this.$router.back();
    },
    doValidate() {
      this.$refs.form.validate()
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
.container + .container {margin-top: 16px;}
</style>