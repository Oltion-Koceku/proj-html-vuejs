
<script>
import buttonVue from './partials/button.vue'
import waveVue from './partials/wave.vue'
  export default {
    components:{
      waveVue,
      buttonVue
    }
  }
</script>


<template>
  <section id="information">
    <div class="container d-flex h-100">
      <!-- card -->
      <div class="card-form">
        <div class="card">
          <div class="card-body position-relative "> 
            <img src="../img/new-corner.jpg" alt="">
            <h2>Corses</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur possimus quisquam voluptatem cupiditate nesciunt, molestias alias omnis quasi. Adipisci, fugiat?</p>
            <div class="butt">
              <buttonVue />
            </div>
          </div>
        </div>
      </div>
      <div class="pass"></div>
      <!-- img -->
    </div>
      <div class="wave1">
        <waveVue />
      </div>    
  </section>
</template>


<style lang="scss" scoped>
#information{
  height: 600px;
  background-image: url("../img/promise-background.jpg");
  background-position:20% 125%;
  background-size: cover;
  position: relative;
  .wave1{
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .card-form{
    width: 35%;
    height: 65%;
    .card{
      width: 100%;
      height: 100%;
      .card-body{
        img{
          position: absolute;
          width: 50px;
          left: 0;
          top: 0;
        }
      }
    }
  }
}
</style>