/*
* скорее всего валюта не привязана к апи транзакций
* поэтому выделим отдельный раздел под общие модели
* */
export type Currency = {
  code: string,
  digital_code: string,
  id: number,
  internal: boolean,
  name: string,
  sign: string,
}
