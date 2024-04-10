<script>
import {store} from '../data/store'
import cursesVue from './curses.vue'
import firstLessionVue from './firstLession.vue'
import jumboVue from './jumbo.vue'
import startLearningVue from './startLearning.vue'
import instructors from './instructors.vue'
import testimonials from './testimonials.vue'
import news from './news.vue'

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
      cursesVue,
      instructors,
      testimonials,
      news
    }
  }
</script>


<template>
  <jumboVue />
  <firstLessionVue />
  <startLearningVue />
  <cursesVue />
  <instructors />
  <testimonials />
  <news />
</template>



<style lang="scss" scoped>
  
</style>