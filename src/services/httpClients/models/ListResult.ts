export interface ListResult<Model> {
  count: number,
  countPerPage: number,
  page: number,
  result: Model[]
}
