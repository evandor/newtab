<template>
  <router-view />
</template>

<script setup lang="ts">

import TabsetsPersistence from 'src/persistence/TabsetsPersistence';
import { useTabsetsStore } from 'stores/tabsetsStore';

TabsetsPersistence.init()

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (sender.id === "oeocceffjkjgiljgelllkaddapnaafgn") { // tabsets.net
      if (request.message === "getVersion") {
        sendResponse({version: "0.0.1"});
      } else if (request.message === "setTabset") {
        useTabsetsStore().setTabset( request.tabset)
      }
      // sendResponse({version: import.meta.env.PACKAGE_VERSION});
    }
    // if (sender.id === blocklistedExtension)
    //   return;  // don't allow this extension access
    // else if (request.getTargetData)
    //   sendResponse({targetData: targetData});
    // else if (request.activateLasers) {
    //   var success = activateLasers();
    //   sendResponse({activateLasers: success});
    // }
    console.log("request:", request)
    console.log("sender:", sender)
  });


</script>
