<template>
  <div>
    {{ eventName }}: <b>{{ eventId }}</b>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PTTransactionOrderTitle',
  components: {},
  props: {
    eventId: { type: Number, required: true },
    eventName: { type: String, required: true },
  },
});
</script>
