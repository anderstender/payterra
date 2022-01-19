<template>
  <div
    class="pt-amount"
    :class="cssClass"
  >
    {{ displayAmount }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Currency } from '@/models/Currency';
/*
* вынесено отдельно так как вывод суммы также может встречаться по вмей системе
* */

export default defineComponent({
  name: 'PTAmount',
  components: {},
  props: {
    amount: { type: Number, default: null },
    currency: { type: Object as PropType<Currency>, required: true },
  },
  computed: {
    displayAmount() {
      return this.amount !== null ? `${Number(this.amount)} ${this.currency?.sign ?? ''}` : '';
    },

    cssClass() {
      return {
        negative: this.amount !== null && this.amount < 0,
        positive: this.amount !== null && this.amount > 0,
      };
    },
  },
});
</script>

<style lang="css">
.pt-amount {
  color: #fff;
}
.pt-amount.negative {
  color: #D87822;
}
.pt-amount.negative:before {
  content: "- ";
}
.pt-amount.positive {
  color: #39b27c;
}
.pt-amount.positive:before {
  content: "+ ";
}
</style>
