<template>
  <v-container fluid class="px-0 py-0">
    <CoverTitle :pageNames="pageName"></CoverTitle>
    <car-filter></car-filter>
  </v-container>
</template>

<script>
import CoverTitle from "@/components/CoverTitle";
import CarFilter from "@/components/CarFilter";
export default {
  name: "Cars",
  components: {CarFilter, CoverTitle},
  data() {
    return{
      pageName: "Car Fleet"
    }
  }
};
</script>

<style scoped></style>
