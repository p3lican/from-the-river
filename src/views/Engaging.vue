<template>
<div class="engaging-wrapper">
<h1 class="hidden">From the River Films - New Orleans Filmmaker Alejandro de los Rios</h1>
  <h2>ENGAGING</h2>

  <engaginglist></engaginglist>

  </div>
</template>


<script>

import engaginglist from '../components/engaginglist.vue';

export default {
  name: 'engaging',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Engaging',
  },
  components: { engaginglist },
  data() {
    return {

    };
  },
};
</script>
