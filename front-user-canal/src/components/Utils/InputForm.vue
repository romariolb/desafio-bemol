<template>
  <div class="k-input col-12">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  data () {
    return {}
  },
}
</script>

<style lang="scss">
  .k-input{
    padding-right: 10px;
    padding-bottom: 15px;
  }
</style>
