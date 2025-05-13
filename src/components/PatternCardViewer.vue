<script setup lang="ts">
import PatternCard from './PatternCard.vue'
import PatternCardViewerControls from './PatternCardViewerControls.vue'
</script>

<template>
  <div class="pattern-card-viewer">
    <div v-if="selectedSubItem">
      <PatternCard :selected-sub-item="selectedSubItem" />
      <PatternCardViewerControls />
    </div>
    <div v-else class="pattern-card-viewer-help">
      <p>Выберите пункт меню слева</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    selectedSubItem: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
.pattern-card-viewer {
  padding: 20px;
  background-color: #fff;
  flex-grow: 1;
}

.pattern-card-viewer h2 {
  margin-top: 0;
  color: #333;
}

.pattern-card-viewer p {
  color: #666;
}

.pattern-card-viewer-help {
  margin: 20px;
}

.pattern-card-viewer-help p {
  text-align: center;
}
</style>
