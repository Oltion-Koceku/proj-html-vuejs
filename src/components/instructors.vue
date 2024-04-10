<script>
import buttonVue from './partials/button.vue'
import cardGreenVue from './partials/cardGreen.vue'
  export default {
    data(){
      return{
        text:'More about us'
      }
    },

    components:{
      cardGreenVue,
      buttonVue
    }
  }
</script>

<template>
  <section id="instructors">
    <div class="container h-100  position-relative ">
      <div class="rate-card w-100">
        <cardGreenVue
          class="cardGreen position-absolute "
          :isRate = true
        />
      </div>
      <div class="more d-flex flex-column justify-content-center  ">
        <div class="title">
          <h2>Your Instructors</h2>
        </div>
        <div class="text-button d-flex">
          <div class="text w-75">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae adipisci ut quas, eaque debitis minima voluptates illo perspiciatis sequi earum!</p>
          </div>
          <div class="butt w-25">
            <buttonVue 
            class="w-100"
              :text = text
            />
          </div>
        </div>
      </div>
      <div class="instructor-card">
        <cardGreenVue
          class="cardGreen2 position-absolute "
          :isRate = flase
        />
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

#instructors{
  height: 1000px;
  .rate-card{
    height: 40%;
    width: 100%;
    .cardGreen{
      top: -170px;
    }
  }
  .more{
    height: 20%;
    width: 100%;
    .title{
      h2{
        font-size: 50px;
        font-weight: 600;
      }
    }
    .text-button{
      margin-top: 20px;
      .text{
        p{
          font-size: 20px;
          color: $gumbo;
        }
      }
    }
  }
  .instructor-card{
    width: 100%;
    .cardGreen2{
      bottom: -100px;
    }
  }
}
</style>