<script>
  export default {
    props:{
      text: String
    }
  }
</script>

<template>
  <button>{{ text }}</button>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_variables.scss' as *;
  button{
    border: none;
    padding: 10px 30px;
    border-radius: 30px;
    background-color: $bayleaf;
    color: white;
    text-transform: uppercase;
  }
</style>