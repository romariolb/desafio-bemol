<template>
  <q-btn flat scratch align="center" class="center" icon="edit" :to="in_rota"/>
</template>

<script>
export default {
  name: 'EditButton',
  props:{
    in_rota:{
      type: String,
      require:false
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="css">
  .center{
    color: black;
  }
</style>
