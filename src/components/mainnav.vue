<template>
  <nav class="main-nav">
  <img alt="From The River Films Logo" src="../assets/river-logo.png">
      <router-link to="/">About</router-link> <span>|</span>
      <router-link to="/narrative">Narrative</router-link> <span>|</span>
      <router-link to="/documentary">Documentary</router-link> <span>|</span>
      <router-link to="/commercial">Commercial</router-link> <span>|</span>
      <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'mainnav',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav.main-nav {
    position: fixed;
    width: 100%;
    background: #fff;
    color:#000;
    font-size: 32px;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:15px 5px;
    z-index: 3;
}

nav.main-nav > a {
    flex: 1;
    max-width: 160px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 18px;
    color:#000;

    text-decoration: none;
}
a.router-link-exact-active.router-link-active {
    color: #CF142B!important;
}

@media (max-width:767px) {
  nav.main-nav {
    padding: 10px 0px;
}
  nav.main-nav > img {
    max-width: 40px;
}

nav.main-nav > a {
    max-width: 80px;
    font-size: 12px;
}

nav.main-nav > a:first-of-type {
    max-width: 40px;
    font-size: 12px;
}
nav.main-nav > a:nth-of-type(2) {
    max-width: 62px;
    font-size: 12px;
}

nav.main-nav > a:nth-of-type(4) {
    max-width: 70px;
    font-size: 12px;
}
nav.main-nav > a:nth-of-type(5) {
    max-width: 50px;
    font-size: 12px;
}

}


@media (max-width:400px) {
nav.main-nav > img{
    max-width: 32px;
}
}


</style>
