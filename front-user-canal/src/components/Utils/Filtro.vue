<template>
  <div class="k-card-section">
    <q-card v-show="visible">
      <q-card-section>
        <div class="row">
          <div class="col">
            <div class="k-title-filter">Filtros</div>
          </div>
          <div class="col offset-11 align-self-end" style="cursor: pointer;">
            <q-icon size="28px" name="clear" @click="(visibleFiltro = false)" />
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <slot></slot>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  export default {
    name: 'Filtro',
    props: {
      visible: {
        type: Boolean,
        required: false
      }
    },
    data() {
      return {}
    }
  }

</script>

<style lang="scss">
  .k-card-section{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .k-title-filter {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 0px;
    font-style: normal;
  }
</style>
