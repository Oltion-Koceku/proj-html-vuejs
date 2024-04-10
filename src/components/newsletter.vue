<script>
import buttonVue from './partials/button.vue'

  export default {

    data(){
      return{
        text:"subscribe"
      }
    },
    components:{
      buttonVue
    }
  }
</script>

<template>
  <section id="newsletter">
    <div class="container h-100 d-flex flex-column justify-content-center align-items-center">
      <div class="news text-center h-75 d-flex justify-content-around flex-column ">
        <h2>Sign up to our Newsletter</h2>
        <input class="w-100" type="text">
        <buttonVue class="w-100" :text = text />
        <p>(we do not share your data anybody, and only use it for its intended purpose)</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

#newsletter{
  height: 400px;
  background-image: url("../img/newsletter_background.jpg");
  background-size: cover;
  .container{
    .news{
      width: 650px;
      input{
        height: 50px;
        border-radius: 5px;
        border: none;
        border: 1px solid $gumbo;
      }
      h2{
        font-weight: 600;
      }

      p{
        color: $gumbo;
      }
    }
  }
}
</style>