<script setup lang="ts">
  /* Vuetify useTheme will not work with SSR enabled, more info - https://vuetify-nuxt-module.netlify.app/guide/server-side-rendering.html#vuetify-themes */
  // import { useCustomTheme } from '~/composables/custom-theme'
  // const { isDark } = useCustomTheme()

  /* Update on using the above technique - We now use SSR HTTP Client hints technique instead of the above - https://vuetify-nuxt-module.netlify.app/guide/server-side-rendering.html#ssr-http-client-hints */

  import { getCurrentInstance } from 'vue'
  import vuetify from '@/plugins/vuetify'
  import { useHero } from '@/composables/hero'

  const { heroImageSrc } = useHero()

  const app = getCurrentInstance().appContext.app
  app.use(vuetify)
</script>

<template>
  <v-app>
    <v-main>
      <SampleCard />
    </v-main>
  </v-app>
</template>

<style></style>
