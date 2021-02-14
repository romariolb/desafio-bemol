<template>
  <!-- Titulo Tela -->
  <div class="row">
    <div class="col-11">
      <!-- <p class="text-h6">{{titulo}}</p>
      <p class="k-subtitle-page">{{subtitulo}}</p> -->
      <p class="k-title-page">{{titulo}}</p>
      <p class="k-subtitle-page" v-if="subtitulo">{{subtitulo}}</p>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Titulo',
  props: {
        titulo: {
          type: String,
          required: false
        },
        subtitulo: {
          type: String,
          required: false
        }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

  // .k-subtitle-page {
  //   font-family: Arial, Helvetica, sans-serif;
  //   font-size: 14px;
  // }

  .k-title-page {
    font: Bold 20px/23px Helvetica;
    text-align: left;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }

  .k-subtitle-page {
    font: Regular 13px/15px Helvetica Neue;
    text-align: left;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }
</style>  
