<template>
  <div class="grayDiv">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="my-8 text-center">Bestsellers</h1>
          <p class=" text-center">The most requested cars by our customers</p>
        </v-col>
      </v-row>

      <v-row class="ma-auto d-flex">
        <v-col
            cols="12"
            lg="4"
            md="6"
            sm="12">
          <v-img  class="align-center"
                 src="/images/BestAutos/Dacia-Duster-2x4.webp">
          </v-img>
          <h3 class="mb-6 text-center">Dacia Duster 2x4</h3>

          <v-row>
            <v-col class="pa-0">
              <p class="brd py-2 ml-5 text-center">Diesel</p>
            </v-col>
            <v-col class="pa-0">
              <p class="brd py-2 mr-5 text-center">From: <span class="font-weight-medium currency">400 MAD</span></p>
            </v-col>
          </v-row>

        </v-col>

        <v-col
            cols="12"
            lg="4"
            md="6"
            sm="12">
          <v-img  src="/images/BestAutos/Range-Rover-Sport.webp"> </v-img>
          <h3 class="mb-6 text-center">Range Rover Sport Automatic</h3>
          <v-row>
            <v-col class="pa-0">
              <p class="brd py-2 ml-5 text-center">Diesel</p>
            </v-col>
            <v-col class="pa-0">
              <p class="brd py-2 mr-5 text-center">From: <span class="font-weight-medium currency">2,200 MAD</span></p>
            </v-col>
          </v-row>

        </v-col>

        <v-col
            cols="12"
            lg="4"
            md="6"
            sm="12">
          <v-img
                 src="/images/BestAutos/Renault-Clio-4-manual.webp">
          </v-img>
          <h3 class="mb-6 text-center">Renault Clio 4</h3>

          <v-row>
            <v-col class="pa-0">
              <p class="brd py-2 ml-5 text-center">Diesel</p>
            </v-col>
            <v-col class="pa-0">
              <p class="brd py-2 mr-5 text-center">From: <span class="font-weight-medium currency">280 MAD</span></p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mb-12">
        <v-col>
          <v-btn class="ma-auto d-flex" dark>RENT A CAR</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Bestsellers"
}
</script>

<style lang="stylus" scoped>
.grayDiv
  background-color #F5F5F5

.currency
  color orange

.brd
  border: 1px solid #bdbdbd
</style>