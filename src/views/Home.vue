<template>
<div class="home-wrapper">
<div class="flex-wrap">
<p class="huge-name">Alejandro de los Rios</p>
<p class="tagline">I'm a just your typical Nicaraguan-born, Half-Cuban, Half-Venezuelan Filmmaker based in New Orleans. </p>
</div>


<p class="tagline">I'm a just your typical Nicaraguan-born, Half-Cuban, Half-Venezuelan Filmmaker based in New Orleans. </p>
<p class="tagline">I'm a just your typical Nicaraguan-born, Half-Cuban, Half-Venezuelan Filmmaker based in New Orleans. </p>
<p class="tagline">I'm a just your typical Nicaraguan-born, Half-Cuban, Half-Venezuelan Filmmaker based in New Orleans. </p>
<p class="tagline">I'm a just your typical Nicaraguan-born, Half-Cuban, Half-Venezuelan Filmmaker based in New Orleans. </p>
<p class="tagline">I'm a just your typical Nicaraguan-born, Half-Cuban, Half-Venezuelan Filmmaker based in New Orleans. </p>
<!--<p>My past clients include:
Warner Bros.
MGM,
A&E Networks,
ESPN,
New Orleans Saints,
New Orleans Pelicans,
Bud Lite,
SeatGeek,
Deadspin,
McCann Erickson
Toshiba International</p>

​Awards & Laurels:
<p>Jalapeño Andretti - 2017 Cinema on the Bayou Film Festival, 2017 Azalea Film Festival</p>
<p>The Death of Music  - Awarded Best Editing and Sound Design 2016 New Orleans 48 Hour Film Festival</p>

-->
  </div>
</template>

<style>

.home-wrapper {
    background: red;
    background-image: url(/img/al-bg.aa7d418b.jpg);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
}

.flex-wrap {
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
   align-items: flex-end;
   padding-right:50px;
}

.huge-name {
    font-family: 'Asset', cursive;
    text-align: left;
    font-size: 125px;
    line-height: 158px;
    width: 1440px;
    text-align: right;
}

.tagline  {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 28px;
    color: #fff;
    text-decoration: none;
    max-width: 600px;
    text-align: right;

}

@media (max-width:1440px) {

  .huge-name {
    font-size: 75px;
    line-height: 100px;
    width: 860px;
    margin:0px;
}

.tagline {
    font-size: 21px;
    max-width: 400px;
}
}

@media (max-width:1023px) {

.huge-name {
    font-size: 61px;
    line-height: 70px;
    width: 720px;
    margin-top: 60px;

}

.tagline {
    font-size: 22px;
    line-height: 29px;
    max-width: 427px;
}


  }

@media (max-width:767px) {
  .flex-wrap {
    padding-right: 0px;
}
.huge-name {
    font-size: 29px;
    line-height: 36px;
    width: 100%;
    max-width: 328px;
    margin-top: 20px;
    margin-right: 20px;
}

.tagline {
    font-size: 15px;
    line-height: 20px;
    max-width: 243px;
    margin-right: 20px;
}

}

</style>