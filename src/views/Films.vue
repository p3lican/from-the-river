<template>
<div class="about-wrapper">
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
