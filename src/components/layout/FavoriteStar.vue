<script setup lang="ts">
import type { IObject } from '@/types/IObject'
const props = defineProps<{
  obj: IObject
}>()

const favoriteStore = useFavoritesStore()

const isFavorite = computed(() => {
  return favoriteStore.isFavorite(props.obj)
})
</script>

<template>
  <div class="cursor-pointer">
    <IconStarAnimated
      v-if="isFavorite"
      size="40"
      class="text-yellow-500 drop-shadow-md"
      @click="favoriteStore.removeFavorite(props.obj)"
    />
    <IconStar
      v-else
      size="40"
      class="text-gray-500 drop-shadow-md opacity-70 hover:opacity-90 hover:scale-105"
      @click="favoriteStore.addFavorite(props.obj)"
    />
  </div>
</template>
