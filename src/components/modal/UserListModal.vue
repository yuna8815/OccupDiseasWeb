<template>
  <v-dialog
    v-model="$props.params.isUserListOpen"
    max-width="400"
    :scrollable="true">
    <v-card>
      <v-card-title class="pa-4 text-body-2">
        <v-text-field
          placeholder="이름을 입력해 주세요"
          outlined
          append-icon="mdi-magnify"
          hide-details />
      </v-card-title>
      <v-card-text class="px-4 pb-4 text-body-1">
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-content class="justify-space-between">
              <v-list-item-title class="mb-1 text-body-2">{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption">{{ item.org }} | {{ item.dept }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-card-text>
      <v-card-actions class="pa-4 justify-center">
        <v-btn
          rounded
          outlined
          color="primary"
          class="mr-4"
          @click="doModalClose">
          취소
        </v-btn>
        <v-btn
          :disabled="selectedItem == null"
          depressed
          rounded
          color="primary"
          @click="doModalClose">
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    params: Object
  },
  data() {
    return {
      selectedItem: null,
      items: [
        { name: '홍길동', org: '서울대학교병원', dept: '치과' },
        { name: '홍길동', org: '서울대학교병원', dept: '치과' },
        { name: '홍길동', org: '서울대학교병원', dept: '치과' },
        { name: '홍길동', org: '서울대학교병원', dept: '치과' },
        { name: '홍길동', org: '서울대학교병원', dept: '치과' },
        { name: '홍길동', org: '서울대학교병원', dept: '치과' },
        { name: '홍길동', org: '서울대학교병원', dept: '치과' },
        { name: '홍길동', org: '서울대학교병원', dept: '치과' },
        { name: '홍길동', org: '서울대학교병원', dept: '치과' },
      ]
    }
  },
  methods: {
    doModalClose() {
      this.$props.params.isUserListOpen = false;
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

.v-list-item {
  border-bottom: solid 1px var(--v-gray-darken2);
}

.v-list-item__title,
.v-list-item__subtitle {
  flex: 1 !important;
}
</style>