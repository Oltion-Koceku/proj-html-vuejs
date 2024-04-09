
<script>
import buttonVue from './partials/button.vue'
import waveVue from './partials/wave.vue'
  export default {

    data(){
      return{
        textButton: 'course information'  
      }
    },
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
          <div class="card-body position-relative d-flex justify-content-center align-items-center flex-column"> 
            <div class="new">
              
            </div>
            <img src="../img/new-corner.jpg" alt="">
            <h2 class="mb-5">Courses</h2>
            <p class="text-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur possimus quisquam voluptatem cupiditate nesciunt, molestias alias omnis quasi. Adipisci, fugiat?</p>
            <div class="butt mt-4">
              <buttonVue :text = textButton />
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
@use '../assets/scss/partials/_variables.scss' as *;
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
    width: 24%;
    height: 65%;  
    position: absolute;
    top: -6%;
    .card{
      width: 100%;
      height: 100%;
      border-radius: 15px;
      box-shadow: 0 0 2px 0 lightgray, 0 20px 40px lightgray;
      .card-body{
        padding: 8%;
        img{
          position: absolute;
          width: 50px;
          left: 0;
          top: 0;
         border-radius: 5px;

        }
        h2{
          font-size: 40px;
          font-weight: 600;
        }

        p{
          color: $capecod;
        }
      }
    }
  }
}
</style>