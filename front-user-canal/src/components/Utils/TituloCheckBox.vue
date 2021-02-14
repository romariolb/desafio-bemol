<template>
  <div class="text-h6">{{title}}</div>
</template>

<script>
export default {
  name: 'TituloCheckBox',
  props: {
        title: {
          type: String,
          required: true
        }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  .text-h6 {
    padding-bottom: 5px;
  }
</style>
