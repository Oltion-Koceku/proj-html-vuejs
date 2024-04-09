<script>
import {store} from '../data/store'
import firstLessionVue from './firstLession.vue'
import jumboVue from './jumbo.vue'
import startLearningVue from './startLearning.vue'
  export default {
    data(){
      return{
        store
      }
    },

    components:{
      jumboVue,
      firstLessionVue,
      startLearningVue
    }
  }
</script>


<template>
  <jumboVue />
  <firstLessionVue />
  <startLearningVue />
</template>



<style lang="scss" scoped>
  
</style>