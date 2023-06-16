export default function useObjects() {
  const baseUrl: string = import.meta.env.VITE_API_URL as string

  const currentObjects = ref<any[]>([])
  const isLoadingObjects = ref(false)

  async function getObjectsDetails(objectIDs: string[]) {
    isLoadingObjects.value = true
    currentObjects.value = []
    Promise.all(
      objectIDs.map(async (objectID) => {
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
