<template>
  <div class="pt-transactions-group">
    <PTTransactionsGroup
      v-for="transactionPair in transactionsGroups"
      :key="transactionPair[0]"
      :day-unix="transactionPair[0]"
      :transactions="transactionPair[1]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Transaction from '@/services/api/transactions/models/Transaction';
import PTTransactionsGroup from '@/components/Transactions/PTTransactionsGroup.vue';

export default defineComponent({
  name: 'PTTransactions',
  props: {
    transactions: { type: Array as PropType<Transaction[]>, default: () => ([]) },
  },
  components: {
    PTTransactionsGroup,
  },
  computed: {
    transactionsGroups(): [number, Transaction[]][] {
      return Object.entries(this.transactions.reduce((acc, transaction) => {
        const dayTimestamp = Number(transaction.created_at.clone().startOf('day').unix());
        if (!acc[dayTimestamp]) {
          acc[dayTimestamp] = [];
        }
        acc[dayTimestamp].push(transaction);
        return acc;
      }, {})).map((pair) => [Number(pair[0]), pair[1]]).sort((a, b) => b[0] - a[0]);
    },
  },
});
</script>

<style lang="css">
.pt-transactions-group {
}
</style>
