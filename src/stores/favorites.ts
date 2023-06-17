import type { IObject } from '@/types/IObject'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore(
  'favorites',
  () => {
    const favorites = ref<IObject[]>([])
    const showingFavorites = ref(true)

    function addFavorite(object: IObject) {
      favorites.value.push(object)
    }

    function isFavorite(object: IObject) {
      return favorites.value.some((item) => item.objectID === object.objectID)
    }

    function removeFavorite(object: IObject) {
      const index = favorites.value.findIndex((item) => item.objectID === object.objectID)
      favorites.value.splice(index, 1)
    }

    return {
      showingFavorites,
      favorites,
      addFavorite,
      removeFavorite,
      isFavorite
    }
  },
  {
    persist: true
  }
)
