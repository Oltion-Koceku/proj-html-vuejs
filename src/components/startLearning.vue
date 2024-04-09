<script>
  export default {
    
  }
</script>

<template>
  <section id="learning">
    <div class="container h-100">
      <div class="text d-flex justify-content-between align-items-center h-100 text-white ">
        <div class="title">
          <h2>Start learning to drive today</h2>
          <h3>Give us a call to schedule your first driving lession </h3>
        </div>
        <div class="numbre">
          <span><i class="fa-solid fa-phone-flip">&ensp;&ensp;</i>1-800-555-555</span>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  #learning{
    height: 350px;
    background-image: url("../img/horizontal-cta-background.jpg");
    background-position: center;
    margin-top: 20px;
    .text{
      .title{
        h2{
          font-size: 50px;
          font-weight: 600;
        }
        h3{
          font-size: 25px;
          font-weight: 600;
        }
      }
      .numbre{
        font-size: 40px;
      }
    }
  }
</style>