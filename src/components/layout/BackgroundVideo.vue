<script setup lang="ts">
const sceneRef = ref<HTMLVideoElement | null>(null)
const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  sceneRef.value?.addEventListener('loaded', () => {
    videoRef.value?.play()
    emits('loaded')
  })
})

const emits = defineEmits(['loaded'])
</script>

<template>
  <div class="bg-black absolute w-full h-screen max-h-screen">
    <a-scene vr-mode-ui="enabled: false" embedded class="w-full h-screen opacity-50">
      <a-assets>
        <video
          ref="videoRef"
          id="video"
          src="/assets/videos/video.mp4"
          autoplay
          class=""
          loop="true"
          muted
        ></video>
      </a-assets>
      <a-videosphere ref="sceneRef" src="#video" rotation="0 270 0"></a-videosphere>
    </a-scene>
  </div>
</template>
