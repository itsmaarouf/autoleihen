import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, {
  theme: {
    Success: "#4CAF50",
    Info: "#2196F3",
    Warning: "#FB8C00",
    Error: "#FF5252",
    primary: "#F1EEE9",
    secondary: "#181413",
    accent: "#3E3937",
    btnColor: "#A68676",
  },
});

export default new Vuetify({});
