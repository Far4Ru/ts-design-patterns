<script setup lang="ts"></script>

<template>
  <div class="control-container">
    <!-- <button @click="$emit('subitem-selected', this.selectedItem.subitems[0])">Prev</button>
    <button @click="$emit('subitem-selected', this.selectedItem.subitems[0])">Next</button> -->
  </div>
</template>

<script lang="ts">
export default {
  props: {
    selectedItem: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
.control-container {
  display: flex;
  justify-content: center;
}

.control-container button {
  margin: 10px 20px 10px 20px;
  width: 48px;
  height: 45px;
  border-radius: 12px;
  background-color: #e0e0ff;
  border: 1px solid #eedeff;
  color: #505850;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}
</style>
