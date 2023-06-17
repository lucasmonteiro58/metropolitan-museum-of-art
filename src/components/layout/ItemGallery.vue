<script setup lang="ts">
import type { IObject } from '@/types/IObject'

defineProps<{
  obj: IObject
}>()
</script>

<template>
  <div class="group sm:w-fit sm:min-w-0 min-w-full cursor-pointer">
    <div
      class="sm:w-[250px] w-full min-w-full overflow-hidden bg-gray-200 flex justify-center relative"
    >
      <img
        class="h-[350px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
        :src="obj?.primaryImageSmall || obj?.primaryImage"
      />
      <FavoriteStar :obj="obj" class="absolute top-2 right-2"></FavoriteStar>
      <div
        v-if="obj?.isPublicDomain"
        class="absolute bottom-2 right-2 text-white bg-primary rounded text-sm px-2 py-1"
      >
        Public
      </div>
    </div>
    <div class="sm:w-[250px] w-full font-neue-medium">
      <div class="text-2xl leading-6 mt-2">{{ obj?.title }}</div>
      <div class="text-gray-600 mt-3" v-if="obj.artistPrefix || obj.artistDisplayName">
        {{ obj?.artistPrefix + ' ' + obj?.artistDisplayName }}
      </div>
      <div
        class="w-fit text-3xl text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in mt-2 pr-4"
      >
        See Details
        <div
          class="w-0 group-hover:w-full h-1 bg-primary transition-[width] duration-500 ease-in-out delay-200"
        ></div>
      </div>
    </div>
  </div>
</template>
