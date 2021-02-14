<template>
  <q-btn @click="confirm" class="q-ml-sm">{{label}}</q-btn>
</template>

<script>
import {Dialog} from 'quasar'

export default {
  name: 'CancelButton',
  props:{
    label:{
      type: String,
      required: true
    },
    in_rota:{
      type: String,
      required: false
    },
    in_click:{
      type: String,
      required: false
    }
  },
  data () {
    return {}
  },
  methods:{
    clicou(){
      this.$emit('on-click-cancel', 'text')
    },

    confirm () {
      this.$q.dialog({
        title: 'Cancelar?',
        message: 'Os dados não serão salvos!',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$router.push(this.in_rota);
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
  }
}
</script>

<style lang="scss">
  .q-ml-sm{
    background-color: #921502;
    color: white;
    margin-left: 15px;
  }
</style>