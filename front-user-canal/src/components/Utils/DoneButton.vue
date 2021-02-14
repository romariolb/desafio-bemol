<template>
  <q-btn class="router" :to="in_rota" @click.prevent.stop="saveClick" @click="Click">{{label}}</q-btn>
</template>

<script>
export default {
  name: 'DoneButton',
  props:{
    label:{
      type: String,
      required: true
    },
    in_rota:{
      type: String,
      required: false
    },
  },
  data () {
    return {}
  },
  methods:{
    saveClick(){
      this.$emit('saveClick', true)
    },
    Click(){
      this.$emit('Click', true)
    },
  }
}
</script>

<style lang="scss">
  .router{
    background-color: #ABCC00;
    color: white;
    margin-left: 15px;
    margin-right: 35px;
  }
</style>