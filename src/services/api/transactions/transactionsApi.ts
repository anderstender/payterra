import authClient from '@/services/httpClients/AuthClient';
import { ListResult } from '@/services/httpClients/models/ListResult';
import Transaction from '@/services/api/transactions/models/Transaction';

class TransactionsApi {
  path = '/cabinet/protected/transactions/'

  private getPathWithPage(page: number) : string {
    return `${this.path}page/${page}`;
  }

  getList(pageNumber: number): Promise<ListResult<Transaction>> {
    return authClient.get<ListResult<Transaction>>(this.getPathWithPage(pageNumber))
      .then((data: ListResult<Transaction>) => {
        const {
          count,
          countPerPage,
          page,
          result,
        } = data;
        return {
          count,
          countPerPage,
          page,
          result: Transaction.parseArray(result),
        };
      });
  }
}

export default new TransactionsApi();
