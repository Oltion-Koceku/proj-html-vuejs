<script>
import "../../../node_modules/vue3-circle-progress/dist/circle-progress.css"
import CircleProgress from "vue3-circle-progress"
import { combinedData } from "../../data/instructor"
  export default {

    data(){
      return{
        combinedData
      }

    },

    components:{
      CircleProgress
    },

    props:{
      isRate: Boolean
    },

    mounted(){
      
    }
  }
</script>

<template>
  <div class="contaner-card d-flex justify-content-between">
    <div class="card" v-for="(e, i) in combinedData" :key="i" style="width: 33%;">
      <div class="card-body">
        <div v-if="isRate" class="rating text-center h-100 d-flex flex-column align-items-center mb-5">
            <circle-progress class="position-relative mb-5 mt-5" :percent="e.rate.num === 0 ? 0.001 : e.rate.num " 
            fill-color="#79b27b"
            border-width="10"
            border-bg-width="10"
          />
          
          <div class="numbre">
            <h2>{{ e.rate.num }}%</h2>
          </div>
          <p>{{e.rate.text}}</p>
        </div>
        <div v-else class="instructors d-flex flex-column align-items-center">
          <div class="img mb-4">
             <img :src="`src/img/${e.instructor.img}`" :alt="e.instructor.name">
          </div>
          <div class="text d-flex flex-column align-items-center text-center mb-4 w-75">
            <h3>{{ e.instructor.name }}</h3>
            <div>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <p>
              {{  e.instructor.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_variables.scss' as *;
.contaner-card{
  width: 98%;
  .card{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    height: 100%;
    border-top: 5px solid $bayleaf;
    .card-body{
      .instructors{
        .text{
          color: $gumbo;
          h3{
            color: black;
          }
          div{
            i{
              margin-right: 20px;
            }
          }
        }
        .img{
          width: 80%;
          img{
            width: 100%;
          }
        }
      }
      .rating{
        color: $gumbo;
        
        p{
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .numbre{
          position: absolute;
          top: 39%;
          left: 50%;
          transform: translate(-50%, -50%);

          h2{
            font-size: 45px;
          }
        }
        
      }
    }
  }
}

</style>