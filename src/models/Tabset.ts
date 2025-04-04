import { Tab } from 'src/models/Tab';

export class Tabset {
  id: string

  name: string
  created: number
  updated: number
  tabs: Tab[]

  folders: Tabset[] = []
  folderActive: string | undefined = undefined
  folderParent: string | undefined = undefined

  spaces: string[] // got json problems with set<string>
  view: string = 'grid'
  sorting: string = 'custom'

  bookmarkId: string | undefined = undefined

  importedAt: number | undefined = undefined

  canvas: object | undefined = undefined

  // = description
  page: string | undefined = undefined

  headerDescription: string | undefined = undefined

  window: string = 'current'
  color: string | undefined = undefined
  dynamicUrl: string | undefined = undefined

  // can be set (to the installtion.id) when saving the tabset in order to omit triggering an update
  origin: string = ''

  size: number = 0

  // should be done using firebase events
  //log: TabsetLog[] = []

  loaded: number = 0 // will always be set when the tabset is loaded
  lastChangeBy: string = '' // set for tabsets with sharedReference


  constructor(id: string, name: string, tabs: Tab[] = [], spaces: string[] = []) {

    // assignments
    this.id = id
    this.name = name
    this.created = new Date().getTime()
    this.updated = new Date().getTime()
    this.tabs = tabs
    this.spaces = spaces

    if (!this.view) {
      this.view = 'grid'
    }
    if (!this.folders) {
      this.folders = []
    }
  }


}
