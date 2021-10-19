<template>
  <v-container class="px-0 py-0" fluid>
    <CoverTitle :pageNames="pageName"></CoverTitle>
    <v-row>
      <v-col>
        <div>
          <h1 class="text-center my-12">About Mietwagen</h1>
          <p class="text-center grey--text">Car rental agency in Morocco, airport transfer to all cities, 4x4, minibus, luxury car,<br> utility car and limousine with or without driver for a long or short term.</p>
          <v-btn class="ma-auto d-flex my-12" x-large dark>OUR VEHICLES</v-btn>
        </div>
      </v-col>
    </v-row>
    <testimonial></testimonial>
    <my-carousel></my-carousel>
  </v-container>
</template>

<script>
import CoverTitle from "@/components/CoverTitle";
import Testimonial from "@/components/Testimonial";
import MyCarousel from "@/components/MyCarousel";
export default {
  name: "About",
  components: {MyCarousel, Testimonial, CoverTitle},
  data() {
    return{
      pageName: "About Us"
    }
  }
};
</script>

<style scoped lang="stylus"></style>
