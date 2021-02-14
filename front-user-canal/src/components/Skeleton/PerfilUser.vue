<template>
  <div class="k-container">
    <div class="col-12">
      <p class="label-permissoes">Perfil</p>
    </div>
    <q-card flat style="width: 300px">
      <q-card-section class="k-flex">
        <q-skeleton type="text" height="30px" width="20px"/>
        <q-skeleton type="text" height="30px" width="220px" />
      </q-card-section>
      <q-card-section class="k-flex">
        <q-skeleton type="text" height="30px" width="20px"/>
        <q-skeleton type="text" height="30px" width="220px" />
      </q-card-section>
      <q-card-section class="k-flex">
        <q-skeleton type="text" height="30px" width="20px"/>
        <q-skeleton type="text" height="30px" width="220px" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'SkeletonPerfilUser',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .k-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
    padding-bottom: 0;
  }
</style>