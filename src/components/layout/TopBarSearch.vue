<script setup lang="ts">
const search = ref<any>('')

const emit = defineEmits(['search'])

const router = useRouter()
const query = computed(() => {
  return router.currentRoute.value?.query?.q
})

function onSearch() {
  if (search.value) {
    router.push({ path: '/search', query: { q: search.value } })
    emit('search', search.value)
  }
}

watch(search, () => {
  if (search.value) router.push({ path: '/search', query: { q: search.value } })
})

onMounted(() => {
  if (query.value) search.value = query.value
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
      v-model="search"
      class="sm:!w-[700px] mr-auto sm:ml-14 w-full ml-0 sm:mt-0 mt-3"
      :full="true"
      placeholder="Artist, Art name or Location..."
      @search="onSearch"
    />
  </div>
</template>
