import type { IObject } from '@/types/IObject'

export default function useObjects() {
  const baseUrl: string = import.meta.env.VITE_API_URL as string

  const currentObjects = ref<IObject[]>([])
  const isLoadingObjects = ref(false)

  async function getObjectsDetails(objectIDs: number[]) {
    isLoadingObjects.value = true
    currentObjects.value = []
    Promise.all(
      objectIDs?.map(async (objectID) => {
        const url = `${baseUrl}objects/${objectID}`
        const response = await fetch(url)
        const data = await response.json()
        currentObjects.value.push(data)
      })
    ).then(() => {
      isLoadingObjects.value = false
    })
  }

  return {
    currentObjects,
    isLoadingObjects,
    getObjectsDetails
  }
}
