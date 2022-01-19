<template>
  <div v-if="groupDay">
    <span> {{ groupDay }}</span>
  </div>
  <ul class="transactions">
    <transaction-item
      v-for="transaction in transactions"
      :key="transaction.event_id"
      :transaction="transaction"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Transaction from '@/services/api/transactions/models/Transaction';
import moment from 'moment';
import TransactionItem from './PTTransactionItem.vue';

export default defineComponent({
  name: 'PTTransactionsGroup',
  components: {
    TransactionItem,
  },
  props: {
    transactions: { type: Array as PropType<Transaction[]>, default: () => ([]) },
    dayUnix: { type: Number, default: null },
  },
  computed: {
    isToday() {
      return this.dayUnix === moment().startOf('day').unix();
    },

    isYesterday() {
      return this.dayUnix === (moment().startOf('day').unix() - 86400);
    },

    momentDate() {
      return moment(this.dayUnix * 1000);
    },

    groupDay() {
      /*
      * наверняка можно симпатичнее через локали сделать
      * но я и так засиделся
      * */
      if (this.isToday) {
        return 'Сегодня';
      }
      if (this.isYesterday) {
        return 'Вчера';
      }

      return this.dayUnix ? this.momentDate.format('YYYY.MM.DD') : '';
    },
  },
});
</script>

<style lang="css">
.transactions {
}
</style>
