<template>
  <v-container class="py-8">
    <div class="d-sm-flex justify-space-between align-center pb-8">
      <h1 class="text-h5 mb-4 mb-sm-0">직업병 질병 업무관련성 평가서</h1>
      
      <div class="d-flex d-sm-block justify-end">
        <v-btn
          :icon="$vuetify.breakpoint.xs"
          outlined
          rounded
          color="primary"
          class="mr-4">
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
            <v-subheader>평가서 번호</v-subheader>
            <v-text-field
              outlined
              placeholder="평가서 번호"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>환자이름</v-subheader>
            <v-text-field
              outlined
              placeholder="환자이름"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
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
            <v-subheader>주민등록번호</v-subheader>
            <v-text-field
              v-mask="'######-#######'"
              outlined
              placeholder="주민등록번호"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
        </v-row>
        <v-row><v-col><v-divider /></v-col></v-row>
        <v-row>
          <v-col cols="12" class="text-h6">사업장 정보</v-col>

          <v-col cols="12" md="4">
            <v-subheader>소속사업장 이름</v-subheader>
            <v-text-field
              outlined
              placeholder="소속사업장 이름"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12" md="8">
            <v-subheader>사업장 주소</v-subheader>
            <div class="d-flex flex-column flex-sm-row">
              <v-text-field
                outlined
                placeholder="도로명 주소"
                append-icon="mdi-magnify"
                :rules="[v => !!v]"
                required
                hide-details
                class="mb-4 mb-sm-0 mr-sm-3"
                style="flex: 1;"
                @click="isPostcodeOpen = true" />
              <v-text-field
                outlined
                placeholder="상세 주소"
                :rules="[v => !!v]"
                required
                hide-details
                class="ml-0 ml-sm-3"
                style="flex: 1;" />
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <v-subheader>실제 근무사업장</v-subheader>
            <v-text-field
              outlined
              placeholder="실제 근무사업장"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12" md="8">
            <v-subheader>근무지 주소</v-subheader>
            <div class="d-flex flex-column flex-sm-row">
              <v-text-field
                outlined
                placeholder="도로명 주소"
                append-icon="mdi-magnify"
                :rules="[v => !!v]"
                required
                hide-details
                class="mb-4 mb-sm-0 mr-sm-3"
                style="flex: 1;"
                @click="isPostcodeOpen = true" />
              <v-text-field
                outlined
                placeholder="상세 주소"
                :rules="[v => !!v]"
                required
                hide-details
                class="ml-0 ml-sm-3"
                style="flex: 1;" />
            </div>
          </v-col>
        </v-row>
        <v-row><v-col><v-divider /></v-col></v-row>
        <v-row>
          <v-col cols="12" class="text-h6">업무관련성평가 의뢰 경로</v-col>
          <v-col>
            <v-radio-group
              v-model="requestPath"
              column
              :rules="[v => !!v]"
              hide-details
              class="mt-0 pt-0">
              <v-radio
                value="A"
                class="align-start">
                <template v-slot:label>
                  <div class="flex-grow-1">
                    <p class="mb-2">서울 지역 직업병 안심센터</p>
                    <v-radio-group
                      v-if="requestPath == 'A'"
                      row
                      :rules="[v => !!v]"
                      hide-details
                      class="mt-0 py-3">
                      <v-radio
                        label="응급실"
                        value="A" />
                      <v-radio
                        label="임상진료과"
                        value="B" />
                    </v-radio-group>
                  </div>
                </template>
              </v-radio>
              <v-radio
                value="B"
                class="align-start">
                <template v-slot:label>
                  <div class="flex-grow-1">
                    <p class="mb-2">서울 지역 직업병 안심센터 협력병원</p>
                    <v-row v-if="requestPath == 'B'">
                      <v-col cols="12" sm="4">
                      <v-text-field
                        outlined
                        placeholder="병원명"
                        :rules="[v => !!v]"
                        required
                        hide-details />
                      </v-col>
                      <v-col cols="12" sm="4">
                      <v-text-field
                        outlined
                        placeholder="소속과"
                        :rules="[v => !!v]"
                        required
                        hide-details />
                      </v-col>
                      <v-col>
                      <v-text-field
                        :disabled="requestPath != 'B'"
                        outlined
                        placeholder="담당의사"
                        :rules="[v => !!v]"
                        required
                        hide-details />
                      </v-col>
                    </v-row>
                  </div>
                </template>
              </v-radio>
              <v-radio value="C" class="align-start">
                <template v-slot:label>
                  <div class="flex-grow-1">
                    <p class="mb-2">고용노동청 산재예방지도과</p>
                    <v-row v-if="requestPath == 'C'">
                      <v-col cols="12" sm="4">
                        <v-text-field
                          outlined
                          placeholder="ex) 서울"
                          suffix="지방"
                          :rules="[v => !!v]"
                          required
                          hide-details />
                      </v-col>
                      <v-col sm="4">
                        <v-text-field
                          outlined
                          placeholder="담당자"
                          :rules="[v => !!v]"
                          required
                          hide-details />
                      </v-col>
                    </v-row>
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
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
          <v-col cols="6">
            <v-subheader>발병일</v-subheader>
            <v-text-field
              v-mask="'####-##-##'"
              outlined
              placeholder="YYYY-MM-DD"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>진단일</v-subheader>
            <v-text-field
              v-mask="'####-##-##'"
              outlined
              placeholder="YYYY-MM-DD"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col cols="12">
            <v-subheader>경위</v-subheader>
            <v-textarea
              outlined
              placeholder="필요 시 내용을 입력해 주세요"
              hide-details />
          </v-col>
          <v-col cols="12">
            <v-subheader>병력 및 검사 소견</v-subheader>
            <v-textarea
              outlined
              :rules="[v => !!v]"
              placeholder="내용을 입력해 주세요"
              hide-details />
          </v-col>
        </v-row>
        <v-row><v-col><v-divider /></v-col></v-row>
        <v-row>
          <v-col cols="12" class="text-h6">업무관련성 평가</v-col>
          <v-col>
            <v-subheader>현장조사 수행</v-subheader>
            <v-radio-group
              v-model="onSite"
              :row="!$vuetify.breakpoint.xs"
              :rules="[v => !!v]"
              hide-details>
              <v-radio
                label="아니오"
                value="N" />
              <v-radio
                value="Y"
                class="align-start align-sm-center mt-3 mt-sm-0">
                <template v-slot:label>
                  <v-row>
                    <v-col cols="12" sm="6" class="d-sm-flex align-center">
                      예
                      <v-text-field
                        v-if="onSite == 'Y'"
                        outlined
                        v-mask="'####-##-##'"
                        placeholder="YYYY-MM-DD"
                        prefix="조사일 : "
                        :rules="[v => !!v]"
                        required
                        hide-details
                        class="mt-2 mt-sm-0 ml-sm-3" />
                    </v-col>
                    <v-col v-if="onSite == 'Y'" cols="12" sm="6">
                      <v-text-field
                        outlined
                        placeholder="참여자"
                        :rules="[v => !!v]"
                        required
                        hide-details />
                    </v-col>
                  </v-row>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row
          v-for="(list, index) in diseaseHazardList"
          :key="index">
          <v-col cols="12" sm="6">
            <v-subheader>질병 관련 유해인자</v-subheader>
            <v-text-field
              outlined
              placeholder="질병 관련 유해인자"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>근거 수준</v-subheader>
            <v-radio-group
              row
              :rules="[v => !!v]"
              hide-details>
              <v-radio
                label="확실"
                value="A" />
              <v-radio
                label="제한적"
                value="B" />
              <v-radio
                label="사례보고 수준"
                value="C" />
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              outlined
              rounded
              color="primary"
              @click="doAddDiseaseHazrdList">
              추가
            </v-btn>
            <v-btn
              :disabled="diseaseHazardList.length < 2"
              depressed
              rounded
              color="primary"
              class="ml-4"
              @click="doRemoveDiseaseHazrdList">
              삭제
            </v-btn>
          </v-col>
        </v-row>
        <v-row><v-col><v-divider /></v-col></v-row>
        <v-row
          v-for="(list, index) in exposureHazardList"
          :key="index">
          <v-col cols="12" sm="6">
            <v-subheader>노출 유해인자</v-subheader>
            <v-text-field
              outlined
              placeholder="노출 유해인자"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>노출 수준</v-subheader>
            <v-radio-group
              row
              :rules="[v => !!v]"
              hide-details>
              <v-radio
                label="충분(높음)"
                value="A" />
              <v-radio
                label="제한적(낮음)"
                value="B" />
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              outlined
              rounded
              color="primary"
              @click="doAddExposureHazardList">
              추가
            </v-btn>
            <v-btn
              :disabled="diseaseHazardList.length < 2"
              depressed
              rounded
              color="primary"
              class="ml-4"
              @click="doRemoveExposureHazardList">
              삭제
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-subheader>업무관련성 소견</v-subheader>
            <v-textarea
              outlined
              placeholder="필요시 내용을 입력해 주세요"
              hide-details />
          </v-col>
        </v-row>
        <v-row><v-col><v-divider /></v-col></v-row>
        <v-row>
          <v-col cols="12" class="text-h6">업무관련성 평가 결과</v-col>
          <v-col>
            <v-radio-group
              row
              :rules="[v => !!v]"
              hide-details
              class="mt-0 pt-0">
              <v-radio label="확실 (Definite)" value="A" />
              <v-radio label="가능성 높음 (Probible)" value="B" />
              <v-radio label="가능성 있음 (Possible)" value="C" />
              <v-radio label="가능성 낮음 (Unlikely)" value="D" />
            </v-radio-group>
          </v-col>
          <v-col cols="12" v-if="requestPath == 'C'">
            <v-subheader>예방가능성에 대한 소견</v-subheader>
            <v-textarea
              outlined
              hide-details
              placeholder="진단명과 발생경위를 종합적으로 고려하여 기재해 주세요" />
          </v-col>
        </v-row>
        <v-row><v-col><v-divider /></v-col></v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-subheader>작성일자</v-subheader>
            <v-text-field
              outlined
              v-mask="'####-##-##'"
              placeholder="YYYY-MM-DD"
              :rules="[v => !!v]"
              required
              hide-details />
          </v-col>
          <v-col>
            <v-subheader>요청자</v-subheader>
            <div class="d-flex">
              <v-text-field
                outlined
                placeholder="요청자"
                hide-details />
              <v-btn
                v-if="!$vuetify.breakpoint.mobile && requestPath == 'C'"
                outlined
                rounded
                color="primary"
                class="ml-4"
                @click="openQrcode">
                서명
              </v-btn>
            </div>
            <canvas
              v-if="$vuetify.breakpoint.mobile && requestPath == 'C'"
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
  </v-container>
</template>

<script>
import { DownloadIcon, SaveIcon } from 'vue-feather-icons'
import { VueDaumPostcode } from "vue-daum-postcode"
import QrcodeModal from "@/components/modal/QrcodeModal"
import UserListModal from "@/components/modal/UserListModal"

export default {
  components: {
    DownloadIcon,
    SaveIcon,
    VueDaumPostcode,
    QrcodeModal,
    UserListModal
  },
  data() {
    return {
      isPostcodeOpen: false,
      isUserListOpen: false,
      qrcodeModalParams: { isOpened: false },

      isValid: true,
      requestPath: null,
      onSite: null,

      diagnosticGroup: ['임상적 추정', '최종 진단'],
      diagnosticList: [
        { category: null, name: null, code: null }
      ],
      diseaseHazardList: [
        { name: null, level: null }
      ],
      exposureHazardList: [
        { name: null, level: null }
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
    doAddDiseaseHazrdList() {
      this.diseaseHazardList.push({ name: null, level: null })
    },
    doRemoveDiseaseHazrdList() {
      this.diseaseHazardList.pop()
    },
    doAddExposureHazardList() {
      this.exposureHazardList.push({ name: null, level: null })
    },
    doRemoveExposureHazardList() {
      this.exposureHazardList.pop()
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