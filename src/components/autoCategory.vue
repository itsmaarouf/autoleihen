<template>
  <v-col>
    <v-row>
      <v-card
              cols="12"
              lg="4"
              md="6"
              sm="12"
              v-for="auto in getAutoCategorie"
              :key="auto.id"
              class="mx-5 my-2 d-flex align-center "
              width="400"
              outlined
      >
          <v-img height="80"
                 max-width="100"
                 :src="auto.src"
          ></v-img>
          <h3 class="mx-3 pa-auto">{{ auto.categoryName }}</h3>
        </v-card>
      </v-row>
  </v-col>
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