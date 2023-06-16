<script setup lang="ts">
import { useTimeout } from '@vueuse/core'
const showLoadingScreen = ref<Boolean>(true)
const search = ref('')

const router = useRouter()

function onLoaded() {
  const ready = useTimeout(2000)
  if (ready) showLoadingScreen.value = false
}

function onSearch() {
  router.push({ path: '/search', query: { q: search.value } })
}
</script>

<template>
  <LoadingScreen v-if="showLoadingScreen" />
  <BackgroundVideo v-show="!showLoadingScreen" @loaded="onLoaded" />
  <IconLogo class="absolute text-primary left-5 top-8 sm:left-16 sm:top-14 select-none"></IconLogo>
  <div class="absolute right-5 top-8 flex flex-col items-end sm:right-14 sm:top-14 select-none">
    <div class="text-white uppercase w-40 text-right">Drag your screen to explore</div>
    <img class="w-24" src="/assets/img/drag.gif" alt="Image drag" />
  </div>
  <div
    class="w-full sm:w-[813px] absolute sm:bottom-12 bottom-14 sm:left-14 left-0 pl-5 sm:pl-0 select-none rigin-bottom"
  >
    <h1 class="text-white font-neue-medium text-5xl sm:text-9xl pr-9 sm:pr-0">
      Welcome to the Met.
    </h1>
    <ButtonSearch v-model="search" class="sm:mt-10 mt-5" @search="onSearch" />
  </div>
</template>
