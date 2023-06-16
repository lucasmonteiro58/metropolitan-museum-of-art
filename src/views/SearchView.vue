<script setup lang="ts">
function onSearch(value: string) {
  console.log(value)
}
</script>

<template>
  <div class="mt-0">
    <TopBarSearch @search="onSearch" />
  </div>
</template>
