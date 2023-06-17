<script setup lang="ts">
const favoritesStore = useFavoritesStore()

function closeFavorites() {
  favoritesStore.showingFavorites = false
}
</script>

<template>
  <div class="max-w-[1150px] w-full mt-4 sm:px-4 px-4 xl:px-0">
    <div class="font-neue-medium text-2xl w-full flex justify-between">
      <div>Favorites</div>
      <IconClose
        class="transform transition-all duration-300 cursor-pointer"
        width="40"
        @click="closeFavorites"
      />
    </div>
    <div
      class="flex gap-x-12 gap-y-12 flex-wrap mt-4 mb-8 max-w-[1200px] justify-start sm:px-0 px-4"
    >
      <ItemGallery
        v-for="(obj, i) in favoritesStore.favorites"
        :key="obj.GalleryNumber"
        :obj="obj"
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="300 * i"
      />
    </div>
  </div>
</template>
