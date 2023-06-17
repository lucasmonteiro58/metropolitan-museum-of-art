import type { ISearch } from '@/types/ISearch'
import usePaginator from './usePaginator'

export default function useSearch() {
  const baseUrl: string = import.meta.env.VITE_API_URL as string

  const itemsStore = useItemsStore()
  const router = useRouter()

  const { generateUrlParams } = useFilter()

  const query = computed(() => {
    return router.currentRoute.value?.query?.q
  })

  const { paginate } = usePaginator()

  async function search() {
    const url = `${baseUrl}search?${generateUrlParams()}`
    try {
      itemsStore.isSearching = true
      const response = await fetch(url)
      const data = (await response.json()) as ISearch
      itemsStore.results = paginate(data, itemsStore.resultPerPage)
      itemsStore.totalResults = data.total
    } catch (error) {
      console.log(error)
    } finally {
      itemsStore.isSearching = false
    }
  }

  watch(query, () => {
    itemsStore.currentPage = 1
  })

  return {
    search,
    query
  }
}
