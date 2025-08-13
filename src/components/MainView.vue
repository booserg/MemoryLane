<template>
  <div class="dual-n-back-container">
    <div class="grid-container">
      <div
        v-for="(cell, index) in cells"
        :key="index"
        class="grid-cell"
        :class="{ 'marked': cell.marked }"
      ></div>
    </div>
    <div class="button-container">
      <button @click="handlePositionClick" class="action-button">Position</button>
      <button @click="handleSoundClick" class="action-button">Sound</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Cell {
  marked: boolean;
}

export default defineComponent({
  name: 'MainView',
  data() {
    return {
      cells: Array.from({ length: 9 }, (): Cell => ({ marked: false }))
    };
  },
  methods: {
    handlePositionClick() {
      console.log('Position button clicked');
    },
    handleSoundClick() {
      console.log('Sound button clicked');
    },
    setCell(row: number, col: number) {
      if (row < 0 || row > 2 || col < 0 || col > 2) {
        console.error('Invalid cell coordinates. Row and col must be between 0 and 2.');
        return;
      }
      
      this.cells.forEach(cell => cell.marked = false);
      
      const index = row * 3 + col;
      this.cells[index].marked = true;
    }
  },
  mounted() {
    (window as any).setCell = this.setCell;
  }
});
</script>
