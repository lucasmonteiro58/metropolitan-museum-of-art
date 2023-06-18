import type { IObject } from '@/types/IObject'

export default function useObjects() {
  const isLoadingObjects = ref(false)
  const axios = useAxios()

  const itemsStore = useItemsStore()

  async function getObjectsDetails(objectIDs: number[]) {
    isLoadingObjects.value = true
    itemsStore.currentObjects = []
    if (!objectIDs) {
      isLoadingObjects.value = false
      return
    }
    Promise.all(
      objectIDs?.map(async (objectID) => {
        const response = await axios.get(`/objects/${objectID}`)
        const data = response?.data as IObject
        itemsStore.currentObjects.push(data)
      })
    ).finally(() => {
      isLoadingObjects.value = false
    })
  }

  return {
    isLoadingObjects,
    getObjectsDetails
  }
}
