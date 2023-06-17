<script setup lang="ts">
/*@ts-ignore*/
import { Pagination } from 'flowbite-vue'

const { search } = useSearch()

const itemsStore = useItemsStore()
const favoritesStore = useFavoritesStore()
const computedCurrentResult = computed(() => itemsStore.currentResult)
const { isLoadingObjects, getObjectsDetails } = useObject()

const currentObjects = computed(() => {
  return itemsStore.currentObjects
})

watch(computedCurrentResult, () => {
  getObjectsDetails(computedCurrentResult.value)
})

onMounted(() => {
  search()
})
</script>

<template>
  <div>
    <TopBarSearch @search="search" />
    <div v-if="favoritesStore.showingFavorites" class="flex flex-col justify-center items-center">
      <FavoritesSection />
    </div>
    <div v-else class="flex flex-col justify-center items-center">
      <FilterSection />
      <div v-if="itemsStore.isSearching || isLoadingObjects" class="flex justify-center mt-20">
        <IconSpinner size="50" class="text-primary"></IconSpinner>
      </div>
      <div v-else class="flex w-full justify-center flex-col items-center">
        <div class="max-w-[1150px] w-full sm:px-4 xl:px-0">
          <div class="font-neue-medium text-xl mt-8 px-4 sm:px-0">
            {{ itemsStore.totalResults }} results
            <span v-if="itemsStore.query">for'{{ itemsStore.query }}'</span>
          </div>
        </div>
        <div
          class="flex gap-x-12 gap-y-12 flex-wrap mt-4 mb-8 max-w-[1200px] justify-start sm:px-5 px-4"
        >
          <ItemGallery
            v-for="(obj, i) in currentObjects"
            :key="obj.GalleryNumber"
            :obj="obj"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="300 * i"
          />
        </div>
        <div class="max-w-[1200px] justify-center sm:px-0 px-4 mb-10 mt-5">
          <Pagination
            v-if="itemsStore.totalResults > 0"
            class="w-400px"
            v-model="itemsStore.currentPage"
            :total-items="itemsStore.totalResults"
            :per-page="itemsStore.resultPerPage"
            show-icons
            :slice-length="1"
            previous-label=""
            next-label=""
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>
