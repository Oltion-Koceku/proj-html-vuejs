<script>
import buttonVue from './partials/button.vue'

  export default {

    data(){
      return{
        textButton: "Book Now"
      }
    },

    props:{
      menu : Array
    },

    components:{
      buttonVue
    }
  }
</script>

<template>
  
      <div class="main-header d-flex justify-content-between align-items-center ">
        <div class="logo">
          <img src="../img/avada-drivers-logo-2x-300x58.png" alt="avada-logo">
        </div>
        <div class="menu">
          <ul class="d-flex justify-content-between align-items-center text-white text-uppercase ">
            <li v-for="(item, index) in menu" :key="index">{{item}}</li>
            <buttonVue 
              :text = this.textButton
            />
          </ul>
        </div>
      </div>
  
</template>


<style lang="scss" scoped>
.logo{
  width: 250px;
  img{
    width: 100%;
  }
}
.menu{
  width: 60%;
  ul{
    margin: 0;
    li{
    list-style: none;
    }
  }
  
}

</style>
