<template>
  <div class="container-in-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .container-in-form{
    background: white;
    padding-left: 30px;
    padding-top: 0px;
    padding-bottom: 15px;
    padding-right: 10px;
  }
</style>
