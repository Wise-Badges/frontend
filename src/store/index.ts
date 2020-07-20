import Vue from 'vue';
import Vuex from 'vuex';
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    badges: [
      { id: 1, name: 'Did not Explode', img: 'didnt_explode', figure: 'circle'},
      { id: 2, name: 'Eureka', img: 'eureka', figure: 'circle'},
      { id: 3, name: 'Leading Lady', img: 'leading_lady', figure: 'hexagon'},
      { id: 4, name: 'Mathematics Wizard', img: 'mathematics_wizard', figure: 'square'},
      { id: 5, name: 'Next gen Einstein', img: 'next_gen_einstein', figure: 'square'},
      { id: 6, name: 'The Bigbang Badge', img: 'the_bigbang_badge', figure: 'hexagon'},
      { id: 7, name: 'You rock(et) science', img: 'you_rocket_science', figure: 'triangle'},
      { id: 8, name: 'Another one', img: 'another_one', figure: 'hexagon'},
    ]
  },
  mutations: {
    SET_BADGES(state, badges) {
      state.badges = badges;
    }
  },
  actions: {
    loadBadges({ commit }) {
      // axios
      // .get('https://mirrorcontrol.herokuapp.com/api/badges')
      // .then(data => {
      //   let badges = data.data
      //   commit('SET_BADGES', badges)
      // })
      // .catch(error => {
      // })
    }
  },
  modules: {
  },
});
