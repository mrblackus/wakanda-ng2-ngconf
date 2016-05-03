import {WakandaClient} from 'wakanda-client/browser/no-promise';

export class WakandaService {
  
  private _client: WakandaClient;
  private _catalog: any;
  
  constructor() {
    this._client = new WakandaClient('http://localhost:8081');
    this._catalog = null;
  }
  
  get catalog() {
    if (!this._catalog) {
      return this._client.getCatalog().then(c => {
        this._catalog = c;

        return c;
      });
    }

    return Promise.resolve(this._catalog);
  }

  get directory() {
    return this._client.directory;
  }
}