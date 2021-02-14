<template>
  <q-badge  :style="status.color | formataCorStatus"
            :text-color="status.font_color"
            :label="status.descricao"
            class="text-capitalize text-center k-badge"
          />
</template>

<script>
export default {
  name: 'ComponentStatusBadge',
  props: ['status'],
  data () {
    return {}
  },
  filters: {
    formataCorStatus(cor) {
      return `background-color: ${cor}`;
    },    
  }
}
</script>

<style lang="scss" scoped>
  .k-badge {
    border-radius: 20%;
    // border-bottom-right-radius: 70%;
  }
</style>