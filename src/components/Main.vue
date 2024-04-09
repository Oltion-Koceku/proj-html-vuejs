<script>
import {store} from '../data/store'
import firstLessionVue from './firstLession.vue'
import jumboVue from './jumbo.vue'
  export default {
    data(){
      return{
        store
      }
    },

    components:{
      jumboVue,
      firstLessionVue
    }
  }
</script>


<template>
  <jumboVue />
  <firstLessionVue />
</template>



<style lang="scss" scoped>
  
</style>