<template>
  <v-row>
    <v-col>
      <v-card cols="12"
              lg="4"
              v-for="auto in getAutoCategorie"
              :key="auto.id"
              class="ma-auto float-left"
              width="200"
              elevation="0">
        <v-img class="mb-2"
               height="100"
               width="100"
               :src="auto.src"
        ></v-img>
        <h3 class="d-inline">{{auto.categoryName}}</h3>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "autoCategory",

  computed: {
    ...mapGetters(['getAutoCategorie'])
  }
}
</script>

<style scoped>

</style>