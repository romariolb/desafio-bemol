<template>
  <div>

    <!-- Dialog Sucesso -->
    <q-dialog v-model="internal_show" persistent>
      <q-card style="width:100%">

        <!-- Título -->
        <q-card-section class="bg-secondary text-white">
          <Row>
            <div class="text-h6">
              <q-avatar icon="check_circle" text-color="white" />Sucesso
            </div>
          </Row>
        </q-card-section>

        <!-- Conteúdo -->
        <q-card-section class="row">
          <span class="col-12">
            <slot></slot>
          </span>
        </q-card-section>

        <!-- Botões de Ação -->
        <q-card-actions align="right">
          <q-btn label="Cancelar" color="negative" v-close-popup />
          <q-btn class="router" color="secondary" :to="in_rota" @click.prevent.stop="saveClick" @click="Click" v-close-popup label="Salvar"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
  export default {
    name: 'DialogSucesso',
    props: ['show','label','in_rota'],
    data() {
      return {
        internal_show: false
      }
    },
    watch: {
      show() {
        this.internal_show = this.show;        
      },
      internal_show() {
        if (!this.internal_show) {
          this.$emit('close')
        }        
      }
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
