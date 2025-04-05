import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import TabsetsPersistence from 'src/persistence/TabsetsPersistence';
import { Tabset } from 'src/models/Tabset';
import { Tab } from 'src/models/Tab';

export const useTabsetsStore = defineStore('tabsets', () => {

  const tabsets = ref<Map<string, Tab[]>>(new Map<string, Tab[]>())

  const tabset = ref<Tabset | undefined>(undefined)

  const setTabset = (ts: Tabset) => {
    tabsets.value.set(ts.name, ts.tabs)
    tabset.value = ts
    TabsetsPersistence.save(ts)
  }

  const setTabsetByName = (name: string) => {
    const ts = tabsets.value.get(name)
    if (ts) {

    }
  }

  return {
    tabsets,
    tabset,
    setTabset,
    setTabsetByName
  }
})
