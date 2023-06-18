import type { IFilter } from '@/types/IFilter'
import { defineStore } from 'pinia'
import type { LocationQueryRaw } from 'vue-router'

export const useFilterStore = defineStore('filter', () => {
  const search = ref<string>('')
  const location = ref<string>('')
  const artist = ref<string>('')
  const hasImages = ref<boolean | null>(null)

  const router = useRouter()

  function changeQuery() {
    const query: IFilter = {}
    if (search.value) query.q = search.value
    if (location.value) query.geoLocation = location.value
    if (artist.value) query.artistOrCulture = artist.value
    if (hasImages.value) query.hasImages = hasImages.value ? 'true' : ''

    router.push({
      path: '/search',
      query: query as LocationQueryRaw
    })
  }

  return {
    search,
    location,
    artist,
    hasImages,
    changeQuery
  }
})
