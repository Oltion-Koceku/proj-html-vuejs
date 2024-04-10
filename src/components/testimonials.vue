<script>
import carouselVue from './partials/carousel.vue'


  export default {
    components:{
      carouselVue
    }
  }
</script>

<template>
  <section id="testimonials">
    <div class="container d-flex flex-column align-items-center justify-content-center h-100">
      
      <carouselVue h-100/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#testimonials{
  height: 900px;
  background-image: url("../img/testimonial-background.jpg");
  background-size: cover;
}
</style>