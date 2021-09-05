<template>
  <v-container fluid class="px-0 pt-0">
    <home-header></home-header>
    <form-and-text-body></form-and-text-body>
  </v-container>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import FormAndTextBody from "@/components/FormAndTextBody";
export default {
  name: "Home",
  components: {FormAndTextBody, HomeHeader},
};
</script>

<style scoped lang="stylus"></style>
