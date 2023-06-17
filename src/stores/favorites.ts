import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {}, {
  persist: true
})
