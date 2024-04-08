<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    }
    
  }
</script>


<template>
  <div class="all debug">

      <!-- divido in due l'header -->
      <div class="top-header debug d-flex align-items-center ">
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
      <div class="main-header"></div>
    
  </div>
    
</template>



<style lang="scss" scoped>

@use '../assets/scss/partials/_variables.scss' as *;

.debug{
  border: 1px solid black;
  background-color: rgba(0, 255, 0, 0.3)
}

.all{
  height: 160px;
  .top-header{
    background-color: $tundora;
    height: 50px;
    .info{
      color: $athensgray;
    }
  }
}
</style>