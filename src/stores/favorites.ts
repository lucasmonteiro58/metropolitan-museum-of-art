import type { IObject } from '@/types/IObject'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore(
  'favorites',
  () => {
    const favorites = ref<IObject[]>([])

    return {
      favorites
    }
  },
  {
    persist: true
  }
)
