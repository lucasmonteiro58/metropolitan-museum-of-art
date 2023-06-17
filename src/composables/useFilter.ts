import type { ISearch } from '@/types/ISearch'

export default function useFilter() {
  const baseUrl: string = import.meta.env.VITE_API_URL as string

  const { paginate } = usePaginator()
  const isFiltering = ref<boolean>(false)
  const itemsStore = useItemsStore()
  const router = useRouter()

  function generateUrlParams() {
    const _query = {
      hasImages: itemsStore.filter.hasImages ? 'true' : 'false',
      geoLocation: itemsStore.filter.location,
      artistOrCulture: itemsStore.filter.artist,
      q: itemsStore.query as string
    }
    const urlParams = new URLSearchParams(_query)
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
    }
  }

  return {
    onFilter,
    generateUrlParams
  }
}
