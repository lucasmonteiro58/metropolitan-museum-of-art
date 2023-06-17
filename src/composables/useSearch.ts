import type { ISearch } from '@/types/ISearch'
import usePaginator from './usePaginator'

export default function useSearch() {
  const itemsStore = useItemsStore()
  const filterStore = useFilterStore()
  const router = useRouter()
  const axios = useAxios()
  const { generateUrlParams } = useFilter()

  const query = computed(() => {
    return router.currentRoute.value?.query?.q
  })

  const { paginate } = usePaginator()

  async function search() {
    try {
      itemsStore.isSearching = true
      resetResults()
      const response = await axios.get('/search', {
        params: generateUrlParams()
      })
      const data = response?.data as ISearch
      itemsStore.resultsUnpaginated = data.objectIDs
      itemsStore.results = paginate(data, itemsStore.resultPerPage)
      itemsStore.totalResults = data.total
    } catch (error) {
      console.log(error)
    } finally {
      filterStore.changeQuery()
      itemsStore.isSearching = false
    }
  }

  function resetResults() {
    itemsStore.results = []
    itemsStore.resultsUnpaginated = []
    itemsStore.totalResults = 0
    itemsStore.currentPage = 1
  }

  watch(query, () => {
    itemsStore.currentPage = 1
  })

  return {
    search,
    query
  }
}
