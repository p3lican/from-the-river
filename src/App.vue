<template>
  <div id="app" data-server-rendered="true">
  <mainnav></mainnav>

    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Work</router-link> |
      <router-link to="/contact">Contact</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import mainnav from './components/mainnav.vue'
export default {
  name: 'app',
  components: {mainnav},
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
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 0px;

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
  color: #42b983;
}
</style>
