<script setup lang="ts">
const search = ref<String>('')

const emit = defineEmits(['search'])

function onSearch() {
  if (search.value) emit('search', search.value)
}
</script>

<template>
  <div class="w-full bg-primary flex px-8 py-6 justify-center">
    <IconLogo class="text-white select-none w-20 mr-auto"></IconLogo>
    <ButtonSearch
      v-model="search"
      class="!w-[700px] mr-auto ml-14"
      :full="true"
      placeholder="Artist, Art name or Location..."
      @search="onSearch"
    />
  </div>
</template>
