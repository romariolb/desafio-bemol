<template>
  <div class="container-form">
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
  .container-form{
    background: white;
    padding-left: 30px;
    padding-top: 20px;
    padding-bottom: 15px;
    padding-right: 10px;
  }
</style>
