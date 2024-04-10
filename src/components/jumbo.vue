<script>
import { store } from '../data/store'
import buttonVue from './partials/button.vue'
export default {
  data() {
    return {
      store
    }
  },

  components: {
    buttonVue
  }
}
</script>


<template>
  <section class="position-relative" id="jumbo">
    <div class="container w-100 h-100">
      <div class="title d-flex justify-content-center flex-column h-100 text-white">
        <h1>Drive With Avada</h1>
        <p>We offer the finest driving tuition money can buy</p>
      </div>

    </div>
    <div class="widget">
      <div class="demos h-100 d-flex flex-column align-items-center mb-2">
        <i class="fa-solid fa-box"></i>
        <span>Demos</span>
      </div>
      <div class="sale d-flex flex-column align-items-center ">
        <div class="number d-flex">
          &dollar;
          <div><span>39</span></div>
        </div>
        <span>On Sale</span>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

#jumbo {
  padding-top: 160px;
  height: 770px;
  background-image: url('../img/homepage-hero-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .widget{
    position: absolute;
    top: 140px;
    z-index: 999;
    right: 20px;
    .demos{
      width: 80px;
      height: 70px;
      font-weight: 600;
      border: 1px solid black;
      border-radius: 5px;
      background-color: white;
      i{
        font-size: 30px;
        margin-bottom: 14px;
      }
    }
    .sale{
      background-color: white;
      width: 80px;
      height: 70px;
      font-weight: 600;
      border: 1px solid black;
      border-radius: 5px;
      .number{
        color: $bayleaf;
        font-weight: 600;
        div{
          font-size: 30px;
          font-weight: 700;
        }
      }
    }
  }
  .title {
    h1 {
      font-size: 75px;
      color: white;
      font-weight: 600;
    }

    p {
      font-size: 32px;
    }
  }

}
</style>