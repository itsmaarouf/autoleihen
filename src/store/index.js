import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  getters:{
    getCarousels: state => state.carousel,
    getSelectItems: state => state.selectItems,
  },
  state: {
    todos: [],
    carousel: [
      {src: '/images/carousel/1.jpg',
        bigTitle:'A full range of vehicles at your disposal',
        smallTitle: 'Quality service adapted to a diversified clientele',},
      {src: '/images/carousel/2.jpg',
        bigTitle:'Best Minibus Rental Rates in Morocco',
        smallTitle: 'rt',},
      {src: '/images/carousel/3.jpg',
        bigTitle:'The satisfaction of our customers is our main goal.',
        smallTitle: 'Quality service',},
    ],
    selectItems: [
      {id:1, dataCity:'agadir',title: 'Agadir - Airport El Massira'},
      {id:2,dataCity:'agadir',title: 'Agadir - City'},
      {id:3,dataCity:'bouznika',title: 'Bouznika - City Center'},
      {id:4,dataCity:'casablanca',title: 'Casablanca - Airport Mohammed V'},
      {id:5,dataCity:'casablanca',title: 'Casablanca - City Center'},
      {id:6,dataCity:'fes',title: 'Fez - Airport'},
      {id:7,dataCity:'fes',title: 'Fez - City Center'},
      {id:8,dataCity:'marrakech',title: 'Marrakech - Airport'},
      {id:9,dataCity:'marrakech',title: 'Marrakech - City Center'},
      {id:10,dataCity:'mohammedia',title: 'Mohammedia - City Center'},
      {id:11,dataCity:'rabat',title: 'Rabat - Airport'},
      {id:12,dataCity:'rabat',title: 'Rabat - City Center'},
      {id:13,dataCity:'marrakech',title: 'Tangier - Airport'},
      {id:14,dataCity:'marrakech',title: 'Tangier - City Center'},
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
