<script>
import { news } from '../data/latestNews'
import buttonVue from './partials/button.vue'

export default {
  data() {
    return {
      news,
      text:"More form the blog"
    }
  },

  components:{
    buttonVue
  }
}
</script>

<template>
  <section id="latest">
    <div class="container h-100 position-relative d-flex justify-content-between flex-column ">
      <div class="card-car position-absolute w-100">
        <div class="title d-flex justify-content-center align-items-center ">
          <h2>Latest News</h2>
        </div>
        <div class="imgs d-flex">
          <div v-for="(e, i) in news" :key="i"
            class="img-text d-flex flex-column justify-content-center align-items-center ">
            <div class="img">
              <img :src="`src/img/${e.url}`" alt="">
            </div>

            <div class="question mt-2 mb-2">
              <h3>{{ e.text1 }}</h3>
              <span>{{ e.text2 }}</span>
              <span class="color">{{ e.text3 }}</span>
            </div>
            <p>{{ e.text4 }}</p>
          </div>
        </div>
        <div class="butt d-flex justify-content-center align-items-end">
          <buttonVue :text = text />
        </div>
      </div>
      <div class="triangle position-absolute w-100">
        <img src="../img/latestnews-bottom-1200x105.png" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

#latest {
  height: 900px;
  background-image: url("../img/latestnews-background.jpg");
  background-size: cover;

  .triangle{
    bottom: 85px;
    img{
      width: 100%;
    }
  }

  .card-car {
    background-color: white;
    height: 750px;
    border-top: 10px solid $gumbo;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    top: -50px;

    .butt{
      width: 100%;
      height: 13%;
    }

    .title {
      height: 20%;

      h2 {
        font-weight: 600;
        font-size: 50px;
      }
    }

    .imgs {
      text-align: center;

      // height: 50%;
      .img-text {
        width: 100%;
        height: 100%;

        .question {
          color: $gumbo;

          h3 {
            color: $bayleaf;
          }

          .color {
            color: $bayleaf;
          }


        }

        p {
          color: $gumbo;

        }

        .img {
          width: 90%;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>