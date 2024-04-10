<script>
  export default {

    data(){
      return{
      }
    },

    props:{
      card: Object
    },

    mounted(){
    }
  }
</script>

<template>
<div class="card d-flex flex-column align-items-center ">
  <img class="card-img-top" :src="`src/img`+ card.img" :alt="card.name">
  <div class="card-body d-flex flex-column align-items-center ">
    <h4>{{card.name}}</h4>
    <div class="butt">
      <button>LEARN MORE</button>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_variables.scss' as *;
  .card{
    background-color: rgba(0,0,0,0);
    width: 100%;
    height: 70%;
    border: none;
    // margin-left: 50px;
    img{
      width: 100%;
      height: 100%;
    }
    .card-body{
      text-transform: capitalize;
      color: $deepceru;
      .butt{
        button{
          color: $deepceru;
          border: none;
          border: 2px solid $deepceru;
          border-radius: 20px;
          padding: 5px 15px;
          background-color: rgba(0,0,0,0);
          &:hover{
            border-color: $bayleaf;
            color: $bayleaf;
          }
        }
      }
    }
  }
</style>