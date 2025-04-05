<template>
  <div class="q-ml-lg">
    <q-select v-if="options.length > 1"
              borderless
              v-model="model"
              :options="options"
              @update:model-value="(val) => changeTabset(val)"
              label="Tabset" color="white" label-color="white" />
  </div>
</template>

<script lang="ts" setup>

import { ref, watchEffect } from 'vue';
import { useTabsetsStore } from 'stores/tabsetsStore';

const model = ref<string | undefined>(undefined);

const options = ref<string[]>([]);

watchEffect(() => {
  options.value = [...useTabsetsStore().tabsets.keys()];
  const currentTabset = useTabsetsStore().tabset;
  if (currentTabset) {
    model.value = currentTabset.name;
  }
});

const changeTabset = (val: string) => {
  console.log("changed", val);
  useTabsetsStore().setTabsetByName(val)
}
</script>
