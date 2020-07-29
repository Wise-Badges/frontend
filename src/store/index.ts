import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from '../router/index';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
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
        })
        .catch(error => {
          router.push({ name: 'notFound' })
          return Promise.reject(error);
        });
    },

    loadAssertions({commit}) {
      return axios
        .get("https://api.wisebadges.osoc.be/assertions/")
        .then(r => {
          let assertionsApi = r.data;
          commit("SET_ASSERTIONS", assertionsApi);
        })
        .catch(error => {
          router.push({ name: 'notFound' })
          return Promise.reject(error);
        })
    },

    loadAssertionById({ commit }, assertionID) {
      return axios
        .get('https://api.wisebadges.osoc.be/assertion/' + assertionID.assertionID)
        .then(r => {
          let assertionByIdApi = r.data
          commit("SET_ASSERTIONBYID", assertionByIdApi);
        })
        .catch(error => {
          router.push({ name: 'notFound' })
          return Promise.reject(error);
        })
    },

    loadBadgeByAssertionId({ commit }, assertionID) {
      return axios
        .get('https://api.wisebadges.osoc.be/assertion/' + assertionID.assertionID)
        .then(r => {
          let badgeByAssertionIdApi = r.data.badge

          return axios
            .get(badgeByAssertionIdApi)
            .then(badgeresponse => {
              let badgeByAssertionIdApi = badgeresponse.data;
              commit("SET_BADGEBYASSERTIONID", badgeByAssertionIdApi);
          })
        })
        .catch(error => {
          router.push({ name: 'notFound' })
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
          router.push({ name: 'notFound' })
          return Promise.reject(error);
        });
    }

  },
  modules: {
  },
});
