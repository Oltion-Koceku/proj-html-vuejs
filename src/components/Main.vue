<script>
import {store} from '../data/store'
import cursesVue from './curses.vue'
import firstLessionVue from './firstLession.vue'
import jumboVue from './jumbo.vue'
import startLearningVue from './startLearning.vue'
import instructors from './instructors.vue'
import testimonials from './testimonials.vue'
import news from './news.vue'
import newsletter from './newsletter.vue'

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
      news,
      newsletter
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
  <newsletter />
</template>



<style lang="scss" scoped>
  
</style>