<script setup lang="ts">
import type { IObject } from '@/types/IObject'
import { onClickOutside } from '@vueuse/core'

const props = defineProps<{
  obj?: IObject
}>()

const modalStore = useModalStore()
const modalRef = ref<HTMLElement | null>(null)
onClickOutside(modalRef, () => {
  if (!imgBig.value) modalStore.hideModal()
})

const additionalImages = computed(() => {
  if (props.obj?.additionalImages) {
    return props.obj?.additionalImages.slice(0, 5)
  }
  return []
})

const showAdditionalImages = ref(false)

const imgBig = ref('')

function showImageBig(image: string) {
  imgBig.value = image
}

function hideImageBig() {
  imgBig.value = ''
}

onMounted(() => {
  setTimeout(() => {
    showAdditionalImages.value = true
  }, 1000)
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed top-0 left-0 w-screen h-screen bg-[#0000006d] backdrop-blur flex items-center justify-center z-10"
    >
      <div
        ref="modalRef"
        class="bg-white w-full mx-0 sm:mx-4 rounded-lg sm:max-w-[500px] relative py-4"
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1 }"
      >
        <div class="relative">
          <h1
            class="text-2xl font-neue-medium mb-5 mx-4 pr-10 sm:ml-4 sm:mx-4 sm:px-4 sm:pr-8 text-primary leading-6 max-h-[98px] overflow-hidden"
          >
            {{ obj?.title }}
          </h1>
          <IconClose
            size="30"
            class="absolute top-0 right-3 cursor-pointer"
            @click="modalStore.hideModal()"
          ></IconClose>
        </div>

        <div
          class="modal flex flex-col max-h-[80vh] mx-4 mr-4 sm:ml-4 sm:mx-4 sm:px-4 overflow-y-auto items-center"
        >
          <div
            v-if="obj?.primaryImage || obj?.primaryImageSmall"
            class="flex flex-col items-center"
          >
            <img
              lazy
              :src="obj?.primaryImageSmall || obj?.primaryImage"
              :alt="obj?.title"
              @click="showImageBig(obj?.primaryImageSmall || obj?.primaryImage)"
              class="max-h-[150px] w-fit mb-3 cursor-pointer"
            />
            <div
              v-if="additionalImages.length > 0 && showAdditionalImages"
              class="flex flex-wrap gap-2 mb-5 justify-center max-w-full"
            >
              <img
                v-for="i in additionalImages"
                :key="i"
                :src="i"
                :alt="obj?.title"
                @click="showImageBig(i)"
                class="max-h-[40px] cursor-pointer"
              />
            </div>
          </div>
          <div class="flex flex-col gap-y-1">
            <div v-if="obj?.artistDisplayName" class="font-neue-medium">
              Artist:
              <div class="font-neue inline">
                {{ obj?.artistDisplayName }}
              </div>
            </div>
            <div v-if="obj?.department" class="font-neue-medium">
              Department:
              <div class="font-neue inline">{{ obj?.department }}</div>
            </div>

            <div v-if="obj?.artistNationality" class="font-neue-medium">
              Nationality:
              <div class="font-neue inline">
                {{ obj?.artistNationality }}
              </div>
            </div>
            <div v-if="obj?.objectDate" class="font-neue-medium">
              Object Date:
              <div class="font-neue inline">
                {{ obj?.objectDate }}
              </div>
            </div>
            <div v-if="obj?.medium" class="font-neue-medium">
              Medium:
              <div class="font-neue inline">
                {{ obj?.medium }}
              </div>
            </div>
            <div v-if="obj?.dimensions" class="font-neue-medium">
              Dimensions:
              <div class="font-neue inline">
                {{ obj?.dimensions }}
              </div>
            </div>
            <div v-if="obj?.creditLine" class="font-neue-medium">
              Credit Line:
              <div class="font-neue inline">
                {{ obj?.creditLine }}
              </div>
            </div>
            <div v-if="obj?.repository" class="font-neue-medium">
              Repository:
              <div class="font-neue inline">
                {{ obj?.repository }}
              </div>
            </div>
            <div v-if="obj?.objectURL" class="font-neue-medium">
              Link:
              <div class="font-neue inline">
                <a :href="obj?.objectURL" target="_blank" class="text-primary break-all">
                  {{ obj?.objectURL }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="imgBig"
        class="w-full h-full absolute flex justify-center items-center z-50"
        @click.stop="hideImageBig"
      >
        <div class="bg-black opacity-50 w-full h-full absolute"></div>
        <img v-motion-fade :src="imgBig" alt="Image Object" class="max-h-[98vh] absolute" />
      </div>
    </div>
  </Teleport>
</template>
<style>
.modal::-webkit-scrollbar {
  width: 3px;
}

.modal::-webkit-scrollbar-track {
  background: #efefef;
}

.modal::-webkit-scrollbar-thumb {
  background-color: #727272;
  border-radius: 20px;
  border: 3px solid #a0a0a0;
}
</style>
