<template>
  <v-container fluid class="px-0 py-0">
    <CoverTitle :pageNames="pageName"></CoverTitle>
    <el-empty description="News page is empty"></el-empty>
  </v-container>
</template>

<script>
import CoverTitle from "@/components/CoverTitle";
export default {
  name: "News",
  components: {CoverTitle},
  data() {
    return{
      pageName: "News"
    }
  }
};
</script>

<style scoped></style>
