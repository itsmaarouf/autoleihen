<template>
  <v-container fluid class="px-0 py-0">
    <CoverTitle :pageNames="pageName"></CoverTitle>
    <el-empty description="Services page is empty"></el-empty>
  </v-container>
</template>

<script>
import CoverTitle from "@/components/CoverTitle";
export default {
  name: "Services",
  components: {CoverTitle},
  data() {
    return{
      pageName: "Our Services"
    }
  }
};
</script>

<style scoped></style>
