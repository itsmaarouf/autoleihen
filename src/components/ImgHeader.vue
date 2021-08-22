<template><div>
  <v-card
      class="mb-3"
      width="100%"
  >
    <v-img
        height="600"
        src="https://images.unsplash.com/photo-1627212602579-6d069634b781?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    >
      <v-col
          align="center"
      >
        <v-card class="d-block py-1 px-4" width="450">
          <v-card-title class="ml-16 pb-0">Rental car price comparison</v-card-title>
          <v-card-text>Find your rental car at the best price now.</v-card-text>
          <v-form>
            <v-text-field
                label="city"
                hide-details
                outlined
                clearable
                required
            >
              <v-icon
                  slot="append"
                  large
              >
                mdi-magnify
              </v-icon>
            </v-text-field>
            <v-date-picker
                no-title
                full-width
                v-model="dates"
                range
            ></v-date-picker>
            <v-row>
              <v-col>
                <v-select
                  :items="StartTime"
                  label="Pick up at:"
                  hide-details
                  outlined
              ></v-select>
              </v-col>
              <v-col><v-select
                  :items="endTime"
                  label="Return at:"
                  hide-details
                  outlined
              ></v-select></v-col>
            </v-row>
            <v-btn x-large  class="my-3">Find a rental car</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-img>
  </v-card>
  <v-card class="ma-auto" align="center"  >
    <v-row>
      <v-col >
        <h3>Save up to 50%</h3>
        <p class="pa-3">Compare prices and pay up to half less for rental cars.</p>
      </v-col>
      <v-col >
        <h3>Cancel for free</h3>
        <p class="pa-3">You can cancel free of charge up to 24 hours before the start of the rental period.</p>
      </v-col>
      <v-col >
        <h3>Over 2 million customers</h3>
        <p class="pa-3">Our customers recommend us with 381,522 reviews.</p>
      </v-col>
    </v-row>
  </v-card>

  <v-card class="ma-auto mt-3 cll" align="center">
    <v-row>
      <v-col>
        <h3>Any questions?</h3>
        <p>Unsere Mietwagen-Experten helfen Ihnen gerne.</p>
        <v-btn outlined
               x-large>+212 567 999 211</v-btn>
      </v-col>
    </v-row>
  </v-card>
</div>
</template>

<script>

export default {
  name: "ImgHeader",
  data: () => ({
    StartTime: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00','06:00','07:00', '08:00', '09:00', '10:00', '11:00','12:00', '13:00', '14:00', '15:00','16:00', '17:00', '18:00', '19:00','20:00', '21:00', '22:00', '23:00','23:00'],
    endTime: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00','06:00','07:00', '08:00', '09:00', '10:00', '11:00','12:00', '13:00', '14:00', '15:00','16:00', '17:00', '18:00', '19:00','20:00', '21:00', '22:00', '23:00','23:00'],
    startValue: new Date(new Date().getMonth()),
    endValue: new Date(new Date().setDate(28)),
    dates: ['2021-09-11', '2021-09-20'],
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ')
    },
  },
}
</script>

<style scoped lang="stylus">

.cll
  background-color rgba(129, 89, 66, 0.65)

</style>