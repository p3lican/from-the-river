<template>
<div class="engaging-wrapper">
  <h2>ENGAGING</h2>

  <engaginglist>


  </engaginglist>

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
