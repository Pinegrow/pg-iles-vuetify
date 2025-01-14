<script client:load lang="ts">
  //Move to WalkThrough.vue
  import '@/plugins/youtube.client'
</script>

<script setup lang="ts">
  const { frontmatter, site, route } = usePage()
  const { title, description, ogImage, generator, tags } = frontmatter
  const canonicalUrl = new URL(route.path, site.url)

  useHeadAndMeta({ title, description, ogImage, canonicalUrl, generator, tags })

  const currentPath = computed(() => {
    return route.path
  })
</script>

<template>
  <div>
    <div class="d-flex flex-column bg-background text-on-background">
      <!-- <NavBar class="position-fixed bg-background shadow" style="z-index: 20;" :current-path="currentPath" /> -->
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
