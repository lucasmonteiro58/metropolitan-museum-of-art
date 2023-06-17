<script setup lang="ts">
const emit = defineEmits(['search'])

const filterStore = useFilterStore()

const router = useRouter()
const query = computed(() => {
  return router.currentRoute.value?.query?.q
})

function onSearch() {
  if (filterStore.search) {
    emit('search', filterStore.search)
  }
}

onMounted(() => {
  if (query.value) filterStore.search = query.value as string
})
</script>

<template>
  <div
    class="w-full bg-primary flex sm:px-8 sm:py-4 px-4 py-4 justify-center sm:flex-row flex-col items-center"
  >
    <RouterLink to="/" class="text-white select-none sm:w-20 w-10 mx-auto sm:mx-0 sm:mr-auto">
      <IconLogo></IconLogo
    ></RouterLink>

    <ButtonSearch
      v-model="filterStore.search"
      class="sm:!w-[700px] mr-auto sm:ml-14 w-full ml-0 sm:mt-0 mt-3"
      :full="true"
      placeholder="Artist, Art name or Location..."
      @search="onSearch"
    />
  </div>
</template>
