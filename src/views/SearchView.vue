<script setup lang="ts">
/*@ts-ignore*/
import { Pagination } from 'flowbite-vue'
import useSearch from '@/composables/useSearch'
import useObject from '@/composables/useObject'

const router = useRouter()

const { isSearching, search, currentPage, totalResults, resultPerPage, currentResult } = useSearch()
const { isSearchinObject, getObjectsDetails, currentObjects } = useObject()

watch(currentResult, () => {
  getObjectsDetails(currentResult.value)
})

const query = computed(() => {
  return router.currentRoute.value?.query?.q
})

onMounted(() => {
  search(query.value)
})
</script>

<template>
  <div>
    <TopBarSearch @search="search" />
    <div class="flex w-full justify-center flex-col items-center">
      <div class="max-w-[1150px] w-full">
        <div class="font-neue-medium text-xl mt-8">{{ totalResults }} result for'{{ query }}'</div>
      </div>
      <div
        class="flex gap-x-12 gap-y-12 flex-wrap mt-4 mb-8 max-w-[1200px] justify-center sm:px-0 px-4"
      >
        <ItemGallery v-for="obj in currentObjects" :key="obj" />
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
