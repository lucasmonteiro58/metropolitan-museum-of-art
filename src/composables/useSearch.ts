import type { LocationQueryValue } from 'vue-router'
import usePaginator from './usePaginator'

export default function useSearch() {
  const baseUrl: string = import.meta.env.VITE_API_URL as string

  const results = ref<any[]>([])
  const isSearching = ref(false)
  const totalResults = ref(0)
  const currentPage = ref(1)
  const resultPerPage = ref(8)

  const { paginate } = usePaginator()

  const currentResult = computed(() => {
    return results.value[currentPage.value - 1]
  })

  const totalPages = computed(() => {
    return Math.ceil(totalResults.value / resultPerPage.value)
  })

  async function search(query: string | LocationQueryValue[] | LocationQueryValue | undefined) {
    const url = `${baseUrl}search?q=${query}`
    try {
      isSearching.value = true
      const response = await fetch(url)
      const data = await response.json()
      results.value = paginate(data, resultPerPage.value)
      totalResults.value = data.total
    } catch (error) {
      console.log(error)
    } finally {
      isSearching.value = false
    }
  }

  return {
    results,
    isSearching,
    search,
    totalResults,
    currentPage,
    currentResult,
    totalPages,
    resultPerPage
  }
}
