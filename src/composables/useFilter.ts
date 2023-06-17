import type { IFilter } from '@/types/IFilter'
import type { ISearch } from '@/types/ISearch'

export default function useFilter() {
  const baseUrl: string = import.meta.env.VITE_API_URL as string

  const { paginate } = usePaginator()
  const isFiltering = ref<boolean>(false)
  const itemsStore = useItemsStore()

  const filterStore = useFilterStore()
  const router = useRouter()

  function generateUrlParams() {
    const _query: IFilter = {}
    if (filterStore.search) _query.q = filterStore.search as string
    if (filterStore.location) _query.geoLocation = filterStore.location
    if (filterStore.artist) _query.artistOrCulture = filterStore.artist
    if (filterStore.hasImages) _query.hasImages = filterStore.hasImages ? 'true' : ''

    const urlParams = new URLSearchParams(_query as URLSearchParams)
    return urlParams.toString()
  }

  async function onFilter() {
    router.push({ path: '/search', query: { q: itemsStore.query } })
    const url = `${baseUrl}search?${generateUrlParams()}`
    try {
      isFiltering.value = true
      const response = await fetch(url)
      const data = (await response.json()) as ISearch
      itemsStore.results = paginate(data, itemsStore.resultPerPage)
      itemsStore.totalResults = data.total
    } catch (error) {
      console.log(error)
    } finally {
      isFiltering.value = false
      filterStore.changeQuery()
    }
  }

  return {
    onFilter,
    generateUrlParams
  }
}
