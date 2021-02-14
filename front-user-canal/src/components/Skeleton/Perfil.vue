<template>
  <div class="q-pa-md">
    <div class="k-container">
      <div class="row">
        <div class="col-12">
          <p class="k-title-page">Novo Perfil</p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-4 col-xs-12">
          <label for="perfil" class="label-tipo">Nome do Perfil</label>
          <q-skeleton type="text" height="80px" />
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <p class="label-permissoes">Permissões de acesso</p>          
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-3 col-xs-12 col-check">
          <q-card flat bordered style="width: 250px">
            <q-card-section>
              <q-skeleton type="text" height="50px" />
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-skeleton type="text" height="30px" />
              <q-skeleton type="text" height="30px" />
              <q-skeleton type="text" height="30px" />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-3 col-md-3 col-xs-12 col-check">
          <q-card flat bordered style="width: 250px">
            <q-card-section>
              <q-skeleton type="text" height="50px" />
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-skeleton type="text" height="30px" />
              <q-skeleton type="text" height="30px" />
              <q-skeleton type="text" height="30px" />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-3 col-md-3 col-xs-12 col-check">
          <q-card flat bordered style="width: 250px">
            <q-card-section>
              <q-skeleton type="text" height="50px" />
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-skeleton type="text" height="30px" />
              <q-skeleton type="text" height="30px" />
              <q-skeleton type="text" height="30px" />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-3 col-md-3 col-xs-12 col-check">
          <q-card flat bordered style="width: 250px">
            <q-card-section>
              <q-skeleton type="text" height="50px" />
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-skeleton type="text" height="30px" />
              <q-skeleton type="text" height="30px" />
              <q-skeleton type="text" height="30px" />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row k-btn-group">
        <div class="col-xs-12 text-right q-gutter-sm k-btn-col-group">
          <q-skeleton type="QBtn" width="120px" />
          <q-skeleton type="QBtn" width="120px" />
        </div>
      </div>

    </div>    
  </div>
</template>

<script>
export default {
  name: 'SkeletonPerfil',
  data () {
    return {}
  }
}
</script>
