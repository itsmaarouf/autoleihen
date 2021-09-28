<template>
  <v-container class="px-0 py-0" fluid>
    <CoverTitle></CoverTitle>
    <testimonial></testimonial>
  </v-container>
</template>

<script>
import CoverTitle from "@/components/CoverTitle";
import Testimonial from "@/components/Testimonial";
export default {
  name: "About",
  components: {Testimonial, CoverTitle},
};
</script>

<style scoped lang="stylus"></style>
