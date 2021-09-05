<template>
  <v-footer dark padless>
    <v-card class="flex footers" flat tile>
      <v-card-title>
        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >

        <v-spacer></v-spacer>
        <span
          class="
            py-2
            white--text
            font-weight-light
            text-subtitle-1 text-center
            d-inline
          "
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </span>
        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "MyFooter",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style lang="stylus" scoped>
.ftr
  background-color #868686 !important
</style>
