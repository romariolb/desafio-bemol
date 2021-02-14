<template>
  <div class="row">
    <div class="col-12 text-right q-pr-lg q-mb-sm">
      <span v-for="status in dados" :key="status.id" class="q-ml-md">
        <q-icon name="brightness_1" :style="status.color | formatarCor" />
        {{status.descricao}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentLegenda',
  props: ['dados'],
  data () {
    return {

    }
  },
  filters: {
    formatarCor(cor) {
      return `color: ${cor}`;
    },
  }
}
</script>
