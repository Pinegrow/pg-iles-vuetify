<script client:load lang="ts">
  //Move to WalkThrough.vue
  import '@/plugins/youtube.client'
</script>

<script setup lang="ts">
  useHeadAndMeta()
  // const { route } = usePage()
</script>

<template>
  <div>
    <div class="d-flex flex-column bg-background text-on-background">
      <!-- <NavBar class="position-fixed bg-background shadow" style="z-index: 20;" :current-path="route.path" /> -->
      <!-- <div class="mt-24 shadow"> -->
      <div>
        <slot />
      </div>
      <!-- </div> -->
      <!-- <TheFooter /> -->
    </div>
  </div>
</template>
<style></style>
