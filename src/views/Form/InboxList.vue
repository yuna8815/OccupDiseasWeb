<template>
  <v-container class="py-8">
    <div class="d-sm-flex justify-space-between align-center pb-8">
      <h1 class="text-h5 mb-4 mb-sm-0">내가 작성한 서식 목록</h1>
      
      <div class="d-flex d-sm-block justify-end">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :icon="$vuetify.breakpoint.xs"
              rounded
              outlined
              color="primary"
              v-bind="attrs"
              v-on="on">
              <span v-if="!$vuetify.breakpoint.xs">새로 작성하기</span>
              <edit-2-icon v-else size="20"></edit-2-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(menu, index) in newMenus"
              :key="index"
              @click="goPage(menu.router)"
            >
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
              <v-list-item-icon>
                <chevron-right-icon size="20" class="text--text text--lighten-1"></chevron-right-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :fab="$vuetify.breakpoint.xs"
              :disabled="selectedRows.length < 1"
              depressed
              rounded
              color="primary"
              class="mx-4"
              v-bind="attrs"
              v-on="on">
              <span v-if="!$vuetify.breakpoint.xs">상태 변경</span>
              <more-horizontal-icon v-else size="20"></more-horizontal-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(menu, index) in statusMenus"
              :key="index"
            >
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          :fab="$vuetify.breakpoint.xs"
          :disabled="selectedRows.length < 1"
          depressed
          rounded
          color="primary"
          @click="doSelectedRowsDelete">
          <span v-if="!$vuetify.breakpoint.xs">선택 삭제</span>
          <trash-icon v-else size="20"></trash-icon>
        </v-btn>
      </div>
    </div>

    <v-data-table
      v-model="selectedRows"
      :headers="headers"
      :items="items"
      show-select
      checkbox-color="primary"
      no-data-text="“새로 작성하기”를 클릭하여 서식을 작성해 주세요"
      :footer-props="footerProps">
      <template v-slot:[`header.STATE`]="{ header }">
        {{ header.text }}

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <help-circle-icon 
              v-bind="attrs"
              v-on="on"
              size="20"
              class="ml-2 mb-n1 text--text text--lighten-1"/>
          </template>

          <div class="text-body-2">
            작성 완료 : 서식 작성만 해놓은 상태<br>
            서명 요청 : 전공의가 전문의에 서명 요청<br>
            서명 완료 : 전문의 서명 완료<br>
            서식 공유 : 전문의 서명 후 안심센터에 서식 전달<br>
            공유 취소 : 안심센터에 전달된 서식 회수<br>
            서식 열람 : 안심센터 의료진이 공유된 서식을 열람
          </div>
        </v-tooltip>
      </template>
      <template v-slot:[`item.STATE`]="{ item }">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-chip
              v-bind="attrs"
              v-on="on"
              label
              class="primary--text gray darken-2">
              {{ item.STATE }}
            </v-chip>
          </template>
          <span>공유일자 : 2022-01-01 13:05</span>
        </v-tooltip>
      </template>
      <template v-slot:[`item.ROWS_MENU`]="{ item }">
        <v-btn
          icon
          small
          class="text--text text--lighten-1"
          @click="doDelete">
          <trash-icon size="20"></trash-icon>
        </v-btn>
        <v-btn
          icon
          small
          class="mx-2 text--text text--lighten-1"
          @click="doEdit(item.router, item.id)">
          <edit-2-icon size="20"></edit-2-icon>
        </v-btn>
        <v-btn
          icon
          small
          class="text--text text--lighten-1"
          @click="doDownload">
          <download-icon size="20"></download-icon>
        </v-btn>
      </template>
    </v-data-table>

    <!-- <div class="text-body-2 mt-8">
      &#8226; 작성 완료 : 서식 작성만 해놓은 상태<br>
      &#8226; 서명 요청 : 전공의가 전문의에 서명 요청<br>
      &#8226; 서명 완료 : 전문의 서명 완료<br>
      &#8226; 서식 공유 : 전문의 서명 후 안심센터에 서식 전달<br>
      &#8226; 공유 취소 : 안심센터에 전달된 서식 회수<br>
      &#8226; 서식 열람 : 안심센터 의료진이 공유된 서식을 열람
    </div> -->

    <ConfirmModal :params="confirmModalParams" />

    <v-snackbar
      v-model="snackbarParams.isOpened"
      rounded="pill"
      elevation="0">
      <check-circle-icon size="20" class="mr-4"></check-circle-icon>
      {{ snackbarParams.message }}
    </v-snackbar>
  </v-container>
</template>

<script>
import { TrashIcon, Edit2Icon, DownloadIcon, ChevronRightIcon, MoreHorizontalIcon, CheckCircleIcon, HelpCircleIcon } from 'vue-feather-icons'

import ConfirmModal from '@/components/modal/ConfirmModal'

export default {
  components: {
    TrashIcon,
    Edit2Icon,
    DownloadIcon,
    ChevronRightIcon,
    MoreHorizontalIcon,
    CheckCircleIcon,
    HelpCircleIcon,
    ConfirmModal
  },
  data() {
    return {
      confirmModalParams: { isOpened: false, title: '', message: '', callback: null},
      snackbarParams: { isOpened: false, message: ''},

      selectedRows: [],
      footerProps: {
        'items-per-page-text': '리스트 개수 :',
        'page-text': 'Page {0} of {1}'
      },

      newMenus: [
        { title: '직업병 의심 사례 협진 의뢰', router: '/form/request/-1' },
        { title: '직업병 질병 업무관련성 평가서', router: '/form/assessment/-1' },
        { title: '직업병 질병 모니터링 조사항목', router: '/form/monitoring/-1' },
      ],
      statusMenus: [
        { title: '선택한 서식 서명 요청' },
        { title: '선택한 서식 공유' },
        { title: '선택한 서식 공유 취소' },
      ],

      headers: [
        { text: '서식명', value: 'FILE_NAME' },
        { text: '환자명', value: 'PATIENT_NAME' },
        { text: '의뢰일자', value: 'DATE' },
        { text: '상태', value: 'STATE' },
        { text: '', value: 'ROWS_MENU', sortable: false, align: 'end', width: '135' },
      ],
      items: [
        {
          id: 0,
          FILE_NAME: '직업병 의심 사례 협진 의뢰',
          PATIENT_NAME: '김환자 (여/33세)',
          DATE: '2022-01-01',
          STATE: '서명 요청',
          router: '/form/request'
        },
        {
          id: 1,
          FILE_NAME: '직업병 질병 업무관련성 평가서',
          PATIENT_NAME: '김환자 (여/33세)',
          DATE: '2022-01-01',
          STATE: '작성 완료',
          router: '/form/assessment'
        },
        {
          id: 2,
          FILE_NAME: '직업병 질병 업무관련성 평가서',
          PATIENT_NAME: '김환자 (여/33세)',
          DATE: '2022-01-01',
          STATE: '작성 완료',
          router: '/form/assessment'
        },
        {
          id: 3,
          FILE_NAME: '직업병 질병 모니터링 조사항목',
          PATIENT_NAME: '김환자 (여/33세)',
          DATE: '2022-01-01',
          STATE: '작성 완료',
          router: '/form/monitoring'
        },
        {
          id: 4,
          FILE_NAME: '직업병 질병 업무관련성 평가서',
          PATIENT_NAME: '김환자 (여/33세)',
          DATE: '2022-01-01',
          STATE: '작성 완료',
          router: '/form/assessment'
        },
        {
          id: 6,
          FILE_NAME: '직업병 질병 업무관련성 평가서',
          PATIENT_NAME: '김환자 (여/33세)',
          DATE: '2022-01-01',
          STATE: '작성 완료',
          router: '/form/assessment'
        }
      ]
    }
  },
  methods: {
    showConfirm(tit, msg, callback) {
      this.confirmModalParams = { isOpened: true, title: tit, message: msg, callback: callback};
    },
    showSnackbar(msg) {
      this.snackbarParams = { isOpened: true, message: msg }
    },
    doSelectedRowsDelete() {
      this.showConfirm('선택 삭제', '선택한 목록을 삭제하시겠습니까?', null);
    },
    doDelete() {
      this.showConfirm('삭제', '목록을 삭제하시겠습니까?', null);
    },
    doEdit(router, id) {
      this.$router.push(router + '/' + id)
    },
    doDownload() {
      console.log('파일 다운로드')
    },
    goPage(router) {
      // 임시 저장된 데이터가 있을 경우
      const _temp = false;

      if(_temp) {
        this.showConfirm('임시 저장 불러오기', '임시 저장된 내용이 있습니다.\r\n이어서 작성하시겠습니까?', null)
        return;
      }

      this.$router.push(router)
    }
  }
}
</script>