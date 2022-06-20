<template>
  <v-container class="py-8">
    <div class="d-sm-flex justify-space-between align-center pb-8">
      <h1 class="text-h5 mb-4 mb-sm-0">의뢰된 서식 목록</h1>
      
      <div class="d-flex d-sm-block justify-end">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :fab="$vuetify.breakpoint.xs"
              :disabled="selectedRows.length < 1"
              depressed
              rounded
              color="primary"
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
      </div>
    </div>

    <v-data-table
      v-model="selectedRows"
      :headers="headers"
      :items="items"
      show-select
      checkbox-color="primary"
      :footer-props="footerProps">
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
          <span>열람일자 : 2022-01-01 13:05</span>
        </v-tooltip>
      </template>
      <template v-slot:[`item.ROWS_MENU`]="{ item }">
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
import { Edit2Icon, DownloadIcon, MoreHorizontalIcon, CheckCircleIcon } from 'vue-feather-icons'

import ConfirmModal from '@/components/modal/ConfirmModal'

export default {
  components: {
    Edit2Icon,
    DownloadIcon,
    MoreHorizontalIcon,
    CheckCircleIcon,
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

      statusMenus: [
        // { title: '선택한 서식 다운로드' },
        { title: '선택한 서식 공유' },
        { title: '선택한 서식 공유 취소' },
      ],

      headers: [
        { text: '서식명', value: 'FILE_NAME' },
        { text: '환자명', value: 'PATIENT_NAME' },
        { text: '의뢰일자', value: 'DATE' },
        { text: '요청자', value: 'REQUEST_NAME' },
        { text: '상태', value: 'STATE' },
        { text: '', value: 'ROWS_MENU', sortable: false, align: 'end', width: '105' },
      ],
      items: [
        {
          id: 0,
          FILE_NAME: '직업병 의심 사례 협진 의뢰',
          PATIENT_NAME: '김환자 (여/33세)',
          DATE: '2022-01-01',
          REQUEST_NAME: '홍길동 (서울대학교병원)',
          STATE: '열람',
          router: '/form/request'
        },
        {
          id: 1,
          FILE_NAME: '직업병 의심 사례 협진 의뢰',
          PATIENT_NAME: '김환자 (여/33세)',
          DATE: '2022-01-01',
          REQUEST_NAME: '홍길동 (서울대학교병원)',
          STATE: '대기',
          router: '/form/request'
        },
        {
          id: 2,
          FILE_NAME: '직업병 의심 사례 협진 의뢰',
          PATIENT_NAME: '김환자 (여/33세)',
          DATE: '2022-01-01',
          REQUEST_NAME: '홍길동 (서울대학교병원)',
          STATE: '열람',
          router: '/form/request'
        },
        {
          id: 3,
          FILE_NAME: '직업병 의심 사례 협진 의뢰',
          PATIENT_NAME: '김환자 (여/33세)',
          DATE: '2022-01-01',
          REQUEST_NAME: '홍길동 (서울대학교병원)',
          STATE: '열람',
          router: '/form/request'
        },
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
    doEdit(router, id) {
      this.$router.push(router + '/' + id)
      console.log('페이지 이동')
    },
    doDownload() {
      console.log('파일 다운로드')
    }
  }
}
</script>