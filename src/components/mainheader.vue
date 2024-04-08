<script>
import buttonVue from './partials/button.vue'

export default {

  data() {
    return {
      textButton: "Book Now"
    }
  },

  props: {
    menu: Array
  },

  components: {
    buttonVue
  }
}
</script>

<template>

  <div class="main-header d-flex align-items-center">
    <div class="container d-flex justify-content-between">
      <div class="logo">
        <img src="../img/avada-drivers-logo-2x-300x58.png" alt="avada-logo">
      </div>
      <div class="menu">
        <ul class="d-flex justify-content-between align-items-center text-white text-uppercase ">
          <li v-for="(item, index) in menu" :class="index === 0 ? 'active' : ''" :key="index">{{ item }}</li>
          <buttonVue :text=this.textButton />
        </ul>
      </div>
    </div>

  </div>

</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

.main-header {
  background-color: rgba(0, 0, 0, 0.2);

  .logo {
    width: 280px;
  }

  img {
    width: 100%;
  }

  .menu {
    width: 70%;

    ul {
      margin: 0;

      .active {
        color: $bayleaf;
        border-bottom: 2px solid $bayleaf;
        padding-top: 5px;
        padding-bottom: 5px;
      }

      li {
        list-style: none;
      }
    }

  }
}
</style>
