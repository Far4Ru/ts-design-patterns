<script setup lang="ts">
import PatternCardViewer from './components/PatternCardViewer.vue'
import PatternMenu from './components/PatternMenu.vue'
</script>

<template>
  <main class="container">
    <PatternMenu @subitem-selected="handleSubItemSelected" />
    <PatternCardViewer :selected-sub-item="selectedSubItem" />
  </main>
</template>

<script lang="ts">
export default {
  components: {
    PatternCardViewer,
    PatternMenu,
  },
  data() {
    return {
      selectedSubItem: null,
    }
  },
  methods: {
    handleSubItemSelected(item) {
      this.selectedSubItem = item
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  /* height: 100vh; */
  font-family: Arial, sans-serif;
}
</style>
