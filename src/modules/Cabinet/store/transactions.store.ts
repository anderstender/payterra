import { createStore } from 'vuex';
import Transaction from '@/services/api/transactions/models/Transaction';
import transactionsApi from '@/services/api/transactions/transactionsApi';

type TransactionsState = {
  transactions: Transaction[],
  page: number,
  count: number,
  countPerPage: number,
}

export default createStore<TransactionsState>({
  state: {
    transactions: [],
    page: 1,
    count: 0,
    countPerPage: 0,
  },
  mutations: {
    setTransactions(state: TransactionsState, transactions: Transaction[]) {
      state.transactions = transactions;
    },
    pushTransactions(state: TransactionsState, transactions: Transaction[]) {
      state.transactions.push(...transactions);
    },
    setPage(state: TransactionsState, page: number) {
      state.page = page;
    },
  },
  actions: {
    async loadTransactions({ commit }, page: number) {
      const requestResult = await transactionsApi.getList(page);
      /*
      * по хорошему это вообще нужно в сам api
      * */
      commit('pushTransactions', requestResult.result);
      commit('setPage', requestResult.page);
    },
    async loadNextPage({ dispatch, state }) {
      dispatch('loadTransactions', state.page + 1);
    },
  },
});
