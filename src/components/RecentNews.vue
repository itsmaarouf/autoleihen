<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-card elevation="0">
          <h1 class="my-8 text-center">Recent news</h1>
          <v-row>

            <v-col cols="12"
                   lg="4"
                   md="6"
                   sm="12"
            >
              <router-link to="#">
              <div class="container px-0">
                <v-img
                    src="/images/news/news-161.webp"
                    class="d-flex"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="300px"
                >
                </v-img>
                <div class="text-block ">
                  <h2 class="text-center day">23</h2>
                  <p class="text-center mb-0 pb-0  px-4 ">03/21</p>
                </div>
              </div>
              </router-link>
              <h3 class="my-3 ">7 Places You Must Visit in Casablanca</h3>
              <p>We all agree that Morocco is one of the best destinations when seeking an extraordinary vacation. Due to its beautiful cities that are full of hi</p>
              <v-btn dark large>LEARN MORE</v-btn>
            </v-col>

            <v-col cols="12"
                   lg="4"
                   md="6"
                   sm="12"
            >
              <router-link to="#">
              <div class="container px-0">
                <v-img
                    src="/images/news/news-163.webp"
                    class="d-flex"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="300px"
                >
                </v-img>
                <div class="text-block ">
                  <h2 class="text-center day">23</h2>
                  <p class="text-center mb-0 pb-0  px-4 ">03/21</p>
                </div>
              </div>
              </router-link>
              <h3 class="my-3">Car Classes and Categories</h3>
              <p>Since the construction and development of the automobile industry, there has been a tendency to classify vehicles according to their use and/or b</p>
              <v-btn dark large>LEARN MORE</v-btn>
            </v-col>

            <v-col cols="12"
                   lg="4"
                   md="6"
                   sm="12"
            >
              <router-link to="#">
              <div class="container px-0">
                <v-img
                    src="/images/news/news-162.webp"
                    class="d-flex"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="300px"
                >
                </v-img>
                <div class="text-block ">
                  <h2 class="text-center day">23</h2>
                  <p class="text-center mb-0 pb-0  px-4 ">03/21</p>
                </div>
              </div>
              </router-link>
              <h3 class="my-3">Visit Casablanca: what are the best things to...</h3>
              <p>n a century and a half, Casablanca has grown from a small village of a few thousand inhabitants to a city of nearly four million and has become a</p>
              <v-btn dark large>LEARN MORE</v-btn>
            </v-col>

          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RecentNews"
}
</script>

<style lang="stylus" scoped>

.container
  position relative
.text-block
  position absolute
  bottom 20px
  left 20px
  background-color: black
  color white
.day
  background-color orange
</style>