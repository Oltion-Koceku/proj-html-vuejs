<script>
import {store} from '../data/store'
import jumboVue from './jumbo.vue'
  export default {
    data(){
      return{
        store
      }
    },

    components:{
      jumboVue
    }
  }
</script>


<template>
  <jumboVue />
</template>



<style lang="scss" scoped>
  
</style>