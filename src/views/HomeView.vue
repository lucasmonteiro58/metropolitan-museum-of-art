<script setup lang="ts">
import { useTimeout } from '@vueuse/core'
const showLoadingScreen = ref<Boolean>(true)

function onLoaded() {
  const ready = useTimeout(2000)
  if (ready) showLoadingScreen.value = false
}
</script>

<template>
  <LoadingScreen v-if="showLoadingScreen" />
  <BackgroundVideo v-show="!showLoadingScreen" @loaded="onLoaded" />
  <IconLogo class="absolute text-white left-5 top-8 sm:left-16 sm:top-16 select-none"></IconLogo>
  <div class="absolute right-5 top-8 flex flex-col items-end sm:right-14 sm:top-48 select-none">
    <div class="text-white uppercase w-40 text-right">Drag your screen to explore</div>
    <img class="w-24" src="/assets/img/drag.gif" alt="Image drag" />
  </div>

  <div class="w-[813px] absolute bottom-12 left-14 select-none">
    <h1 class="text-white font-neue-medium text-9xl">Welcome to the Met.</h1>
    <div
      class="py-5 px-16 bg-white font-neue-medium rounded-full text-2xl mt-5 flex items-center justify-center"
    >
      <span>Search</span>
      <IconSearchAnimated class="inline-block ml-3" />
    </div>
  </div>
</template>
