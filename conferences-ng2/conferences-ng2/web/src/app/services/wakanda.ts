import {WakandaClient} from 'wakanda-client/browser';

export class WakandaService {

  private _client: WakandaClient;
  private _catalog;

  constructor() {
    this._client = new WakandaClient();
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
