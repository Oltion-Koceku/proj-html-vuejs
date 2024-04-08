<script>
import {store} from '../data/store'
import mainheader from './mainheader.vue'
  export default {  
    data(){
      return{
        store,
        menu: ['home', 'about', 'prices', 'courses', 'locations', 'blog']
      }
    },

    components:{
      mainheader
    }
    
  }
</script>


<template>
  <div class="all ">

      <!-- divido in due l'header -->
      <div class="top-header  d-flex align-items-center ">
        <div class="container">
          <div class="info d-flex justify-content-between">
            <div class="info1">
              <span>We have a 95% Succsessful Pass Rate!</span>
            </div>
            <div class="info2">
              <span><i class="fa-solid fa-phone-flip">&ensp;&ensp;</i>Give us a call to book your tuition! 1-800-555-555</span>
            </div>
          </div>
          
        </div>
      </div>
      <!-- <div class="container"> -->
        <mainheader 
          class="mainh" 
          :menu = this.menu
          />
      <!-- </div> -->
      
    
  </div>
    
</template>



<style lang="scss" scoped>

@use '../assets/scss/partials/_variables.scss' as *;

.all{
  height: 160px;
  .top-header{
    background-color: $tundora;
    font-size: 15px;
    height: 50px;
    .info{
      color: $athensgray;
    }
  }
  .mainh{
    height: 110px;
  }
}
</style>