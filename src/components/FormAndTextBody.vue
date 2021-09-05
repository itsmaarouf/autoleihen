<template>
<div>
  <v-col cols="12" lg="4" class="mx-3">
    <v-card>
      <v-card-title class="pl-16 pb-0">Book Now</v-card-title>
      <h5 class="text-center">Compare Car Rental Prices</h5>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="ma-auto pa-3"
      >
        <v-subheader>Departure</v-subheader>
        <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
        ></v-select>
      </v-form>
    </v-card>
  </v-col>
  <el-main>Main</el-main>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "FormAndTextBody",
  data: () => ({
    valid: true,
    select: null,

  }),
  computed: {
    ...mapGetters(['getSelectItems'])
  },
  methods: {
    getItems(){

    }
  }
}
</script>

<style scoped>

</style>