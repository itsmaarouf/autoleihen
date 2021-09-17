<template>
    <v-col cols="12" lg="4" class=" float-left">
      <v-card>
        <h2 class="text-center">Book Now</h2>
        <h5 class="text-center">Compare Car Rental Prices</h5>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="ma-auto pa-3"
        >
          <v-select
              outlined
              v-model="dep"
              :items="places"
              label="Departure"
          ></v-select>
          <v-row >
            <v-col class="colWid"  >
                <el-date-picker
                    style="width: fit-content"
                    v-model="value1"
                    type="date"
                    placeholder="Pick a date"
                    default-value="2010-10-01">
                </el-date-picker>
            </v-col>
            <v-col class="float-left " >
              <el-time-select
                  style="width: fit-content"
                  v-model="value"
                  :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
                  placeholder="Select time">
              </el-time-select>
            </v-col>
          </v-row>
          <v-select
              class="mt-6"
              outlined
              v-model="Ret"
              :items="places"
              label="Return"
          ></v-select>
          <v-row >
            <v-col class="float-left"  >
              <el-date-picker
                  style="width: fit-content"
                  v-model="value2"
                  type="date"
                  placeholder="Pick a date"
                  default-value="2010-10-01">
              </el-date-picker>
            </v-col>
            <v-col class="colWid">
              <el-time-select
                  style="width: fit-content"
                  v-model="value3"
                  :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
                  placeholder="Select time">
              </el-time-select>
            </v-col>
          </v-row>
          <v-btn class="mt-6"
                 block
                 x-large
                 dark
          >SEARCH</v-btn>
        </v-form>
      </v-card>
    </v-col>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "FormAndTextBody",
  data: () => ({
    value3: '',
    value2: '',
    value1: '',
    value: '',
    valid: true,
    select: null,
    places: [ 'Agadir - Airport El Massira', 'Agadir - City', 'Bouznika - City Center', 'Casablanca - Airport Mohammed V',
      'Casablanca - City Center', 'Fez - Airport', 'Fez - City Center', 'Marrakech - Airport',
      'Marrakech - City Center', 'Mohammedia - City Center', 'Rabat - Airport', 'Rabat - City Center',
      'Tangier - Airport', 'Tangier - City Center', ]
  }),
  computed: {
    ...mapGetters(['getSelectItems'])
  }

}
</script>

<style scoped lang="stylus">

</style>