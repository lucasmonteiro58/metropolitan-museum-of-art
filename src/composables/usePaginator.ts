import type { ISearch } from '@/types/ISearch'

export default function usePaginator() {
  function paginate(data: ISearch, itemsPerPage: number) {
    const { objectIDs } = data
    if (!objectIDs) return []
    const pages = []
    const totalItems = objectIDs.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    for (let i = 0; i < totalPages; i++) {
      const startIndex = i * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      const page = objectIDs.slice(startIndex, endIndex)
      pages.push(page)
    }

    return pages
  }

  return {
    paginate
  }
}
