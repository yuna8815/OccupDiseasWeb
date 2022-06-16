<template>
  <v-dialog v-model="$props.params.isOpened" max-width="400">
    <v-card>
      <v-card-title class="pa-4 text-h6">
        모바일 서명

        <v-btn
          icon
          @click="doModalClose">
            <x-icon size="24" class="text--text text--lighten-1"></x-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="px-4 text-body-1">
        아래의 QR코드를 모바일로 촬영하여 서명하세요.
      </v-card-text>
      <v-card-text class="pb-0">
        <v-img 
          max-width="150"
          max-height="150"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png"
          class="mx-auto" />
      </v-card-text>
      <!-- <v-card-actions class="pa-4 justify-center">
        <v-btn
          text
          color="primary"
          @click="doModalClose">
          확인
        </v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
  props: {
    params: Object
  },
  components: {
    XIcon
  },
  methods: {
    doModalClose() {
      this.$props.params.isOpened = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card__title {
  position: relative;
  z-index: 0;

  .v-btn {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.v-card__text {
  white-space: pre-line;
}
</style>