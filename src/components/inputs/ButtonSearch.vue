<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const showInput = ref<Boolean>(false)
const textInput = ref<String>('')
const target = ref<HTMLElement | null>(null)

function onClick() {
  showInput.value = true
}

onClickOutside(target, () => {
  showInput.value = false
})

const computedClass = computed(() => {
  return {
    'sm:w-[500px] w-[90%]': showInput.value,
    'sm:w-64 w-48 justify-between': !showInput.value
  }
})
</script>

<template>
  <div
    ref="target"
    @click="onClick"
    :class="computedClass"
    class="py-5 sm:px-16 px-8 bg-white font-neue-medium rounded-full text-2xl flex items-center justify-center cursor-pointer transition-[width] duration-300 hover:bg-gray-100"
  >
    <input
      v-if="showInput"
      v-model="textInput"
      type="text"
      autofocus
      placeholder="Type here..."
      class="outline-0 bg-transparent w-full"
    />
    <span v-else>Search</span>
    <IconSearchAnimated :key="showInput" class="inline-block ml-3" />
  </div>
</template>
