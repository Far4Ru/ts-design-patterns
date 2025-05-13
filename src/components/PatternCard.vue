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
const handleMount = (editorInstance) => (editor.value = editorInstance)
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
        theme="vs"
        language="typescript"
        height="540px"
        :options="MONACO_EDITOR_OPTIONS"
        @mount="handleMount"
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
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

.pattern-card-title {
  margin-top: 10px;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 15px;
}

.pattern-card-description {
  color: #34495e;
  line-height: 1.5;
}

.pattern-code-block {
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  overflow-x: auto;
}

.pattern-code-block pre {
  margin: 0;
}

.pattern-code-block code {
  font-family: 'Courier New', monospace;
  color: #333;
}

.pattern-notes {
  background-color: #f0f7ff;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
}

.pattern-notes-title {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.1em;
}

.pattern-notes-list {
  margin-bottom: 0;
  padding-left: 20px;
}

.pattern-notes-list li {
  margin-bottom: 5px;
  color: #34495e;
}

.pattern-notes-list li:last-child {
  margin-bottom: 0;
}
</style>
