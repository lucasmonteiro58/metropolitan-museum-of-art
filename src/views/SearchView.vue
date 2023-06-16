<script setup lang="ts">
/*@ts-ignore*/
import { Pagination } from 'flowbite-vue'

function onSearch(value: string) {
  console.log(value)
}

const currentPage = ref(1)
</script>

<template>
  <div>
    <TopBarSearch @search="onSearch" />
    <div class="flex w-full justify-center flex-col items-center">
      <div class="max-w-[1150px] w-full">
        <div class="font-neue-medium text-xl mt-8">1.234 result for'search'</div>
      </div>
      <div
        class="flex gap-x-12 gap-y-12 flex-wrap mt-4 mb-8 max-w-[1200px] justify-center sm:px-0 px-4"
      >
        <ItemGallery />
        <ItemGallery />
        <ItemGallery />
        <ItemGallery />
        <ItemGallery />
        <ItemGallery />
        <ItemGallery />
        <ItemGallery />
      </div>
      <div class="max-w-[1200px] justify-center sm:px-0 px-4 mb-10 mt-5">
        <Pagination
          class="w-400px"
          v-model="currentPage"
          :total-items="1000"
          :per-page="6"
          show-icons
          :slice-length="1"
          previous-label=""
          next-label=""
        ></Pagination>
      </div>
    </div>
  </div>
</template>
