<template>
<div class="home-wrapper">
<h1 class="hidden">From the River Films - New Orleans Filmmaker Alejandro de los Rios</h1>
<div class="flex-wrap">
  <p class="huge-name">Alejandro de los Rios</p>
  <img class="al-image" alt="alejandro de los rios, from the river films" :src="require('../assets/alejandro-de-los-rios-from-the-river-films.jpg')">
  <div class="info-wrapper">
    <h2 class="info-headline">My past clients include</h2>
    <p class="para">Warner Bros.
      MGM,
      A&E Networks,
      ESPN,
      New Orleans Saints,
      New Orleans Pelicans,
      Bud Lite,
      SeatGeek,
      Deadspin,
      McCann Erickson
      Toshiba International
      </p>
    <h2 class="info-headline">Awards & Laurels</h2>
    <p class="para">
    Jalapeño Andretti - 2017 Cinema on the Bayou Film Festival, 2017 Azalea Film Festival
    </p>
    <p class="para">
    The Death of Music  - Awarded Best Editing and Sound Design 2016 New Orleans 48 Hour Film Festival
    </p>
  </div>
  <p class="tagline">
    I'm a just your typical Nicaraguan-born, Half-Cuban, Half-Venezuelan Filmmaker based in New Orleans.
  </p>
</div>


  </div>
</template>
<script>

export default {
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'About',
  },
};
</script>

<style>
.info-headline {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
    line-height: 24px;
    padding: 3px 15px;
    font-weight: 800;
    margin: 0px;
    background: #fff;
    color: #000;
    display: block;
    margin-top: 30px;
    max-width: 64%;
    margin: 30px auto 0px auto;
}
.para {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 15px;
    line-height: 20px;
    padding: 0px 15px;
    max-width: 64%;
    margin: 0 auto;
    margin-top: 15px;
}
.home-wrapper {
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    max-width: 960px;
    margin: 0 auto;
}

.flex-wrap {
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:flex-end;
   align-items: flex-start;
   padding-right:0px;
   margin-bottom:30px;
}

.huge-name {
    font-family: 'Asset', cursive;
    text-align: left;
    font-size: 70px;
    line-height: 72px;
    width: 1440px;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 50px;
}
.info-wrapper {
  flex-basis:50%;
}
.tagline {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 28px;
    color: #fff;
    text-decoration: none;
    max-width: 770px;
    text-align: center;
    flex-basis: 100%;
    color: #FFCC00;
    margin: 30px auto;
}


img.al-image {
    max-width: 400px;
    flex-basis: 60%;
}



@media (max-width:1440px) {


.tagline {
    font-size: 31px;
    max-width: 800px;
}
}

@media (max-width:1023px) {

.huge-name {
    font-size: 57px;
    line-height: 70px;
    width: 720px;
    margin-top: 60px;
}
.tagline {
    font-size: 22px;
    line-height: 29px;
    max-width: 427px;
}
img.al-image {
    max-width: 300px;
    flex-basis: 40%;
}
}

@media (max-width:767px) {
img.al-image {
    max-width: 150px;
    flex-basis: 60%;
}


  .flex-wrap {
    padding-right: 0px;
}
.huge-name {
    font-size: 26px;
    line-height: 34px;
    width: 100%;
    max-width: 328px;
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.tagline {
    font-size: 17px;
    line-height: 23px;
    max-width: 176px;
    margin: 0px;
    margin-left: 20px;
    margin-right: 20px;
}
.home-wrapper {
    background-position-x: 12%;
}

.info-wrapper {
    -ms-flex-preferred-size: 50%;
    flex-basis: 100%;
    order: 2;
}

}

@media (max-width:420px) {
.huge-name {
    font-size: 29px;
    line-height: 34px;
    max-width: 345px;
    margin: 20px auto;
}


}

@media(max-width:374px) {
  .huge-name {
    font-size: 26px;
    line-height: 34px;
    width: 100%;
    max-width: 320px;
    margin-top: 20px;
    margin-right: 15px;
}

.tagline {
    font-size: 15px;
    line-height: 20px;
    max-width: 243px;
    margin-right: 15px;
}
}


</style>
