import type { ISearch } from '@/types/ISearch'
import type { LocationQueryValue } from 'vue-router'
import usePaginator from './usePaginator'

export default function useSearch() {
  const baseUrl: string = import.meta.env.VITE_API_URL as string

  const router = useRouter()
  const results = ref<number[][]>([])
  const isSearching = ref<boolean>(false)
  const totalResults = ref<number>(0)
  const currentPage = ref<number>(1)
  const resultPerPage = ref<number>(8)

  const { paginate } = usePaginator()

  const currentResult = computed(() => {
    return results.value[currentPage.value - 1]
  })

  const totalPages = computed(() => {
    return Math.ceil(totalResults.value / resultPerPage.value)
  })

  const query = computed(() => {
    return router.currentRoute.value?.query?.q
  })

  async function search(query: string | LocationQueryValue[] | LocationQueryValue | undefined) {
    const url = `${baseUrl}search?q=${query}`
    try {
      isSearching.value = true
      const response = await fetch(url)
      const data = (await response.json()) as ISearch
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
    resultPerPage,
    query
  }
}
