import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { loader } from '@guolao/vue-monaco-editor'

createApp(App).mount('#app')

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs',
  },
})
