<script>
import {store} from '../data/store'
import buttonVue from './partials/button.vue'
  export default {
    data(){
      return{
        store,
        textButton: "book now"
      }
    },

    components:{
      buttonVue
    }
  }
</script>


<template>
  <section id="jumbo">
    <div class="container w-100 h-100">
      <div class="title d-flex justify-content-center flex-column h-100 text-white">
        <h1>Drive With Avada</h1>
        <p>We offer the finest driving tuition money can buy</p>
      </div>
      <div class="butt d-flex justify-content-center align-items-center  position-absolute "><buttonVue class="bt" :text = this.textButton /></div>
      
    </div>
  </section>
</template>



<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;
  #jumbo{
    padding-top: 160px;
    height: 770px;
    background-image: url('../img/homepage-hero-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    .title{
      h1{
        font-size: 75px;
        color: white;
        font-weight: 600;
      }
      p{
        font-size: 32px;
      }
    }
    .butt{
      bottom: 50px;
      left: 50%;
      width: 170px;
      height: 70px;
      &:hover{
        background-color: $axolotl;
      }
    }
  }
</style>