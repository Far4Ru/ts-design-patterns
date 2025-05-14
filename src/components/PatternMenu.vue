<template>
  <div class="pattern-menu">
    <div v-show="!isMenuVisible && isMinimized">
      <button @click="toggleMenu" class="pattern-menu-burger">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </button>
    </div>
    <div class="pattern-menu-container" v-show="isMenuVisible || !isMinimized">
      <h3>Паттерны проектирования</h3>
      <h4>TypeScript</h4>
      <ul>
        <li class="pattern-menu-list-item" v-for="(item, index) in menuItems" :key="index">
          <p :title="item.en_title" class="pattern-menu-list-item-title" @click="toggleSubitems(index)">
            {{ item.title }}
          </p>
          <transition name="slide">
            <ul v-if="item.showSubitems">
              <li
                class="pattern-menu-sublist-item"
                v-for="(item, index) in item.subitems"
                :key="index"
              >
                <p
                  @click="handleItem(item)"
                  :title="item.en_title"
                  class="pattern-menu-sublist-item-title"
                >
                  {{ item.title }}
                </p>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { MENU_ITEMS } from './config'
export default {
  emits: ['subitem-selected'],
  data() {
    return {
      menuItems: MENU_ITEMS,
      isMenuVisible: true,
      isMinimized: true,
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.toggleSubitems(0);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleItem(item) {
      this.isMenuVisible = false
      this.$emit('subitem-selected', item)
    },
    toggleMenu() {
      this.isMenuVisible = true
    },
    handleResize() {
      this.isMinimized = window.innerWidth <= 1024
    },
    toggleSubitems(id) {
      const item = this.menuItems[id];
      if (item) {
        item.showSubitems = !item.showSubitems;
      }
    }
  }
}
</script>

<style scoped>
.pattern-menu {
  position: relative;
  width: 260px;
  flex-shrink: 0;
  max-height: 100vh;
  overflow-y: auto;
}

.pattern-menu-burger {
  margin: 20px;
  background-color: var(--color-border);
  border: 1px solid var(--color-border-hover);
}

.pattern-menu-container {
  padding: 20px 10px;
  background-color: var(--color-menu-background);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: unset;
}

@media (max-width: 1024px) {
  .pattern-menu {
    position: fixed;
    z-index: 30;
    width: 100%;
  }

  .pattern-menu-container {
    height: 100vh;
  }
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
  user-select: none;
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

.slide-enter-active, .slide-leave-active {
  transition: max-height 0.3s ease;
  max-height: 500px;
}

.slide-enter, .slide-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
