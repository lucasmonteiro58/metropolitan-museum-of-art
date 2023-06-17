<script setup lang="ts">
const open = ref(true)

const { onFilter } = useFilter()

const filterStore = useFilterStore()
</script>

<template>
  <div class="max-w-[1150px] w-full mt-4 sm:px-0 px-4">
    <div
      class="font-neue-medium text-2xl w-full flex justify-between cursor-pointer"
      @click="open = !open"
    >
      <div>Filter By</div>
      <IconCheveron
        class="transform transition-all duration-300"
        :class="open ? 'rotate-180' : ''"
        width="40"
      />
    </div>
    <div v-if="open" v-motion :initial="{ opacity: 0, y: -20 }" :enter="{ opacity: 1, y: 0 }">
      <div class="w-full flex flex-wrap justify-star mt-2 gap-x-8 gap-y-6">
        <div class="sm:w-1/4 w-full">
          <label for="location">Location</label>
          <input
            v-model="filterStore.location"
            class="w-full border border-solid border-gray-300 px-4 py-2 rounded"
            type="text"
            id="location"
          />
        </div>
        <div class="sm:w-1/4 w-full">
          <label for="artist">Artist</label>
          <input
            v-model="filterStore.artist"
            class="w-full border border-solid border-gray-300 px-4 py-2 rounded"
            type="text"
            id="artist"
          />
        </div>
        <div class="sm:w-[140px] w-1/2 flex items-end">
          <input
            v-model="filterStore.hasImages"
            type="checkbox"
            id="onlyImage"
            class="mr-2 mb-1 h-4 w-4 !bg-red-500 checked:!bg-red-500"
          />

          <label for="onlyImage">Only has Image</label>
        </div>
        <div class="flex flex-col justify-end w-full sm:w-fit">
          <button
            @click="onFilter"
            class="bg-primary text-white px-12 py-2 rounded font-neue-medium hover:opacity-90 w-full"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
