<template>
  <div>
    <!-- Dialog -->
    <q-dialog v-model="internal_show">
      <q-card style="width:30%">

        <!-- Título -->
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">
            <q-avatar icon="https" text-color="white" />Resetar Senha
          </div>
        </q-card-section>
      
        <!-- Conteúdo -->
        <q-card-section class="row items-center">
          <span class="q-ml-sm">
            <slot></slot>
          </span>
        </q-card-section>
      
        <!-- Botões de Ação -->
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="grey"    v-close-popup />
          <q-btn flat label="Resetar"  color="primary" v-close-popup @click="emitReset"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  name: 'ComponentDialogResetPassword',
    props: ['show'],
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
          this.$emit('close', false)
        }
      },
    },
    methods: {
      emitReset() {
        this.$emit('reset', true)
      }
    },
  }

</script>