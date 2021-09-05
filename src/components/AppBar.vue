<template>
  <nav>
    <v-toolbar id="toolbar">
      <v-toolbar-title>
        <span class="px-3 font-weight-light text-lg-h4">Mietwagen</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="#EEF9E3"
        class="hidden-md-and-up"
        @click="toggleMenu = !toggleMenu"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-menu
        v-model="showMenu"
        :absolute="toggleMenu"
        :attach="'#toolbar'"
        :content-class="'px-2 elevation-0'"
        :nudge-top="$vuetify.breakpoint.smAndDown ? -52 : -12"
        min-width="100%"
      >
        <div class="d-flex flex-column flex-md-row justify-end">
          <v-btn elevation="0" color="#EEF9E3" to="/autos" class="ma-1"
            >Home</v-btn
          >
          <v-btn color="#EEF9E3" class="ma-1">text1</v-btn>
          <v-btn color="#EEF9E3" class="ma-1">text1</v-btn>
          <v-btn color="#EEF9E3" class="ma-1">text1</v-btn>
          <v-btn color="#EEF9E3" to="/autos" class="ma-1">Autos</v-btn>
          <v-btn color="#EEF9E3" to="/store" class="ma-1">Store</v-btn>
          <v-btn color="#EEF9E3" to="/contact" class="ma-1">Contact</v-btn>
        </div>
      </v-menu>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      toggleMenu: false,
    };
  },
  computed: {
    showMenu() {
      return this.toggleMenu || this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
</script>

<style scoped></style>
