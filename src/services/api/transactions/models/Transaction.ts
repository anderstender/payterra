import Entity from '@/models/Entity';
import moment, { Moment } from 'moment';
import { Transform } from 'class-transformer';

export default class Transaction extends Entity {
  description = ''

  event_name = ''

  @Transform(({ value }) => moment(value), { toClassOnly: true })
  created_at: Moment = moment()

  event_id = 0

  currency: Record<string, any> = {}

  account_number!: string

  type = ''

  amount!: number

  get translatedEventName(): string {
    switch (this.event_name) {
      case 'NEW_TRANSACTION':
        return 'Перевод';
      case 'BILL_CREATION':
        return 'Счёт';
      case 'REFUND':
        return 'Возврат';
      default:
        return this.event_name;
    }
  }
}
