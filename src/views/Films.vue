<template>
<div class="about-wrapper">
<h1 class="hidden">From the River Films - New Orleans Filmmaker Alejandro de los Rios</h1>
  <h2>FILMS</h2>

  <videolist>


  </videolist>

  </div>
</template>


<script>
import videolist from '../components/videolist.vue';

export default {
  name: 'films',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Films',
  },
  components: { videolist },
  data() {
    return {

    };
  },
};
</script>
