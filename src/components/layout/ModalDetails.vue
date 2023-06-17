<script setup lang="ts">
import type { IObject } from '@/types/IObject'

defineProps<{
  obj?: IObject
}>()
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed top-0 left-0 w-screen h-screen bg-[#0000006d] backdrop-blur flex items-center justify-center z-10"
    >
      <div class="bg-white w-full min-h-[400px] mx-4 rounded-lg lg:max-w-[800px] relative py-6">
        <IconClose size="40" class="absolute top-3 right-10"></IconClose>
        <div
          class="modal flex flex-col max-h-[80vh] mx-4 mr-2 sm:ml-4 md:mx-4 md:px-4 overflow-y-auto items-center"
        >
          <h1 class="text-2xl font-neue-medium mb-4">{{ obj?.title }}</h1>
          <div v-if="obj?.primaryImage || obj?.primaryImageSmall" class="flex flex-col">
            <img
              :src="obj?.primaryImageSmall || obj?.primaryImage"
              :alt="obj?.title"
              class="max-w-[200px] mb-3"
            />
            <div v-if="obj?.additionalImages.length > 0" class="flex gap-2 mb-5 justify-center">
              <img
                v-for="i in obj?.additionalImages"
                :key="i"
                :src="i"
                :alt="obj?.title"
                class="max-h-[60px]"
              />
            </div>
          </div>
          <div class="flex flex-col gap-y-2">
            <div class="font-neue-medium">
              Artist:
              <div class="font-neue inline">
                {{ obj?.artistDisplayName }}
              </div>
            </div>
            <div class="font-neue-medium">
              Department:
              <div class="font-neue inline">{{ obj?.department }}</div>
            </div>

            <div class="font-neue-medium">
              Nationality:
              <div class="font-neue inline">
                {{ obj?.artistNationality }}
              </div>
            </div>
            <div class="font-neue-medium">
              Object Date:
              <div class="font-neue inline">
                {{ obj?.objectDate }}
              </div>
            </div>
            <div class="font-neue-medium">
              Medium:
              <div class="font-neue inline">
                {{ obj?.medium }}
              </div>
            </div>
            <div class="font-neue-medium">
              Dimensions:
              <div class="font-neue inline">
                {{ obj?.dimensions }}
              </div>
            </div>
            <div class="font-neue-medium">
              Credit Line:
              <div class="font-neue inline">
                {{ obj?.creditLine }}
              </div>
            </div>
            <div class="font-neue-medium">
              Repository:
              <div class="font-neue inline">
                {{ obj?.repository }}
              </div>
            </div>
            <div class="font-neue-medium">
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
