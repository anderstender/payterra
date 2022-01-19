<template>
  <div class="pt-transactions-group">
    <PTTransactionsGroup
      v-for="unix in groupsKeys"
      :key="unix"
      :day-unix="unix"
      :transactions="transactionsGroups[unix]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Transaction from '@/services/api/transactions/models/Transaction';
import PTTransactionsGroup from '@/components/Transactions/PTTransactionsGroup.vue';

export default defineComponent({
  name: 'PTTransactions',
  components: {
    PTTransactionsGroup,
  },
  props: {
    transactions: { type: Array as PropType<Transaction[]>, default: () => ([]) },
  },
  computed: {
    transactionsGroups(): {[key: number]: Transaction[]} {
      return this.transactions.reduce((acc, transaction) => {
        const dayTimestamp = transaction.created_at.clone().startOf('day').unix();
        if (!acc[dayTimestamp]) {
          acc[dayTimestamp] = [];
        }
        acc[dayTimestamp].push(transaction);
        return acc;
      }, {} as unknown as {[key: number]: Transaction[]});
    },
    groupsKeys() {
      return Object.keys(this.transactionsGroups).map((key) => Number(key)).sort((a, b) => b - a);
    },
  },
});
</script>

<style lang="css">
.pt-transactions-group {
}
</style>
