import type { IObject } from '@/types/IObject'

export default function useObjects() {
  const currentObjects = ref<IObject[]>([])
  const isLoadingObjects = ref(false)
  const axios = useAxios()

  async function getObjectsDetails(objectIDs: number[]) {
    isLoadingObjects.value = true
    currentObjects.value = []
    if (!objectIDs) {
      isLoadingObjects.value = false
      return
    }
    Promise.all(
      objectIDs?.map(async (objectID) => {
        const response = await axios.get(`/objects/${objectID}`)
        const data = response?.data as IObject
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
