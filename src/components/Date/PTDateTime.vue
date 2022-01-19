<template>
  <time
    class="pt-date-time"
    :datetime="dateTime"
  >
    {{ formattedDate }}
  </time>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import moment, { Moment } from 'moment';

export default defineComponent({
  name: 'PTDateTime',
  props: {
    dateTime: { type: Object as PropType<Moment>, required: true },
    format: { type: String, default: 'YYYY.MM.DD HH:mm' },
  },
  computed: {
    formattedDate() {
      return this.dateTime.format(this.format);
    },
  },
});
</script>

<style lang="css">
.pt-date-time {
}
</style>
