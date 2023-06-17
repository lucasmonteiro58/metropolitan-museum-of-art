import type { IObject } from '@/types/IObject'
import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', () => {
  const router = useRouter()
  const results = ref<number[][]>([])
  const resultsUnpaginated = ref<number[]>([])
  const isSearching = ref<boolean>(false)
  const totalResults = ref<number>(0)
  const currentPage = ref<number>(1)
  const resultPerPage = ref<number>(8)
  const currentObjects = ref<IObject[]>([])

  const query = computed(() => {
    return router.currentRoute.value?.query?.q
  })

  const currentResult = computed(() => {
    return results.value[currentPage.value - 1]
  })

  const totalPages = computed(() => {
    return Math.ceil(totalResults.value / resultPerPage.value)
  })

  return {
    currentObjects,
    results,
    resultsUnpaginated,
    isSearching,
    totalResults,
    currentPage,
    resultPerPage,
    currentResult,
    totalPages,
    query
  }
})
