<template>
  <div>

    <q-card flat bordered class="q-mb-lg">
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" animation="wave" height="30px" width="30px" class="bg-green" />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" animation="wave" />
            <q-skeleton type="text" animation="wave" height="40px" />
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-skeleton height="150px" width="80%" square animation="wave" style="margin-left: 17%"/>
    </q-card>

    <q-card flat bordered class="q-mb-lg">
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" animation="wave" height="30px" width="30px" class="bg-yellow-10" />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" animation="wave" />
            <q-skeleton type="text" animation="wave" height="40px" />
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-skeleton height="150px" width="80%" square animation="wave" style="margin-left: 17%"/>
    </q-card>

    <q-card flat bordered class="q-mb-lg">
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" animation="wave" height="30px" width="30px" class="bg-grey" />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" animation="wave" />
            <q-skeleton type="text" animation="wave" height="40px" />
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-skeleton height="150px" width="80%" square animation="wave" style="margin-left: 17%"/>
    </q-card>

  </div>
</template>

<script>
export default {
  name: 'SkeletonTimeline',
  data () {
    return {}
  }
}
</script>


<style lang="scss">
  .k-group-timeline {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
</style>