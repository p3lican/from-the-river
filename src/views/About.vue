<template>
<div class="about-wrapper">
  <h2>About Page</h2>
  <videolist></videolist>
  </div>
</template>


<script>
import videolist from '../components/videolist.vue'
export default {
  name: 'app',
  components: {videolist},
  data() {
    return {
  
    };
  },
};
</script>