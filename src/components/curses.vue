
<script>
import buttonVue from './partials/button.vue'
import cardPassVue from './partials/cardPass.vue'
import waveVue from './partials/wave.vue'
import {pass} from '../data/passCars'
  export default {

    data(){
      return{
        textButton: 'course information',
        pass
      }
    },
    components:{
      waveVue,
      buttonVue,
      cardPassVue
    }
  }
</script>


<template>
  <section id="information">
    <div class="container h-75 d-flex justify-content-beteen  align-items-center ">
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
      <!-- img -->
      <div class="pass d-flex justify-content-between">
        <div v-for="(e, i) in pass" :key="i" class="cardCourse w-100  d-flex align-items-center justify-content-end ">
          <cardPassVue
            :card= e
          />
        </div>
        
      </div>
     
     
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
  .pass{
    width: 60%;
    height: 100%;
    .card{
      width: 80%;
    }
  }
  .wave1{
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .card-form{
    width: 40%;
    height: 65%;  
    .card{
      position: absolute;
      top: -6%;
      margin-right: 20px;
      z-index: 100;
      width: 500px;
      height: 65%;
      border-radius: 15px;
      box-shadow: 0 0 2px 0 lightgray, 0 20px 40px lightgray;
      .card-body{
        padding: 8%;
        img{
          position: absolute;
          width: 50px;
          left: 0;
          top: 0;
         border-top-left-radius: 5px;

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