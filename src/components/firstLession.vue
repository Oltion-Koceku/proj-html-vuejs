<script>
import buttonVue from './partials/button.vue'
export default {
  data(){
    return{
      formData: ['Your Name*', 'email*', 'telephone', 'location'],
      textButton: 'Request a callback'
    }
  },

  components:{
    buttonVue
  }
}
</script>

<template>
  <section id="lession">
    <div class="container">
      <div class="text-form d-flex position-relative ">
        <div class="text w-50 ">
          <h2>Get Behind The Wheel</h2>
          <p class="first mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fugiat dolorum sequi enim ad dolore, saepe
            error id quam reprehenderit?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed corrupti nemo soluta dolore quas pariatur
            dolorem
            est neque amet rem iste possimus explicabo eligendi velit dolorum error, ea omnis, fugit quae,
            necessitatibus
            saepe a doloribus commodi ullam. Porro id veritatis itaque qui voluptates laborum. Architecto hic cupiditate
            commodi porro sed.</p>
        </div>
        <div class="form w-50 position-absolute">
          <div class="card d-flex flex-column align-items-center">
            <div class="card-body ">
              <div class="formtext text-center ">
                <h2 class="mb-5 mt-4">First Lession Free!</h2>
                <p class="mb-5">When you make a block booking whith us your first lession is included free.</p>
              </div>
              <div 
                class="form-floating mb-4"
                v-for="(form, index) in formData"
                :key="index"
              >
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">{{form}}</label>
              </div>

              <div class="d-flex justify-content-center mb-5 mt-4">
                <buttonVue :text = this.textButton />
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>

</template>S


<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;
.container {
  height: 680px;

  .text {
    margin-top: 100px;
    width: 500px;
    padding-right: 100px;
    color: $gumbo;
    h2{
      color: $firefly;
      font-size: 40px;
      margin-bottom: 3rem;
      font-weight: 600;
    }
    .first{
      font-size: 22px;
    }
    p:last-child{
      font-size: 18px;
    }
  }
  .form{
    right: 0;
    top: -45px;
    .card{
      border-radius: 15px;
      box-shadow: 0 0 2px 0 lightgray, 0 20px 40px lightgray;
      .card-body{
        width: 81%;
        color: rgb(190, 174, 174);

        input{
          background-color: rgba(197, 190, 190, 0.123);
        }
        label{
          text-transform: capitalize;
        }
        .formtext{
          h2{
            font-weight: 600; 
            color: $bayleaf;
          }
          p{
            font-size: 17px;
            color: rgb(190, 174, 174);
          }
        }
      }
    }
  }
}
</style>