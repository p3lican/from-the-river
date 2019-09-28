<template>
  <div id="app" data-server-rendered="true">
  <mainnav></mainnav>

<animatedcity></animatedcity>

<keep-alive>
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>
import mainnav from './components/mainnav.vue';
import animatedcity from './components/AnimatedCity.vue';


export default {
  name: 'app',
  metaInfo: {
  // if no subcomponents specify a metaInfo.title, this title will be used
  title: 'Home',
  // all titles will be injected into this template
  titleTemplate: 'From the River Films | Alejandro de los Rios | New Orleans Filmmaker | %s',
  meta: [
    { 
      name: 'description',
      content: "I'm a just your typical Nicaraguan-born, Half-Cuban, Half-Venezuelan, New Orleans Filmmaker. My past clients include: Warner Bros. MGM, A&E Networks, ESPN, the New Orleans Saints, the New Orleans Pelicans, Bud Lite, SeatGeek, Deadspin, McCann Erickson & Toshiba International. Tell me about your project!"
    },
    {name:'og:title',content:'From the River Films | Alejandro de los Rios | New Orleans Filmmaker'},
    {name:'og:type',content:'website'},
    {name:'og:url',content:'http://www.fromtheriverfilms.com'},
    {name:'og:image',content:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/500458/from-the-river-films-logo.jpg'}
  ]
  },
  components: { mainnav, animatedcity },
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
  margin-top: 70px;

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

h2 {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 48px;
    color: #fff;
    text-decoration: none;
    color: #fff;
    display: inline-flex;
    width: 100%;
    max-width: 350px;
    text-align: center;
    justify-content: center;
    align-items: center;
}

/* -------------- loader3 -------------- */

.loader3{
  position: relative;
  width: 150px;
  height: 20px;

  top: 45%;
  top: -webkit-calc(50% - 10px);
  top: calc(50% - 10px);
  left: 25%;
  left: -webkit-calc(50% - 75px);
  left: calc(50% - 75px);
}

.loader3:after{
  content: "LOADING ...";
  color: #fff;
  font-family:  Lato,"Helvetica Neue" ;
  font-weight: 200;
  font-size: 16px;
  position: absolute;
  width: 100%;
  height: 20px;
  line-height: 20px;
  left: 0;
  top: 0;
  background-color: #000000;
  z-index: 1;
}

.loader3:before{
  content: "";
  position: absolute;
  background-color: #fff;
  top: -5px;
  left: 0px;
  height: 30px;
  width: 0px;
  z-index: 0;
  opacity: 1;
  -webkit-transform-origin:  100% 0%;
      transform-origin:  100% 0% ;
  -webkit-animation: loader3 10s ease-in-out infinite;
      animation: loader3 10s ease-in-out infinite;
}



@-webkit-keyframes loader3{
    0%{width: 0px;}
    70%{width: 100%; opacity: 1;}
    90%{opacity: 0; width: 100%;}
    100%{opacity: 0;width: 0px;}
}

@keyframes loader3{
    0%{width: 0px;}
    70%{width: 100%; opacity: 1;}
    90%{opacity: 0; width: 100%;}
    100%{opacity: 0;width: 0px;}
}



@media (max-width:420px) {
  h2 {
      margin: 10px;
      margin: 10px;
      font-size: 20px;
  }
}
</style>
