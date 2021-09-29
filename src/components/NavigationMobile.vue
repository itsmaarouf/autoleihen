<template>
  <v-app-bar absolute dark elevate-on-scroll>
    <span class="text-h4 font-weight-light">Mietwagen</span>

    <v-spacer></v-spacer>

    <template>
      <div class="text-center">
        <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ on, attrs }">
            <v-app-bar-nav-icon v-bind="attrs" v-on="on"> </v-app-bar-nav-icon>
          </template>
          <v-sheet dark class="text-center">
            <v-btn
              to="/"
              class="d-block v-size--large text-h6 font-weight-thin"
              @click="sheet = !sheet"
            >
              <span class="pa-3">Home</span>
            </v-btn>

            <v-btn
              to="/about"
              class="d-block v-size--large text-h6 font-weight-thin"
              @click="sheet = !sheet"
            >
              <span class="pa-3">About Us</span>
            </v-btn>

            <v-btn
              to="/cars"
              class="d-block v-size--large text-h6 font-weight-thin"
              @click="sheet = !sheet"
            >
              <span class="pa-3">Our Cars</span>
            </v-btn>

            <v-btn
              to="/minibus"
              class="d-block v-size--large text-h6 font-weight-thin"
              @click="sheet = !sheet"
            >
              <span class="pa-3">Minibus</span>
            </v-btn>

            <v-btn
              to="/services"
              class="d-block v-size--large text-h6 font-weight-thin"
              @click="sheet = !sheet"
            >
              <span class="pa-3">Our Services</span>
            </v-btn>

            <v-btn
              to="/news"
              class="d-block v-size--large text-h6 font-weight-thin"
              @click="sheet = !sheet"
            >
              <span class="pa-3">News</span>
            </v-btn>

<!--            <v-btn
              to="/testimonials"
              class="d-block v-size&#45;&#45;large text-h6 font-weight-thin"
              @click="sheet = !sheet"
            >
              <span class="pa-3">Testimonials</span>
            </v-btn>-->

            <v-btn
              to="/contact"
              class="d-block v-size--large text-h6 font-weight-thin"
              @click="sheet = !sheet"
            >
              <span class="pa-3">Contact Us</span>
            </v-btn>
          </v-sheet>
        </v-bottom-sheet>
      </div>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
  }),
};
</script>

<style lang="stylus" scoped></style>
