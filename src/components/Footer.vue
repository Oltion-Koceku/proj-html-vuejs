<script>
import { store } from '../data/store';
import { footerJs } from '../data/footerTopJs';
import buttonvue from './partials/button.vue';

export default {
  data() {
    return {
      store,
      footerJs,
      footer: {},
      text:"Book now"
    };
  },

  components: {
    buttonvue
  },

  methods: {
    json() {
      this.footer = this.footerJs[0].data; // Estrai i dati dal primo oggetto nell'array
    },
  },
  mounted() {
    this.json();
    console.log(this.footer);
  },
};
</script>

<template>
  <div class="footer-top">
    <div class="container">
      <div class="row row-cols-4 pt-5">
        <div v-for="(e, i) in footer" :key="i" class="col">

          <div v-if="e.id === 0" class="drive">
            <img class="w-75 mb-2" :src="`src/img/${e.url}`" alt="">
            <p>{{ e.text }}</p>
          </div>

          <div v-if="e.id === 1" class="contact">
            <div class="title">{{ e.title }}</div>
            <div class="info d-flex">

              <div class="font mt-3">
                <div v-for="(ico, i) in e.data" :key="i" v-html="ico.fontAwsome" class="icon"> </div>
              </div>
              <div class="text mt-3">
                <div v-for="(ico, i) in e.data" :key="i">{{ ico.text }} </div>
              </div>


            </div>
          </div>
          <div v-if="e.id === 2" class="courses">
            <div class="title">{{ e.title }}</div>
            <div class="info d-flex">
              <div class="font mt-3">
                <div v-for="(cour, i) in e.textCourses" :key="i" v-html="e.fontAwsome" class="icon"> </div>
              </div>
              <div class="text mt-3">
                <div v-for="(cour, i) in e.textCourses" :key="i" >{{ cour }} </div>
              </div>
            </div>
          </div>

          <div v-if="e.id === 3" class="img w-100 d-flex flex-column align-items-center justify-content-center">
            <img class="w-100 mb-5" :src="`src/img${e.url}`" alt="">
            <div class="butt  ">
              <buttonvue :text = text />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container d-flex align-items-center h-100 justify-content-between ">
      <div class="text">
        <p><i class="fa-regular fa-copyright"></i> Copyright 2012 - 2020 | Avada Theme by <span>ThemeFusion</span> | All Rights Reserved | Powered by <span>WordPress</span></p>
      </div>
      <div class="icon text-white">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  </div>
</template>






<style scoped lang="scss">
@use '../assets/scss/partials/_variables.scss' as *;


.footer-top {
  height: 450px;
  background-image: url("../img/footer-background-color.jpg");
  background-size: cover;

  .col {
    color: $athensgray;
    .courses{
      .info{
        color: $bayleaf;
      }
    }
    .title {
      font-size: 20px;
      font-weight: 600;
      color: white;
    }

    .icon {
      height: 50px;
      font-size: 18px;
      margin-right: 15px;
    }

    .text {
      div {
        height: 50px;
      }
    }
  }

}

.footer-bottom{
  height: 150px;
  background-color: $aztec;
  color: $gumbo;
  .text{
    p{
      span{
        color: $bayleaf
        ;
      }
    }
  }
  .icon{
    i{
      margin-left: 25px;
    }
  }
}
</style>
