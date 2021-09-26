<template>
  <div class="grayDiv">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="my-8 text-center">Testimonials</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"
               lg="4"
               md="6"
        >
          <v-card class="ma-auto">
            <div class="text-center testimo px-5 pt-5 pb-10">
            <v-rating
                class="my-5"
                color="warning"
                empty-icon="$mdiStarOutline"
                 hover
                length="5"
                readonly
                size="20"
                value="10"
            ></v-rating>
              <p>Very good service, he welcomed me to Mohamed V. airport. If you are looking for a car rental in Morocco Mietwagen is the right choice :)</p>
              <h3 class="personName mt-4">Hatim</h3>
              <i>Morocco</i>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12"
               lg="4"
               md="6"
        >
          <v-card class="ma-auto">
            <div class="text-center testimo px-5 pt-5 pb-10">
            <v-rating
                class="my-5"
                color="warning"
                empty-icon="$mdiStarOutline"
                 hover
                length="5"
                readonly
                size="20"
                value="10"
            ></v-rating>
              <p> Impeccable.<br>Service parfait.<br>Chauffeurs aimables et au top. </p>
              <h3 class="personName mt-4">Nawal</h3>
              <i>France</i>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12"
               lg="4"
               md="6"
        >
          <v-card class="ma-auto">
            <div class="text-center testimo px-5 pt-5 pb-10">
            <v-rating
                class="my-5"
                color="warning"
                empty-icon="$mdiStarOutline"
                 hover
                length="5"
                readonly
                size="20"
                value="10"
            ></v-rating>
              <p>An agency at the top, reliable and serious people. Everything was done by distance, there were no surprises or hidden screws. I recommend this agency to everyone. Next time I will not look for an agency, I'll go home directly. Thanks to Amine for his seriousness and his involvement. Keep going.</p>
              <h3 class="personName mt-4">ouaaziz asmaa</h3>
              <i>Spain</i>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn dark class="ma-auto d-flex ">LEAVE A COMMENT</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Testimonial"
}
</script>

<style lang="stylus" scoped>
.grayDiv
  background-color #F5F5F5
.personName
  color #FB8C00
.testimo
  background-color #262626
  color aliceblue
</style>