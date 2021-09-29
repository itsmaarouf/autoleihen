<template>
  <v-container fluid class="px-0 py-0">
    <CoverTitle :pageNames="pageName"></CoverTitle>
    <el-empty description="Cars page is empty"></el-empty>
  </v-container>
</template>

<script>
import CoverTitle from "@/components/CoverTitle";
export default {
  name: "Cars",
  components: {CoverTitle},
  data() {
    return{
      pageName: "Parking"
    }
  }
};
</script>

<style scoped></style>
