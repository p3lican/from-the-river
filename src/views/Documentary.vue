<template>
<div class="documentary-wrapper">
<h1 class="hidden">From the River Films - New Orleans Filmmaker Alejandro de los Rios</h1>
  <h2>DOCUMENTARY</h2>

  <documentarylist></documentarylist>

  </div>
</template>


<script>

import documentarylist from '../components/documentarylist.vue';

export default {
  name: 'documentary',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Engaging',
  },
  components: { documentarylist },
  data() {
    return {

    };
  },
};
</script>
