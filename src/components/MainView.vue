<template>
  <button
    @click="handleClick"
    style="padding: 8px 12px; border: 1px solid #888; color: #fff; background-color: #007acc; border-radius: 4px;"
  >
    Memory Lane N-Back
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainView',
  methods: {
    handleClick() {
      console.log('memory-lane-n-back-main-view click');
    },
  },
});
</script>
