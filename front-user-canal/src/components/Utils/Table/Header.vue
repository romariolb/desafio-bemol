<template>
  <q-tr :props="props">
    <q-th auto-width />
    <q-th v-for="col in props.cols" :key="col.name" :props="props" auto-width >
      {{ col.label }}
    </q-th>
  </q-tr>
</template>

<script>
export default {
  name: "ComponentHeaderTable",
  props: ["props"]
}
</script>