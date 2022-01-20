<template>
  <div class="report">
    <PTTransactionsGroup :transactions="transactions" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Transaction from '@/services/api/transactions/models/Transaction';
import PTTransactionsGroup from '@/components/Transactions/PTTransactions.vue';
import transactionsStore from './store/transactions.store';

export default defineComponent({
  name: 'Report',
  components: {
    PTTransactionsGroup,
  },
  props: {},
  setup() {
    transactionsStore.dispatch('loadTransactions', 1);
  },
  computed: {
    transactions(): Transaction[] {
      return transactionsStore.state.transactions;
    },
  },
});
</script>

<style lang="css">
  .report {
    margin: 40px 0;
  }
  .report div > div {
    padding: 0 10px;
    text-align: left;
    color: #848497;
  }
  .report ul li {
    position: relative;
    background: #27283C;
    margin-top: 10px;
    padding: 10px;
  }
  .report ul li:before {
    width: 40px;
    height: 40px;
    left: 10px;
    top: 16px;
    border-radius: 50%;
    background-color: #24A84D;
  }
  .report ul li:after {
    width: 36px;
    height: 36px;
    left: 12px;
    top: 18px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3207673/credit-card--white.svg);
  }
  .report ul li summary {
    padding-left: 50px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
  }
  .report ul li summary::-webkit-details-marker {
    display: none;
  }
  .report ul li div {
    line-height: 26px;
  }
  .report ul li p {
    text-align: left;
    color: #587d6c;
  }
  .report ul li .order {
    order: 1;
    flex-basis: 55%;
    text-align: left;
  }

  .report ul li .time {
    order: 3;
    flex-basis: 30%;
    text-align: left;
  }
  .report ul li .account {
    order: 4;
    flex-basis: 70%;
    text-align: right;
  }
  .report ul .description {
    margin-top: 10px;
    padding-bottom: 10px;
    padding: 10px;
    background-color: #CCC;
    border-radius: 4px;
    overflow: hidden;
    color: #212121;
  }
  .report ul .description div {
    padding: 10px;
  }
  .report ul .description div:first-child {
    background-color: #58B4B4;
  }
  .report ul .description a {
    color: #9B51E0;
  }
</style>
