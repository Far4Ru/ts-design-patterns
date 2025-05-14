<template>
  <div class="pattern-menu">
    <div class="pattern-menu-container">
      <h3>Паттерны проектирования</h3>
      <h4>TypeScript</h4>
      <ul>
        <li class="pattern-menu-list-item" v-for="(item, index) in menuItems" :key="index">
          <p :title="item.en_title" class="pattern-menu-list-item-title">
            {{ item.title }}
          </p>
          <ul>
            <li
              class="pattern-menu-sublist-item"
              v-for="(item, index) in item.subitems"
              :key="index"
            >
              <p
                @click="$emit('subitem-selected', item)"
                :title="item.en_title"
                class="pattern-menu-sublist-item-title"
              >
                {{ item.title }}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { MENU_ITEMS } from './config'
export default {
  data() {
    return {
      menuItems: MENU_ITEMS,
    }
  },
}
</script>

<style scoped>
.pattern-menu {
  width: 260px;
  flex-shrink: 0;
}
.pattern-menu-container {
  padding: 20px 10px;
  background-color: var(--color-menu-background);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.pattern-menu h3 {
  color: var(--color-heading);
  margin-top: 5px;
  text-align: center;
}

.pattern-menu h4 {
  text-align: center;
  margin-bottom: 20px;
}

.pattern-menu ul {
  list-style: none;
  padding: 0;
}

.pattern-menu-list-item {
  cursor: pointer;
  border-radius: 4px;
}

.pattern-menu-list-item-title {
  color: var(--color-heading);
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.pattern-menu-list-item-title:hover {
  background-color: var(--color-border-hover);
}

.pattern-menu-sublist-item {
  cursor: pointer;
  padding: 0px 0px 0px 10px;
  border-radius: 4px;
}

.pattern-menu-sublist-item-title {
  cursor: pointer;
  padding: 5px 0px 5px 10px;
  border-radius: 4px;
}

.pattern-menu-sublist-item-title:hover {
  background-color: var(--color-border-hover);
}
</style>
