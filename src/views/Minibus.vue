<template>
  <v-container fluid class="px-0 py-0">
    <CoverTitle :pageNames="pageName"></CoverTitle>
    <el-empty description="Minibus page is empty"></el-empty>
  </v-container>
</template>

<script>
import CoverTitle from "@/components/CoverTitle";
export default {
  name: "Minibus",
  components: {CoverTitle},
  data() {
    return{
      pageName: "Minibus Rental In Casablanca, Morocco / Tourist Transport"
    }
  }
};
</script>

<style scoped></style>
