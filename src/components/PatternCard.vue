<script setup lang="ts">
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { shallowRef } from 'vue'

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  minimap: {
    enabled: false,
  },
}

const editor = shallowRef()

const changeEditorTheme = () => {
  const themeIsDark = window.matchMedia('(prefers-color-scheme: dark)')
  const newTheme = themeIsDark.matches ? 'vs-dark' : 'vs';
  editor.value._themeService.setTheme(newTheme)
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeEditorTheme);

const handleMount = (editorInstance) => {
  editor.value = editorInstance
  changeEditorTheme()
}
</script>

<template>
  <div class="pattern-card">
    <h2 :title="selectedSubItem.en_title" class="pattern-card-title">
      {{ selectedSubItem.title }}
    </h2>
    <p v-if="selectedSubItem.description" class="pattern-card-description">
      {{ selectedSubItem.description }}
    </p>

    <div v-if="selectedSubItem.code" class="pattern-code-block">
      <vue-monaco-editor
        v-model:value="mutableValue"
        language="typescript"
        height="100%"
        :options="MONACO_EDITOR_OPTIONS"
        @mount="handleMount"
        class="pattern-card-editor"
      />
    </div>

    <div v-if="selectedSubItem.notes.length > 0" class="pattern-notes">
      <h3 class="pattern-notes-title">Применение:</h3>
      <ul class="pattern-notes-list">
        <li v-for="(note, index) in selectedSubItem.notes" :key="index">{{ note }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: { VueMonacoEditor },
  props: {
    selectedSubItem: {
      type: Object,
      default: null,
    },
    codeTheme: {
      type: String,
      default: "vs",
    },
  },
  computed: {
    mutableValue: {
      get() {
        return this.selectedSubItem.code
      },
      set() {},
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.pattern-card {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 12px;
  background-color: var(--color-background);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

@media (max-width: 1130px) {
  .pattern-card {
    max-width: 600px;
  }
}

@media (max-width: 1024px) {
  .pattern-card {
    max-width: 800px;
  }
  .pattern-code-block {
    background-color: var(--color-border);
    border-radius: 8px;
    padding: 15px;
    margin: 15px 0;
    overflow-x: auto;
    height: 45vh;
  }
}

@media (max-width: 900px) {
  .pattern-card {
    max-width: unset;
    width: 100vw;
    margin: 0px;
  }
  .pattern-card-title {
    margin-top: 40px;
  }
}

.pattern-card-title {
  margin-top: 10px;
  color: var(--color-heading);
  text-align: center;
  margin-bottom: 15px;
}

.pattern-card-description {
  color: var(--color-text);
  line-height: 1.5;
}

.pattern-code-block {
  background-color: var(--color-border);
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  overflow-x: auto;
  height: 540px;
}

.pattern-notes {
  background-color: var(--color-note-background);
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
}

.pattern-notes-title {
  margin-top: 0;
  color: var(--color-heading);
  font-size: 1.1em;
}

.pattern-notes-list {
  margin-bottom: 0;
  padding-left: 20px;
}

.pattern-notes-list li {
  margin-bottom: 5px;
  color: var(--color-text);
}

.pattern-notes-list li:last-child {
  margin-bottom: 0;
}
</style>
