<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useVModel } from '@vueuse/core'

const showInput = ref<Boolean>(false)
const target = ref<HTMLElement | null>(null)

const props = defineProps<{
  modelValue: String
  full?: Boolean
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue', 'search'])
const textInput = useVModel(props, 'modelValue', emit)

function onClick() {
  showInput.value = true
}

function onSearch() {
  if (textInput.value && showInput.value) {
    emit('search')
  }
}

onClickOutside(target, () => {
  if (!props.full) showInput.value = false
})

const computedClass = computed(() => {
  return {
    'sm:w-[500px] w-[90%]': showInput.value && !props.full,
    'sm:w-full w-full sm:text-xl sm:px-12 sm:py-4': showInput.value && props.full,
    'sm:w-64 w-48 justify-between': !showInput.value
  }
})

onMounted(() => {
  if (props.full) {
    showInput.value = true
  }
})
</script>

<template>
  <div
    ref="target"
    @click="onClick"
    class="sm:py-5 py-4 sm:px-16 px-8 bg-white font-neue-medium rounded-full sm:text-2xl text-xl flex items-center justify-center cursor-pointer transition-[width] duration-300 hover:bg-gray-100"
    :class="computedClass"
  >
    <input
      v-if="showInput"
      v-model="textInput"
      @keyup.enter="onSearch"
      type="text"
      autofocus
      :placeholder="placeholder || 'Type here...'"
      class="outline-0 bg-transparent w-full"
    />
    <span v-else>Search</span>
    <IconSearchAnimated :key="showInput" class="inline-block ml-3 text-primary" @click="onSearch" />
  </div>
</template>
