import type { IFilter } from '@/types/IFilter'

export default function useFilter() {
  const filterStore = useFilterStore()

  function generateUrlParams() {
    const _query: IFilter = {}
    if (filterStore.location) _query.geoLocation = filterStore.location
    if (filterStore.artist) _query.artistOrCulture = filterStore.artist
    if (filterStore.hasImages) _query.hasImages = filterStore.hasImages ? 'true' : ''
    if (filterStore.search) _query.q = filterStore.search as string

    const urlParams = new URLSearchParams(_query as URLSearchParams)
    return urlParams
  }

  return {
    generateUrlParams
  }
}
