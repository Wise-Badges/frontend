import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from '../router';

Vue.use(Vuex, axios);

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
    badgesApi: [],
    assertionsApi: [],
    assertionByIdApi: [],
    badgeByAssertionIdApi: [],
    assertionsByBadgeIdApi: [],
    receiver: [{ receiver: '' }],
    message: [{message: ''}],
    pressedAtmark: false,
    validField: false,
    validMessage: false,
    badgeId: '',
    assertionId: '',

    thrustedDomain: 'https://api.wisebadges.osoc.be',
    twitterString: 'https://twitter.com/intent/tweet?text=',
  },
  mutations: {
    SET_BADGES(state, badgesApi) {
      state.badgesApi = badgesApi;
    },
    SET_ASSERTIONS(state, assertionsApi) {
      state.assertionsApi = assertionsApi;
    },
    SET_ASSERTIONBYID(state, assertionByIdApi) {
      state.assertionByIdApi = assertionByIdApi;
    },
    SET_BADGEBYASSERTIONID(state, badgeByAssertionIdApi) {
      state.badgeByAssertionIdApi = badgeByAssertionIdApi;
    },
    SET_ASSERTIONSBYBADGEID(state, assertionsByBadgeIdApi) {
      state.assertionsByBadgeIdApi = assertionsByBadgeIdApi;
    }
  },

  actions: {
    loadBadges({ commit }) {
      return axios
        .get("https://api.wisebadges.osoc.be/badgeclasses/")
        .then(r => {
          let badgesApi = r.data;
          commit("SET_BADGES", badgesApi);
          //console.log(badgesApi);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    },

    loadAssertions({commit}) {
      return axios
        .get("https://api.wisebadges.osoc.be/assertions/")
        .then(r => {
          let assertionsApi = r.data;
          commit("SET_ASSERTIONS", assertionsApi);
          console.log(assertionsApi);
        })
        .catch(error => {
          return Promise.reject(error);
        })
    },

    loadAssertionById({ commit }, assertionID) {
      return axios
        // .get('https://api.wisebadges.osoc.be/assertion/' + this.route.params)
        .get('https://api.wisebadges.osoc.be/assertion/' + assertionID.assertionID)
        .then(r => {
          let assertionByIdApi = r.data
          commit("SET_ASSERTIONBYID", assertionByIdApi);
          //console.log(assertionID);
          //console.log(assertionByIdApi);
        })
        .catch(error => {
          //console.log('error')
          return Promise.reject(error);
        })
    },

    loadBadgeByAssertionId({ commit }, assertionID) {
      return axios
        // .get('https://api.wisebadges.osoc.be/assertion/' + this.route.params)
        // .get('https://api.wisebadges.osoc.be/badgeclass/'+ badgeID.badgeID + '/assertions')
        // .get('https://api.wisebadges.osoc.be/badgeclass/' + badgeID.badgeID)
        .get('https://api.wisebadges.osoc.be/assertion/' + assertionID.assertionID)
        .then(r => {
          let badgeByAssertionIdApi = r.data.badge

          return axios
            .get(badgeByAssertionIdApi)
            .then(badgeresponse => {
              let badgeByAssertionIdApi = badgeresponse.data;
              commit("SET_BADGEBYASSERTIONID", badgeByAssertionIdApi);
          })

          // let badgeByAssertionIdApi = r.data.data[0].badge
          // commit("SET_BADGEBYASSERTIONID", badgeByAssertionIdApi);
          // console.log(badgeByAssertionIdApi);
        })
        .catch(error => {
          console.log('errorRRRRRR')
          return Promise.reject(error);
        })
    },

    loadAssertionsByBadgeId({ commit }, badgeId) {
      return axios
        .get('https://api.wisebadges.osoc.be/badgeclass/' + badgeId.badgeId + '/assertions')
        .then(r => {
          let assertionsByBadgeIdApi = r.data.data;
          commit("SET_ASSERTIONSBYBADGEID", assertionsByBadgeIdApi);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    }

  },
  modules: {
  },
});
