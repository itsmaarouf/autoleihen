<template>
  <v-app>

    <navigation-mobile class="hidden-md-and-up"></navigation-mobile>
    <navigation class="hidden-sm-and-down"></navigation>

    <v-main class="mt-16">
      <router-view/>
    </v-main>


    <my-footer></my-footer>
  </v-app>
</template>

<script>
import MyFooter from "@/components/MyFooter";
import NavigationMobile from "@/components/NavigationMobile";
import Navigation from "@/components/Navigation";

export default {
  name: "App",
  components: {Navigation, NavigationMobile, MyFooter},
  data: () => {},

};
</script>

<style lang="stylus">

</style>