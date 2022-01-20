<template>
  <report />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Report from '@/modules/Report/Report.vue';

export default defineComponent({
  name: 'App',
  components: {
    Report,
  },
});
</script>
