<template>
  <v-container class="py-8">
    <div class="d-sm-flex justify-space-between align-center pb-8">
      <h1 class="text-h5 mb-4 mb-sm-0">의료진 관리</h1>

      <div class="d-flex d-sm-block justify-end">
        <v-btn
          :icon="$vuetify.breakpoint.xs"
          :disabled="selectedRows.length < 1"
          rounded
          outlined
          color="primary"
          class="mr-4"
          @click="doNotApproval">
          <span v-if="!$vuetify.breakpoint.xs">선택 일괄 미승인</span>
          <user-minus-icon v-else size="20"></user-minus-icon>
        </v-btn>

        <v-btn
          :fab="$vuetify.breakpoint.xs"
          :disabled="selectedRows.length < 1"
          depressed
          rounded
          color="primary"
          @click="doApproval">
          <span v-if="!$vuetify.breakpoint.xs">선택 일괄 승인</span>
          <user-check-icon v-else size="20"></user-check-icon>
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
      <template v-slot:[`item.AUTH`]="{ item }">
        <v-chip
          label
          class="primary--text gray darken-2">
          {{ item.AUTH }}
        </v-chip>
      </template>
      <template v-slot:[`item.STATUS`]="{ item }">
        <v-chip
          label
          outlined
          color="primary">
          {{ item.STATUS }}
        </v-chip>
      </template>
      <template v-slot:[`item.ROWS_MENU`]="{ item }">
        <v-btn
          icon
          small
          class="mx-2 text--text text--lighten-1"
          @click="doEdit('/settings/user-form', item.id)">
          <edit-2-icon size="20"></edit-2-icon>
        </v-btn>
      </template>
    </v-data-table>

    <ConfirmModal :params="confirmModalParams" />
  </v-container>
</template>

<script>
import { UserCheckIcon, UserMinusIcon, Edit2Icon } from 'vue-feather-icons'

import ConfirmModal from '@/components/modal/ConfirmModal'

export default {
  components: {
    UserCheckIcon,
    UserMinusIcon,
    Edit2Icon,
    ConfirmModal
  },
  data() {
    return {
      confirmModalParams: { isOpened: false, title: '', message: '', callback: null},

      selectedRows: [],
      footerProps: {
        'items-per-page-text': '리스트 개수 :',
        'page-text': 'Page {0} of {1}'
      },

      headers: [
        { text: '소속', value: 'ORG_ID' },
        { text: '이름', value: 'NAME' },
        { text: '권한', value: 'AUTH' },
        { text: '마지막 접속일자', value: 'LAST_DATE' },
        { text: '계정 상태', value: 'STATUS'},
        { text: '', value: 'ROWS_MENU', sortable: false, align: 'end' }
      ],
      items: [
        { id: 0, ORG_ID: '서울대학교병원', NAME: '홍길동 (치과)', AUTH: '안심센터 관리자', LAST_DATE: '2022-01-01', STATUS: '승인' },
        { id: 1, ORG_ID: '서울대학교병원', NAME: '홍길동 (치과)', AUTH: '협력병원 관리자', LAST_DATE: '2022-01-01', STATUS: '승인' },
        { id: 2, ORG_ID: '서울대학교병원', NAME: '홍길동 (치과)', AUTH: '안심센터 의료진', LAST_DATE: '2022-01-01', STATUS: '승인' },
        { id: 3, ORG_ID: '서울대학교병원', NAME: '홍길동 (치과)', AUTH: '안심센터 의료진', LAST_DATE: '2022-01-01', STATUS: '미승인' },
        { id: 4, ORG_ID: '서울대학교병원', NAME: '홍길동 (치과)', AUTH: '협력병원 의료진', LAST_DATE: '2022-01-01', STATUS: '미승인' },
        { id: 5, ORG_ID: '서울대학교병원', NAME: '홍길동 (치과)', AUTH: '협력병원 의료진', LAST_DATE: '2022-01-01', STATUS: '승인' },
        { id: 6, ORG_ID: '서울대학교병원', NAME: '홍길동 (치과)', AUTH: '협력병원 의료진', LAST_DATE: '2022-01-01', STATUS: '승인' },
      ]
    }
  },
  methods: {
    showConfirm(tit, msg, callback) {
      this.confirmModalParams = { isOpened: true, title: tit, message: msg, callback: callback};
    },
    doNotApproval() {
      this.showConfirm('선택 일괄 미승인', '선택한 의료진을 일괄 미승인 처리하시겠습니까?', null);
    },
    doApproval() {
      this.showConfirm('선택 일괄 승인', '선택한 의료진을 일괄 승인 처리하시겠습니까?', null);
    },
    doEdit(router, id) {
      this.$router.push(router + '/' + id)
      console.log('페이지 이동')
    }
  }
}
</script>