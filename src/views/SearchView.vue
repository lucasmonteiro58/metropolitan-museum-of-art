<script setup lang="ts">
/*@ts-ignore*/
import { Pagination } from 'flowbite-vue'

const { isSearching, search, currentPage, totalResults, resultPerPage, currentResult, query } =
  useSearch()
const { isLoadingObjects, getObjectsDetails, currentObjects } = useObject()

watch(currentResult, () => {
  getObjectsDetails(currentResult.value)
})

onMounted(() => {
  search(query.value)
})
</script>

<template>
  <div>
    <TopBarSearch @search="search" />
    <div v-if="isSearching || isLoadingObjects" class="flex justify-center mt-20">
      <IconSpinner size="50" class="text-primary"></IconSpinner>
    </div>
    <div v-else class="flex w-full justify-center flex-col items-center">
      <div class="max-w-[1150px] w-full">
        <div class="font-neue-medium text-xl mt-8">{{ totalResults }} result for'{{ query }}'</div>
      </div>
      <div
        class="flex gap-x-12 gap-y-12 flex-wrap mt-4 mb-8 max-w-[1200px] justify-center sm:px-0 px-4"
      >
        <ItemGallery v-for="obj in currentObjects" :key="obj.GalleryNumber" :obj="obj" />
      </div>
      <div class="max-w-[1200px] justify-center sm:px-0 px-4 mb-10 mt-5">
        <Pagination
          v-if="totalResults > 0"
          class="w-400px"
          v-model="currentPage"
          :total-items="totalResults"
          :per-page="resultPerPage"
          show-icons
          :slice-length="1"
          previous-label=""
          next-label=""
        ></Pagination>
      </div>
    </div>
  </div>
</template>
