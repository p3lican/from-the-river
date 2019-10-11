<template>
<div class="commercial-wrapper">
<h1 class="hidden">From the River Films - New Orleans Filmmaker Alejandro de los Rios</h1>
  <h2>COMMERCIAL</h2>

  <commerciallist></commerciallist>

  </div>
</template>


<script>

import commerciallist from '../components/commerciallist.vue';

export default {
  name: 'commercial',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Commercial',
  },
  components: { commerciallist },
  data() {
    return {

    };
  },
};
</script>
