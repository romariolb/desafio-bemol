<template>
  <span>

    <q-input  :label="label"
              :counter="counter"
              :value="inner_value"
              :mask="mask"
              :rules="rules"
              @input="handleValue"
              v-if="!readonly"
              class="k-input-pa"
              type="text"
              outlined />

    <q-input  :label="label"
              :counter="counter"
              :value="inner_value"
              :mask="mask"
              :rules="rules"
              v-if="readonly"
              class="k-input-pa"
              :readonly="readonly"
              @input="handleValue"
              type="text" />
  </span>
</template>

<script>
export default {
  name: 'ComponentInputDate',
  props: ['value', 'label', 'counter', 'mask', 'rules', 'readonly'],
  data () {
    return {
      inner_value: null
    }
  },
  mounted() {
    this.inner_value = this.value
  },
  watch: {
    value() {
      this.inner_value = this.value
    }
  },
  methods: {
    handleValue(texto) {
      texto = (texto == '' || texto == undefined) ? '' : texto;
      this.$emit('input', texto)
    }
  },
}
</script>

<style lang="scss" scoped>
  .k-input-pa {
    padding: 10px;
  }
</style>