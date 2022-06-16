<template>
  <v-container>
    <v-stepper v-model="e1" alt-labels class="transparent">
      <v-stepper-header class="text-subtitle-1">
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          약관 동의
        </v-stepper-step>
        <v-divider />
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          회원 정보
        </v-stepper-step>
        <v-divider />
        <v-stepper-step step="3">
          소속 정보
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="pa-0 pb-4 rounded-0">
            <v-card-title>약관 동의</v-card-title>
            <v-card-subtitle class="mt-0 pb-2">개인취급방침</v-card-subtitle>
            <v-card-text>
              <div class="px-3 py-4">1. 개인정보처리방침의 의의<br>
                네이버는 본 개인정보처리방침은 개인정보보호법을 기준으로 작성하되, 네이버 내에서의 이용자 개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해 노력하였습니다.<br>
                이는 쉬운 용어를 사용한 개인정보처리방침 작성 원칙인 ‘Plain Language Privacy Policy(쉬운 용어를 사용한 개인정보처리방침)’를 도입한 것입니다.<br>
                <br>
                ‘쉬운 용어를 사용한 개인정보처리방침 작성 체크리스트(영문)’ 바로가기<br>
                개인정보처리방침은 다음과 같은 중요한 의미를 가지고 있습니다.
              </div>
            </v-card-text>

            <v-card-subtitle class="mt-0 pb-2">이용약관</v-card-subtitle>
            <v-card-text>
              <div class="px-3 py-4">네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.<br>
              <br>
              네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다
              </div>
            </v-card-text>

            <v-checkbox
              v-model="isTerm"
              label="개인취급방침, 이용약관에 모두 동의합니다."
              hide-details
              class="mx-4 mt-2 pt-0"
            ></v-checkbox>
          </v-card>

          <div class="pa-8 d-flex align-center justify-center">
            <v-btn
              rounded
              outlined
              color="primary"
              class="mr-4"
              to="/auth/login"
            >
              취소
            </v-btn>
            <v-btn
              rounded
              depressed
              :disabled="!isTerm"
              color="primary"
              @click="e1 = 2"
            >
              확인
            </v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="pa-0 rounded-0">
            <v-card-title>회원 정보</v-card-title>
            <v-card-text>
              <v-form
                ref="joinForm"
                v-model="joinValid">
                <v-row>
                  <v-col cols="12">
                    <div class="d-flex align-sm-end flex-column flex-sm-row">
                      <div class="flex-grow-1 mr-4">
                        <v-subheader>아이디</v-subheader>
                        <v-text-field
                          placeholder="아이디"
                          outlined
                          :rules="[v => !!v]"
                          required
                          hide-details="auto" />
                      </div>
                      <v-btn
                        outlined
                        rounded
                        color="primary"
                        class="mt-6 mt-sm-0"
                        @click="doIdCheck"
                      >
                        중복 확인
                      </v-btn>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <v-subheader>비밀번호</v-subheader>
                    <v-text-field
                      placeholder="비밀번호"
                      outlined
                      :rules="[v => !!v || '6자 이상의 비밀번호를 사용해 주세요']"
                      required
                      hide-details="auto">
                      <template v-slot:message>
                        <div class="d-flex align-center">
                          <alert-triangle-icon size="16" class="text--text text--lighten-1 mr-1"></alert-triangle-icon>
                          6자 이상의 비밀번호를 사용해 주세요
                        </div>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-subheader>비밀번호 확인</v-subheader>
                    <v-text-field
                      placeholder="비밀번호 확인"
                      outlined
                      :rules="[v => !!v || '비밀번호가 일치하지 않습니다']"
                      required
                      hide-details="auto">
                      <template v-slot:message>
                        <div class="d-flex align-center">
                          <alert-triangle-icon size="16" class="text--text text--lighten-1 mr-1"></alert-triangle-icon>
                          비밀번호가 일치하지 않습니다
                        </div>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-subheader>이름</v-subheader>
                    <v-text-field
                      placeholder="이름"
                      outlined
                      :rules="[v => !!v]"
                      required
                      hide-details="auto" />
                  </v-col>
                  <v-col cols="12">
                    <v-subheader>전화번호</v-subheader>
                    <v-text-field
                      placeholder="전화번호"
                      outlined
                      :rules="[v => !!v]"
                      required
                      hide-details="auto"
                      v-mask="'###-####-####'" />
                  </v-col>
                  <v-col cols="12">
                    <v-subheader>이메일주소</v-subheader>
                    <v-text-field
                      placeholder="이메일 주소"
                      outlined
                      :rules="[v => !!v || '이메일 형식이 아닙니다']"
                      required
                      hide-details="auto">
                      <template v-slot:message>
                        <div class="d-flex align-center">
                          <alert-triangle-icon size="16" class="text--text text--lighten-1 mr-1"></alert-triangle-icon>
                          이메일 형식이 아닙니다
                        </div>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>

          <div class="pa-8 d-flex align-center justify-center">
            <v-btn
              outlined
              rounded
              color="primary"
              @click="e1 = 1"
              class="mr-4">
              이전으로
            </v-btn>

            <v-btn
              depressed
              rounded
              :disabled="!joinValid"
              color="primary"
              @click="e1 = 3"
            >
              소속 정보 입력
            </v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="pa-0 rounded-0">
            <v-card-title>소속 정보</v-card-title>
            <v-card-text>
              <v-form
                ref="orgForm"
                v-model="orgValid">
                <v-row>
                  <v-col cols="12">
                    <v-subheader>기관 종류</v-subheader>
                    <v-radio-group
                      v-model="orgGroup"
                      row
                      hide-details>
                      <v-radio
                        label="직업병 안심센터"
                        value="ORG_A"
                      />
                      <v-radio
                        label="협력병원"
                        value="ORG_B"
                      />
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12">
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
                  <v-col
                    v-if="orgGroup == 'ORG_B'"
                    cols="12"
                  >
                    <v-subheader>협력병원명</v-subheader>
                    <v-text-field
                      placeholder="협력병원명"
                      outlined
                      append-icon="mdi-magnify"
                      :rules="[v => !!v]"
                      required
                      hide-details="auto"
                      @click="orgModalParams.isOpened = true" />
                  </v-col>
                  <v-col cols="12">
                    <v-subheader>기관 주소</v-subheader>
                    <v-text-field
                      placeholder="기관 주소"
                      outlined
                      readonly
                      hide-details />
                  </v-col>
                  <v-col cols="12">
                    <v-subheader>소속과</v-subheader>
                    <v-text-field
                      placeholder="소속과"
                      outlined
                      :rules="[v => !!v]"
                      required
                      hide-details="auto" />
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>

          <div class="pa-8 d-flex align-center justify-center">
            <v-btn
              outlined
              rounded
              color="primary"
              @click="e1 = 2"
              class="mr-4">
              이전으로
            </v-btn>

            <v-btn
              depressed
              rounded
              :disabled="!orgValid"
              color="primary"
              @click="doSubmit">
              회원가입 완료
            </v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <AlertModal :params="alertModalParams"></AlertModal>
    <OrgListModal :params="orgModalParams"></OrgListModal>
  </v-container>
</template>

<script>
import { AlertTriangleIcon } from 'vue-feather-icons'
import AlertModal from '@/components/modal/AlertModal'
import OrgListModal from '@/components/modal/OrgListModal'

export default {
  name: 'SignupPage',
  components: {
    AlertTriangleIcon,
    AlertModal,
    OrgListModal
  },
  data() {
    return {
      alertModalParams: { isOpened: false, title: '', message: ''},
      orgModalParams: { isOpened: false },

      e1: 1,
      isTerm: false,

      joinValid: true,
      isIdChecked: false,

      orgValid: true,
      orgGroup: 'ORG_A',
      centerItems: ['직업병 안심센터 A', '직업병 안심센터 B', '직업병 안심센터 C', '직업병 안심센터 D']
    }
  },
  methods: {
    showAlert(tit, msg) {
      this.alertModalParams = { isOpened: true, title: tit, message: msg};
    },
    doIdCheck() {
      let _msg = '';

      if(this.isIdChecked) _msg = '해당 아이디는 사용 불가능합니다.';
      else _msg = '해당 아이디는 사용 가능합니다.';

      this.showAlert('중복 확인', _msg);
    },
    doSubmit() {
      this.$router.replace('/auth/login')
      // this.showAlert('회원가입 완료', '로그인하여 관리자페이지를 시작해보세요!');
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card__text > div {
  height: 220px;
  overflow-y: scroll;
  border: solid 1px var(--v-primary-lighten2);
  border-radius: 4px;
}
</style>