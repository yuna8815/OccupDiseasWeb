<template>
  <v-container class="py-8">
    <div class="d-sm-flex justify-space-between pb-8">
      <h1 class="text-h5 mb-4">직업병 의심 사례 협진 의뢰</h1>
      
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

    <v-form class="white pa-4">
      <v-container>
        <v-row>
          <v-col>
            <v-subheader>의뢰번호</v-subheader>
            <v-text-field
              outlined
              placeholder="의뢰번호"
              :rules="[v => !!v]"
              required
              hide-details
              />
          </v-col>
          <v-col>
            <v-subheader>병원등록번호</v-subheader>
            <v-text-field
              outlined
              placeholder="병원등록번호"
              :rules="[v => !!v]"
              required
              hide-details
              />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-subheader>환자이름</v-subheader>
            <v-text-field
              outlined
              placeholder="환자이름"
              :rules="[v => !!v]"
              required
              hide-details
              />
          </v-col>
          <v-col>
            <v-subheader>주민등록번호</v-subheader>
            <v-text-field
              outlined
              placeholder="주민등록번호"
              :rules="[v => !!v]"
              required
              hide-details
              />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-subheader>환자 주소</v-subheader>
            <v-text-field
              outlined
              placeholder="환자주소"
              :rules="[v => !!v]"
              required
              hide-details
              />
          </v-col>
          <v-col>
            <v-subheader>휴대폰 번호</v-subheader>
            <v-text-field
              outlined
              placeholder="휴대폰 번호"
              :rules="[v => !!v]"
              required
              hide-details
              />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-subheader>직업 또는 회사명</v-subheader>
            <v-text-field
              outlined
              placeholder="직업 또는 회사명"
              :rules="[v => !!v]"
              required
              hide-details
              />
          </v-col>
          <v-col>
            <v-subheader>사업장 주소</v-subheader>
            <v-text-field
              outlined
              placeholder="사업장 주소"
              :rules="[v => !!v]"
              required
              hide-details
              />
          </v-col>
        </v-row>
        <v-row><v-col><v-divider /></v-col></v-row>
        <v-row>
          <v-col><p class="text-h6 ma-0">진단</p></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-subheader>진단 분류</v-subheader>
            <v-radio-group
              v-model="radioGroup"
              row>
              <v-radio
                v-for="(item, index) in diagnosticGroup"
                :key="index"
                :label="item"
                :value="index"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import { DownloadIcon, SaveIcon } from 'vue-feather-icons'

export default {
  components: {
    DownloadIcon,
    SaveIcon
  },
  data() {
    return {
      diagnosticGroup: ['임상적 추적', '최종 진단']
    }
  }
}
</script>