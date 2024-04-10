<script>
import { testimonial } from '../../data/testimonials';

export default {
  data() {
    return {
      testimonial,
      counter: 0
    }
  },
  methods: {
    autoSlider() {
      setInterval(() => {
        if (this.counter < this.testimonial.length - 1) {
          this.counter++
        } else {
          this.counter = 0
        }
      }, 3000);
    }
  },
  mounted() {
    this.autoSlider();
  }
}
</script>


<template>
  <div class="carousel  w-50 text-center mt-5">
    <h2 class="mt-5">Testimonianze</h2>
    <div v-for="(e, i) in testimonial" :class="{ 'active': counter === i, 'd-none': counter !== i }" :key="i"
      class="text-img d-flex flex-column align-items-center text-center mt-3">
      <p>{{ e.text1 }}</p>
      <img class="mb-5 mt-5" :src="(`src/img/${e.url}`)" alt="">
      <p>{{ e.text2 }}</p>
      <h3 class="mt-3 mb-3">{{ e.name }}</h3>
      <div class="indicator">
        <span v-for="(item, index) in testimonial" :key="index" :class="{ active2: index === counter }"></span>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/_variables.scss' as *;

.carousel {
  h3 {
    color: $gumbo;
    font-weight: 600;
    font-size: 22px;
  }

  p {
    font-size: 21px;
    font-weight: 500;
    color: $gumbo;
  }

  .active {
    display: block;
  }

  .active2 {
    display: block;
    background-color: grey !important;
  }

  .text-img img {
    width: 200px;

  }

  .indicator {
    margin-top: 10px;

    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 5px;
      border: 1px solid grey;
      background-color: transparent;
    }
  }



}
</style>
