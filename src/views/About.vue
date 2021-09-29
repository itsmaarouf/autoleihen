<template>
  <v-container class="px-0 py-0" fluid>
    <CoverTitle :pageNames="pageName"></CoverTitle>
    <testimonial></testimonial>
  </v-container>
</template>

<script>
import CoverTitle from "@/components/CoverTitle";
import Testimonial from "@/components/Testimonial";
export default {
  name: "About",
  components: {Testimonial, CoverTitle},
  data() {
    return{
      pageName: "About Us"
    }
  }
};
</script>

<style scoped lang="stylus"></style>
