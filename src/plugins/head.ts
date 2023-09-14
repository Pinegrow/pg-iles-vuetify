// import {createHead} from '@vueuse/head'

import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'

import type { Script } from '@unhead/schema'
type TurboScript = Script & { once: true }

const fonts =
  'https://fonts.googleapis.com/css?family=DM+Sans:400,500,700|Inter:100,200,300,400,500,600,700,800,900&display=swap'
const googleapis = 'https://fonts.googleapis.com'
const gstatic = 'https://fonts.gstatic.com'

export const headConfig = ({ frontmatter, site }) => {
  return {
    htmlAttrs: { lang: 'en-US' },

    // Other meta tags are added in MetaTags.vue using the Head componentsummary_large_image
    meta: [
      { property: 'charset', content: 'utf-8' },
      {
        property: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { property: 'author', content: site.author },
      { property: 'keywords', content: computed(() => frontmatter.tags) },
    ],
    script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    link: [
      { rel: 'dns-prefetch', href: googleapis },
      { rel: 'dns-prefetch', href: gstatic },
      { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
      { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: fonts,
      },
    ],
    noscript: [
      `<link rel="stylesheet" crossorigin="anonymous" href="${fonts}" />`,
    ],
  }
}

// export default createHead(headConfig)
