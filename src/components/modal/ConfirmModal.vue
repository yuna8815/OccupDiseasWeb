<template>
  <v-dialog v-model="$props.params.isOpened" max-width="400">
    <v-card>
      <v-card-title class="pa-4 text-h6">
        {{ $props.params.title }}

        <v-btn
          icon
          @click="$props.params.isOpened = false">
            <x-icon size="24" class="text--text text--lighten-1"></x-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="px-4 pb-4 text-body-1">
        {{ $props.params.message }}
      </v-card-text>
      <v-card-actions class="pa-4 justify-center">
        <v-btn
          text
          color="primary"
          @click="doSubmit">
          확인
        </v-btn>
        <v-btn
          text
          class="text--text text--lighten-1"
          @click="$props.params.isOpened = false">
          취소
        </v-btn>
      </v-card-actions>
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
    doSubmit() {
      this.$props.params.isOpened = false;
      if(this.$props.params.callback) this.$props.params.callback();
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