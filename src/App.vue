<template>
  <div id="app" data-server-rendered="true">
  <mainnav></mainnav>


    <router-view></router-view>
  </div>
</template>

<script>
import mainnav from './components/mainnav.vue';

export default {
  name: 'app',
  components: { mainnav },
  data() {
    return {
      msg: 'FROM THE RIVER FILMS',
    };
  },
};
</script>

<style>

body {
    background-color: #000;
    color:#fff;
    margin:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 120px;

}

.nooverflow {
  overflow-y:hidden;
}


h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
}
</style>
