export default class HttpClient {
  defaultPath = ''

  fetchRequestConfig: RequestInit = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  public setDefaultPath(path: string): void {
    this.defaultPath = path;
  }

  public setBearer(bearerToken: string): void {
    (this.fetchRequestConfig.headers as any).Authorization = bearerToken;
  }

  private getPath(path: string): string {
    return `${this.defaultPath}${path}`;
  }

  async get<Result>(path: string): Promise<Result> {
    return await (await fetch(this.getPath(path), {
      ...this.fetchRequestConfig,
      method: 'GET',
    })).json() as Promise<Result>;
  }

  async post<Result, Model = any>(path: string, data: Model): Promise<Result> {
    return await (await fetch(this.getPath(path), {
      ...this.fetchRequestConfig,
      method: 'POST',
      body: JSON.stringify(data),
    })).json() as Promise<Result>;
  }
}
