<template>
  <div>
    <div class="row" v-for="tab in tabs" :key="tab.id">
      <div class="col-1 q-ma-sm">
        <q-img :src="tab.favIconUrl!" height="20px" widthr="20x" />
      </div>
      <div class="col q-ma-sm">
        <span class="cursor-pointer" @click="openURL(tab.url!)">
          {{ tab.title }}!
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Meta } from './models';
import { Tab } from 'src/models/Tab';
import { useTabsetsStore } from 'stores/tabsetsStore';
import { openURL } from 'quasar';

interface Props {
  title: string;
  meta: Meta;
  active: boolean;
};

const props = withDefaults(defineProps<Props>(), {});

const tabs = ref<Tab[]>([]);

const tabsetsIds: string[] = [...useTabsetsStore().tabsets.keys()];

if (tabsetsIds.length > 0) {
  const t: Tab[] | undefined = useTabsetsStore().tabsets.get(tabsetsIds[0]!);
  if (t) {
    tabs.value = t;
  }
}
const clickCount = ref(0);

function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

</script>
