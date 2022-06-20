<template>
  <v-container class="py-8">
    <div class="d-sm-flex justify-space-between align-center pb-8">
      <div class="d-flex align-center">
        <h1 class="text-h5 mb-4 mb-sm-0">협력병원 관리</h1>
        <!-- 시스템관리자만 노출 -->
        <!-- <v-select
          outlined
          value="직업병 안심센터 A"
          :items="centerLists"
          hide-details
          class="ml-4 white" /> -->
      </div>

      <div class="d-flex d-sm-block justify-end">
        <v-btn
          :icon="$vuetify.breakpoint.xs"
          rounded
          outlined
          color="primary"
          class="mr-4"
          @click="doEdit('/settings/hospital-form', -1)">
          <span v-if="!$vuetify.breakpoint.xs">신규 등록</span>
          <edit-2-icon v-else size="20"></edit-2-icon>
        </v-btn>

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
      :footer-props="footerProps">
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
          @click="doEdit('/settings/hospital-form', item.id)">
          <edit-2-icon size="20"></edit-2-icon>
        </v-btn>
      </template>
    </v-data-table>

    <ConfirmModal :params="confirmModalParams" />
  </v-container>
</template>

<script>
import { TrashIcon, Edit2Icon } from 'vue-feather-icons'

import ConfirmModal from '@/components/modal/ConfirmModal'

export default {
  components: {
    TrashIcon,
    Edit2Icon,
    ConfirmModal
  },
  data() {
    return {
      confirmModalParams: { isOpened: false, title: '', message: '', callback: null},

      centerLists: ['직업병 안심센터 A', '직업병 안심센터 B', '직업병 안심센터 C'],

      selectedRows: [],
      footerProps: {
        'items-per-page-text': '리스트 개수 :',
        'page-text': 'Page {0} of {1}'
      },

      headers: [
        { text: '기관명', value: 'ORG_NAME' },
        { text: '기관 주소', value: 'ORG_ADDR' },
        { text: '담당자', value: 'ADMIN' },
        { text: '담당자 연락처', value: 'PHONE' },
        { text: '', value: 'ROWS_MENU', sortable: false, align: 'end', width: '135' }
      ],
      items: [
        { id: 0, ORG_NAME: '서울대학교병원', ORG_ADDR: '서울특별시 종로구 대학로 101', ADMIN: '홍길동', PHONE: '010-2345-6789' },
        { id: 1, ORG_NAME: '서울대학교병원', ORG_ADDR: '서울특별시 종로구 대학로 101', ADMIN: '홍길동', PHONE: '010-2345-6789' },
        { id: 2, ORG_NAME: '서울대학교병원', ORG_ADDR: '서울특별시 종로구 대학로 101', ADMIN: '홍길동', PHONE: '010-2345-6789' },
        { id: 3, ORG_NAME: '서울대학교병원', ORG_ADDR: '서울특별시 종로구 대학로 101', ADMIN: '홍길동', PHONE: '010-2345-6789' },
        { id: 4, ORG_NAME: '서울대학교병원', ORG_ADDR: '서울특별시 종로구 대학로 101', ADMIN: '홍길동', PHONE: '010-2345-6789' },
        { id: 5, ORG_NAME: '서울대학교병원', ORG_ADDR: '서울특별시 종로구 대학로 101', ADMIN: '홍길동', PHONE: '010-2345-6789' },
      ]
    }
  },
  methods: {
    showConfirm(tit, msg, callback) {
      this.confirmModalParams = { isOpened: true, title: tit, message: msg, callback: callback};
    },
    doSelectedRowsDelete() {
      this.showConfirm('선택 삭제', '선택한 목록을 삭제하시겠습니까?', null);
    },
    doDelete() {
      this.showConfirm('삭제', '목록을 삭제하시겠습니까?', null);
    },
    doEdit(router, id) {
      this.$router.push(router + '/' + id)
      console.log('페이지 이동')
    }
  }
}
</script>