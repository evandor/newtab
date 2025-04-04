
export class Tab {
  created: number
  updated: number
  lastActive: number
  activatedCount: number

  createdBy: string | undefined // email or empty

  // from Chrome tab
  chromeTabId: number | undefined
  favIconUrl: string | undefined
  url: string | undefined
  title: string | undefined
  pinned: boolean
  groupId: number

  history: string[] = []

  name: string | undefined
  description: string
  keywords: string
  tags: string[] // Set<string> got issues in indexeddb
  image: string
  date: string
  lastModified: string
  author: string
  // deprecated, will be phased out in 0.5.1
  // use comments instead
  note: string
  scheduledFor: number | undefined
  contentHash: string


  color: string | undefined = undefined

  groupName: string | undefined = undefined

  lastChangeBy: string = ''


  constructor(
    public id: string,
    chromeTab: chrome.tabs.Tab,
  ) {
    this.created = new Date().getTime()
    this.updated = new Date().getTime()
    this.lastActive = new Date().getTime()
    this.activatedCount = 1
    //  this.loadedCount = 0 //?

    this.chromeTabId = chromeTab.id
    this.favIconUrl = chromeTab.favIconUrl
    this.url = chromeTab.url
    this.title = chromeTab.title
    this.pinned = chromeTab.pinned
    this.groupId = chromeTab.groupId
    this.groupName = undefined // to be set from 'outside'

    this.history = [] // not used (yet)
    this.name = undefined
    this.description = ''
    this.keywords = ''
    this.tags = []
    this.image = ''
    this.date = ''
    this.lastModified = ''
    this.author = ''
    this.note = ''
    this.scheduledFor = undefined
    this.contentHash = ''


    this.tags = []

  }


}

Tab.prototype.toString = function tabToString() {
  return `Tab: {id=${this.id}, url=${this.url}, #history=${this.history.length}}`
}
