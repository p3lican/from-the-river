<template>
<div class="contact-wrapper">
<h1 class="hidden">From the River Films - New Orleans Filmmaker Alejandro de los Rios</h1>
  <div class="section-headline">
    <h2>Contact</h2>
  </div>
  <a class="email-text" href="mailto:chamo.delosrios@gmail.com">chamo.delosrios@gmail.com</a>
  <formz></formz>
  </div>
</template>

<script>
import formz from '../components/formz.vue';

export default {
  components: { formz },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Contact',
  },
};
</script>

<style>
.contact-wrapper {
  width:100%;
}

a.email-text {
    font-size: 40px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    color: gold;
    margin: 60px;
    display: block;
    margin-top: 0px;
}

@media (max-width:767px) {
a.email-text {
    font-size: 20px;
    margin: 30px 10px;
    margin-top: 0px;
}
}
</style>
