<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
  export default {
    components:{
      Header,
      Main,
      Footer
    }
  }
</script>

<template>
  <Header />
  <Main />
</template>



<style lang="scss">
@use './assets/scss/main.scss' as *;

</style>