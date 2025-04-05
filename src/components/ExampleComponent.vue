<template>
  <q-page style="padding-top: 50px">
    <div class="row" v-for="tab in tabs" :key="tab.id">
      <div class="col-1 q-ma-sm">
        <q-img :src="tab.favIconUrl!" height="28px" widthr="28x" />
      </div>
      <div class="col q-ma-sm">
        <span class="cursor-pointer text-body1 specialtext"
              @click="openURL(tab.url!)">
          {{ tab.title }}
        </span>
      </div>
    </div>
    <q-page-sticky expand position="top" style="height: 35px">
      <div class="row fit" >
        <div class="col-2">
          <TabsetSelection />
        </div>
        <div class="col-8">

        </div>
        <div class="col-2 text-right">
          <div class="row">
            <div class="col-9 text-white q-mt-lg">
              {{ date.formatDate(new Date().getTime(), 'DD.MM.YYYY')}}
            </div>
            <div class="col q-ma-sm q-mt-md">
              <Clock />
            </div>
          </div>
        </div>
      </div>
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Tab } from 'src/models/Tab';
import { useTabsetsStore } from 'stores/tabsetsStore';
import { openURL,date } from 'quasar';
import Clock from 'components/Clock.vue';
import TabsetSelection from 'components/TabsetSelection.vue';

const tabs = ref<Tab[]>([]);

const tabsetsIds: string[] = [...useTabsetsStore().tabsets.keys()];

if (tabsetsIds.length > 0) {
  const t: Tab[] | undefined = useTabsetsStore().tabsets.get(tabsetsIds[0]!);
  if (t) {
    tabs.value = t;
  }
}
</script>

<style scoped>
.specialtext {
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
  1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
</style>
