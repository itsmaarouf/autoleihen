<template>
  <v-container fluid class="px-0 pt-0">
    <home-header></home-header>

    <form-and-text-body></form-and-text-body>
    <body-text></body-text>
    <auto-category ></auto-category>
    <why-choose-us></why-choose-us>

  </v-container>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import FormAndTextBody from "@/components/FormAndTextBody";
import BodyText from "@/components/BodyText";
import AutoCategory from "@/components/autoCategory";
import WhyChooseUs from "@/components/WhyChooseUs";
export default {
  name: "Home",
  components: {WhyChooseUs, AutoCategory, BodyText, FormAndTextBody, HomeHeader},
};
</script>

<style scoped lang="stylus"></style>
