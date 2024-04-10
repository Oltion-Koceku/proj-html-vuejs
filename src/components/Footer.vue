<script>
import { store } from '../data/store'
import { footerJs } from '../data/footerTopJs';
export default {
  data() {
    return {
      store,
      footerJs
    }
  },

  mounted(){
    console.log(this.footerJs);
  }

}
</script>


<template>
  <div class="footer-top">
    <div class="container">
      <div class="row row-cols-4">
        <div v-for="(e, i) in footerJs.data" :key="i" class="col">
          <div v-if="i === 0" class="drive">
            <img :src="`src/img/${e.driving.url}`" alt="">
            <p>{{ e.driving.text }}</p>
          </div>
          <div v-if="i === 1" class="contact">
            <div class="title">{{ e.contact.title }}</div>
            <div class="info d-flex">

              <div class="font"></div>
              <div class="text"></div>


            </div>
          </div>
          <div v-if="i === 2" class="courses">
            <div class="title"></div>
            <div class="info d-flex">
              <div class="font"></div>
              <div class="text"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="footer-bottom"></div>
</template>



<style lang="scss" scoped>
.footer-top {
  height: 450px;
  background-image: url("../img/footer-background-color.jpg");
  background-size: cover;
}
</style>