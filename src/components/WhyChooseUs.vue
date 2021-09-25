<template>
  <div class="my-5 mx-0 ">
    <v-container  class="containers" fluid>
      <v-row dense>
        <v-col
            cols="card.flex"
        >
          <v-card>
            <v-btn class="ma-auto d-flex"
                   dark
                   block
                   x-large
            >Rent a car at Mohammed V airport Casablanca</v-btn>
            <v-img
                src="/images/airport.jpg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h1 class="font-weight-regular text-center">Rent a car at <span class="font-weight-bold">best price</span></h1>
          <p class="text-center">Why pay more elsewhere for a car rental in Morocco!<br>
            Start your holiday or work in Morocco with confidence with Mietwagen  at a great price and a service that meets your needs.<br>
            With Mietwagen  your vehicle can wait for you at the airport, hotel or work.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-img
              src="/images/featured.webp"
              height="300px"
          >
          </v-img>
          <h1 class="text-center">Why choose us</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-8">
          <v-btn
              fab
              tile
              outlined
              x-large
              color="orange"
              class="ma-auto d-flex"
          >
            <v-icon>
              mdi-medal-outline
            </v-icon>
          </v-btn>
          <h3 class="text-center my-4">Quality and experience</h3>
          <p class="text-center">Expert for more than 10 years to help you rent a car in Morocco</p>
        </v-col>
        <v-col class="pa-8">
          <v-btn
              fab
              tile
              outlined
              x-large
              color="orange"
              class="ma-auto d-flex"
          >
            <v-icon>
              mdi-cash-100
            </v-icon>
          </v-btn>
          <h3 class="text-center my-4">Best price guarantee</h3>
          <p class="text-center">We guarantee the best price for our car rental deals!</p>
        </v-col>
        <v-col class="pa-8">
          <v-btn
              fab
              tile
              outlined
              x-large
              color="orange"
              class="ma-auto d-flex"
          >
            <v-icon>
              mdi-hours-24
            </v-icon>
          </v-btn>
          <h3 class="text-center my-4">Free cancellation</h3>
          <p class="text-center">Cancel without charge until 24h before the rental.</p>
        </v-col>
      </v-row>


    </v-container>




  </div>
</template>

<script>
export default {
  name: "WhyChooseUs"
}
</script>

<style lang="stylus" scoped>

</style>