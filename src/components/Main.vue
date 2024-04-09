<script>
import {store} from '../data/store'
import cursesVue from './curses.vue'
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
      startLearningVue,
      cursesVue
    }
  }
</script>


<template>
  <jumboVue />
  <firstLessionVue />
  <startLearningVue />
  <cursesVue />
</template>



<style lang="scss" scoped>
  
</style>