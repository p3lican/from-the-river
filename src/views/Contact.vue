<template>
<div class="videolist-wrapper">
  <div class="section-headline">
    <h2>Contact</h2>
  </div>
  <a href="mailto:chamo.delosrios@gmail.com">chamo.delosrios@gmail.com</a>
  <formz></formz>
  </div>
</template>

<script>
import formz from '../components/formz.vue'
export default {
  components: {formz},
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Contact'
  }
}
</script>