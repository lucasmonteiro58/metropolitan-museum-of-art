<script setup lang="ts">
const showLoadingScreen = ref<Boolean>(true)
</script>

<template>
  <LoadingScreen v-if="showLoadingScreen" />
  <BackgroundVideo v-show="!showLoadingScreen" @loaded="showLoadingScreen = false" />
</template>
