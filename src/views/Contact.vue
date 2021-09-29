<template>
  <v-container fluid class="px-0 py-0">
    <CoverTitle :pageNames="pageName"></CoverTitle>
    <el-empty description="Contact page is empty"></el-empty>
  </v-container>
</template>

<script>
import CoverTitle from "@/components/CoverTitle";
export default {
  name: "Contact",
  components: {CoverTitle},
  data() {
    return{
      pageName: "Contact Us"
    }
  }
};
</script>

<style scoped></style>
