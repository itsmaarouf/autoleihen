import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  getters:{
    getCarousels: state => state.carousel,
    getSelectItems: state => state.selectItems,
    getAutoCategorie: state => state.autoCategorie,
    getMysponsors: state => state.Mysponsors,
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
    autoCategorie: [
      {id: 1, src: '/images/AutoCategory/4×4-Car-rental.jpg',categoryName: '4×4 Car rental'},
      {id: 2,src: '/images/AutoCategory/Aeroport-Transfert.jpg',categoryName: 'Aeroport Transfert'},
      {id: 3,src: '/images/AutoCategory/City-Car-rental.jpg',categoryName: 'City Car rental'},
      {id: 4,src: '/images/AutoCategory/Limousine-Rental.jpg',categoryName: 'Limousine Rental'},
      {id: 5,src: '/images/AutoCategory/long-duree.jpg',categoryName: 'long duree'},
      {id: 6,src: '/images/AutoCategory/Luxury-Car-rental.jpg',categoryName: 'Luxury Car rental'},
      {id: 7,src: '/images/AutoCategory/Minibus-rental.jpg',categoryName: 'Minibus rental'},
      {id: 8,src: '/images/AutoCategory/Utility-Rental.jpg',categoryName: 'Utility Rental'},
      {id: 9,src: '/images/AutoCategory/Wedding-car-rental.jpg',categoryName: 'Wedding car rental'},
    ],
    Mysponsors: [
      {id:0, src: '/images/sponsored/Audi.png', brandName: 'Audi'},
      {id:1, src: '/images/sponsored/bmw.png', brandName: 'bmw'},
      {id:2, src: '/images/sponsored/dacia.png', brandName: 'dacia'},
      {id:3, src: '/images/sponsored/hyundai.png', brandName: 'hyundai'},
      {id:4, src: '/images/sponsored/landrover.png', brandName: 'landrover'},
      {id:5, src: '/images/sponsored/mercedes.png', brandName: 'mercedes'},
      {id:6, src: '/images/sponsored/peugeot.png', brandName: 'peugeot'},
      {id:7, src: '/images/sponsored/porsche.png', brandName: 'porsche'},
      {id:8, src: '/images/sponsored/renault.png', brandName: 'renault'},
      {id:9, src: '/images/sponsored/volkswagen.png', brandName: 'volkswagen'},
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
