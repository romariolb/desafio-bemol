<template>
  <div class="row k-btn-group">
    <div class="col-xs-12 text-right q-gutter-sm k-btn-col-group">
      <q-btn :label="label_cancel ? label_cancel : 'Cancelar'" class="k-btn k-btn-cancelar col-xs-6" icon="cancel"  :to="cancel_router"    />
      <q-btn :label="label_save"                               class="k-btn k-btn-salvar   col-xs-6" icon="save"    @click.prevent.stop="saveClick" :loading="loading" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentButtonsSaveCancel',
  props: ['label_save', 'label_cancel', 'cancel_router', 'loading'],
  data () {
    return {}
  },
  methods: {
    saveClick() {
      this.$emit('saveClick', true)
    }
  },
}
</script>
