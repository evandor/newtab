import { IDBPDatabase, openDB } from 'idb';
import { Tabset } from 'src/models/Tabset';
import { useTabsetsStore } from 'stores/tabsetsStore';

class TabsetsPersistence {
  private STORE_IDENT = 'tabsets'

  private db: IDBPDatabase = null as unknown as IDBPDatabase

  getServiceName(): string {
    return this.constructor.name
  }

  async init() {
    this.db = await this.initDatabase()
    await this.loadTabsets()
    return Promise.resolve()
  }

  private async initDatabase(): Promise<IDBPDatabase> {
    const ctx = this
    return await openDB('tabsetsDB', 1, {
      // upgrading see https://stackoverflow.com/questions/50193906/create-index-on-already-existing-objectstore
      upgrade(db) {
        if (!db.objectStoreNames.contains(ctx.STORE_IDENT)) {
          console.log('creating db ' + ctx.STORE_IDENT)
          db.createObjectStore(ctx.STORE_IDENT)
        }
      },
    })
  }

  async loadTabsets(): Promise<any> {
    const tabsets = await this.db.getAll('tabsets')
    tabsets.forEach((ts: Tabset) => {
      useTabsetsStore().setTabset(ts)
    })
    console.log(' ...loaded tabsets, found ', useTabsetsStore().tabsets.size)
    return Promise.resolve()
  }

  save(ts: Tabset) {
    this.db.put(this.STORE_IDENT, ts, ts.id)
      .catch((err:any) => {
        console.error(err)
      })
  }
}

export default new TabsetsPersistence()
