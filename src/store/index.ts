import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    badges: [
      { id: 1, name: 'Did not Explode', img: 'didnt_explode', figure: 'circle', hashtag: '%23didntexplode'},
      { id: 2, name: 'Eureka', img: 'eureka', figure: 'circle', hashtag: '%23eureka'},
      { id: 3, name: 'Leading Lady', img: 'leading_lady', figure: 'hexagon', hashtag: '%23leadinglady'},
      { id: 4, name: 'Mathematics Wizard', img: 'mathematics_wizard', figure: 'square', hashtag: '%23mathematicswizard'},
      { id: 5, name: 'Next gen Einstein', img: 'next_gen_einstein', figure: 'square', hashtag: '%23nextgeneinstein'},
      { id: 6, name: 'The Bigbang Badge', img: 'the_bigbang_badge', figure: 'hexagon', hashtag: '%23thebigbangbadge'},
      { id: 7, name: 'You rock(et) science', img: 'you_rocket_science', figure: 'triangle', hashtag: '%23yourockscience'},
      { id: 8, name: 'Another one', img: 'another_one', figure: 'hexagon', hashtag: '%23anotherone'},
    ],
    receiver: [{ receiver: '' }],
    message: [{message: ''}],
    pressedAtmark: false,
    validField: false,
    validMessage: false,
    twitterString: 'https://twitter.com/intent/tweet?text=Hey'
    // twitterString: 'https://twitter.com/intent/tweet?text=This%20is%20an%20example%20of%20a%20pre-written%20tweet-%20don%27t%20forget%20that%20it%20needs%20to%20be%20less%20than%20280%20characters'
  },
  mutations: {
    SET_BADGES(state, badges) {
      state.badges = badges;
    }
  },
  actions: {
    loadBadges({ commit }) {
      axios
        .get("http://localhost:5000/badgeclasses")
        .then(r => {
          let badgesTest = r.data;
          commit("SET_BADGES", badgesTest);
          console.log(badgesTest);
        })
        .catch(error => {});
    }
  },
  modules: {
  },
});
