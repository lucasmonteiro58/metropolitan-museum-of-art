<script setup lang="ts">
/* @ts-ignore */
import { TriStateCheckbox } from 'vue-tri-state-checkbox'
import 'vue-tri-state-checkbox/dist/style.css'
const open = ref(true)
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
      />
    </div>
    <div v-if="open" v-motion-slide-top>
      <div class="w-full flex flex-wrap justify-star mt-2 gap-x-8 gap-y-6">
        <div class="sm:w-1/4 w-full">
          <label for="location">Location</label>
          <input class="w-full border border-solid border-gray-300 px-4 py-2 rounded" type="text" />
        </div>
        <div class="sm:w-1/4 w-full">
          <label for="artist">Artist</label>
          <input
            class="w-full border border-solid border-gray-300 px-4 py-2 rounded"
            type="artist"
          />
        </div>
        <div class="sm:w-[140px] w-1/2 flex flex-col justify-end">
          <TriStateCheckbox label="Public" color="#e4012b" />
          <TriStateCheckbox label="Only has Image" color="#e4012b" />
        </div>
        <div class="flex flex-col justify-end w-full sm:w-fit">
          <button
            class="bg-primary text-white px-12 py-2 rounded font-neue-medium hover:opacity-90 w-full"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
