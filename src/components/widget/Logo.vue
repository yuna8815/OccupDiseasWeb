<template>
  <!-- 추후 로고 이미지로 변경 -->
  <v-skeleton-loader
    :width="$props.width"
    :height="$props.height"
    type="image" />
</template>

<script>
export default {
  name: 'LogoWidget',
  props: {
    width: {
			type: Number,
			defatul: 24
    },
    height: {
			type: Number,
			defatul: 24
    }
  }
}
</script>