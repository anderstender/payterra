<template>
  <li class="pt-transaction-item transaction">
    <details>
      <summary>
        <PTTransactionOrderTitle
          class="order"
          :event-id="transaction.event_id"
          :event-name="transaction.translatedEventName"
        />
        <div class="time">
          <PTDateTime
            format="HH:mm"
            :date-time="transaction.created_at"
          />
        </div>
        <div class="account">
          {{ transaction.account_number }}
        </div>
        <PTAmount
          class="amount"
          :amount="transaction.amount"
          :currency="transaction.currency"
        />
      </summary>
      <p class="description">
        {{ description }}
      </p>
    </details>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Transaction from '@/services/api/transactions/models/Transaction';
import PTAmount from '@/components/Amount/PTAmount.vue';
import PTDateTime from '@/components/Date/PTDateTime.vue';
import PTTransactionOrderTitle from '@/components/Transactions/PTTransactionOrderTitle.vue';

export default defineComponent({
  name: 'PTTransactionItem',
  components: {
    PTAmount,
    PTDateTime,
    PTTransactionOrderTitle,
  },
  props: {
    transaction: { type: Object as PropType<Transaction>, required: true },
  },
  computed: {
    description() {
      return this.transaction.description || '';
    },
  },
});
</script>

<style lang="css">
  .pt-transaction-item .amount {
    order: 2;
    font-size: 18px;
    font-weight: 800;
    flex-basis: 45%;
    text-align: right;
  }
</style>
