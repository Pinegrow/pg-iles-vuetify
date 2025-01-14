import 'uno.css'
import '@/assets/css/main.css'
import 'prismjs/themes/prism-tomorrow.css'

import { defineApp } from 'iles'
import pinia from '@/plugins/pinia'

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia)
  },
})
