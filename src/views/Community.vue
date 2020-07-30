<template>
  <div class="view-badges">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h1 class="title">Community</h1>

      <div class="selection__container">
      <select class="badge__select" v-on:change="changeRoute" v-model="currentBadge" name="select-badge" id="">
        <option value="" selected>All</option>
        <option
          v-for="badge in this.$store.state.badgesApi.data"
          :key="badge.name"
          :value="getId(badge.id)"
          :selected="getSelectedFromQuery(badge.id)"
        >{{ badge.name }}</option>
      </select>
      <div class="white__block"></div>
      </div>

      <ul class="acceptedBadges">
        <li class="li__badge" v-for="assertion in this.$store.state.assertionsApi.data" :key="assertion.id">
          <div v-if="currentBadge === getId(assertion.badge)">
            <div class="acceptedBadge li__badge__active" >
              <a target="_blank" :href="assertion.evidence.id">
              <p class="badge__receiver">{{ assertion.recipient.name }} received <span class="make__italic">#{{dirtyFunctionBecause1AM(assertion.badge)}}</span></p>
              <p class="badge__message">{{ assertion.message }}</p>
              <p class="badge__issuer">issued on {{ getDate(assertion.issuedOn) }}</p>
              </a>
            </div>
          </div>
          <div class="acceptedBadge li__badge__active" v-if="currentBadge === ''">
            <a target="_blank" :href="assertion.evidence.id">
            <p class="badge__receiver">{{ assertion.recipient.name }} received <span class="make__italic">#{{dirtyFunctionBecause1AM(assertion.badge)}}</span></p>
            <p class="badge__message">{{ assertion.message }}</p>
            <p class="badge__issuer">issued on {{ getDate(assertion.issuedOn) }}</p>
            </a>
          </div>
          <div class="acceptedBadge li__badge__active" v-if="currentBadge === undefined">
            <a target="_blank" :href="assertion.evidence.id">
            <p class="badge__receiver">{{ assertion.recipient.name }} received <span class="make__italic">#{{dirtyFunctionBecause1AM(assertion.badge)}}</span></p>
            <p class="badge__message">{{ assertion.message }}</p>
            <p class="badge__issuer">issued on {{ getDate(assertion.issuedOn) }}</p>
            </a>
          </div>
        </li>
      </ul>
      <div class="buttons__page-container">
        <div class="buttons__pages">
          <button class="button_specific" v-if="checkIfPreviousIsInJSON()" id="sec-btn" @click="loadPreviousJSON()">Previous</button>
          <button class="button_specific" v-if="checkIfNextIsInJSON()" id="sec-btn" @click="loadNextJSON()">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default ({
    data() {
      return {
        currentBadge: '',
        loading: true,
        currentPath: '',
        page: 1,
        next: false,
        previous: false
      };
    },
    async created() {
      this.$store.state.currentPage = 1
      this.currentPath = this.$route.fullPath;
      this.currentBadge =  this.$route.params.badgeId;

      await this.$store.dispatch('loadBadges');
      await this.$store.dispatch('loadAssertions');

      //this.previous = ('previous' in this.$store.state.assertionsApi);
      //this.next = ('next' in this.$store.state.assertionsApi);

      this.loading = false;
    },
    // computed: {
    //   checkIfNext: function () {
    //       return ('next' in this.$store.state.assertionsApi)
    //       console.log('reloaoaaddden')
    //       console.log(this.$store.state.assertionsApi);
    //   },
    //   checkIfPrevious: function () {
    //       return ('previous' in this.$store.state.assertionsApi)
    //       console.log(this.$store.state.assertionsApi);
    //   },
    // },
    methods: {
      getId(id) {
        let shortBadgeId = /[^/]*$/.exec(id)[0];
        return id;
      },
      async loadPreviousJSON() {
        this.$store.state.currentPage --;
        await this.$store.dispatch('loadAssertions', this.currentBadge);

        this.previous = ('previous' in this.$store.state.assertionsApi);
      },
      async loadNextJSON() {

        this.$store.state.currentPage ++;
        await this.$store.dispatch('loadAssertions', this.currentBadge);

        //this.next = ('next' in this.$store.state.assertionsApi);
      },
      checkIfNextIsInJSON() {
        //console.log(this.$store.state.assertionsApi);
        console.log('dit is next')
        console.log('next' in this.$store.state.assertionsApi);
          return ('next' in this.$store.state.assertionsApi)
      },
      checkIfPreviousIsInJSON() {
        //console.log(this.$store.state.assertionsApi);
        console.log('dit is previous')
        console.log('previous' in this.$store.state.assertionsApi);
          return ('previous' in this.$store.state.assertionsApi)

      },
      async changeRoute() {
        this.$store.state.currentPage = 1;

        await this.$store.dispatch('loadAssertions', this.currentBadge);
        //this.$router.push({path: '/community/' + this.currentBadge }).catch(()=>{});
        //this.next = ('next' in this.$store.state.assertionsApi);
        //this.previous = ('previous' in this.$store.state.assertionsApi);

        //console.log(this.next);
        //console.log('aaaaa');

        //console.log(this.$store.state.assertionsApi);
        //console.log(this.currentBadge)
      },
      getDate(dateString) {
        let date = new Date(dateString);
        let fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        return fullDate;
      },
      getBadgeNameById() {
        if(this.$route.params.badgeId === undefined) {
          console.log('all page')

        } else {
          console.log(this.$store.state.assertionByIdApi)
          console.log(this.$route.params)
        }
      },
      getAssertionInfo() {
          console.log('test');
          console.log(this.$store.state);
      },
      findAllAssertions() {
        //console.log(this.$store.state)
      },
      getSelectedFromQuery(badgeId) {
        //console.log(badgeId)
        //this.$store.dispatch('loadAssertions', badgeId);
      },



      dirtyFunctionBecause1AM(badgeOfPerson) {
        // SORRY
        //console.log(badgeOfPerson)
        if( badgeOfPerson === 'https://api.wisebadges.osoc.be/badgeclass/5f201418631ce1068d217667') {
          return 'DidNotExplode'
        } else if (badgeOfPerson === 'https://api.wisebadges.osoc.be/badgeclass/5f201805631ce1068d217669') {
          return 'EmpowermentPractices'
        } else if (badgeOfPerson === 'https://api.wisebadges.osoc.be/badgeclass/5f2012ff631ce1068d217666') {
          return 'Eureka'
        } else if (badgeOfPerson === 'https://api.wisebadges.osoc.be/badgeclass/5f201e51631ce1068d21766e') {
          return 'HackerWoMan'
        } else if (badgeOfPerson === 'https://api.wisebadges.osoc.be/badgeclass/5f200a8e631ce1068d217664') {
          return 'LeadingLady'
        } else if (badgeOfPerson === 'https://api.wisebadges.osoc.be/badgeclass/5f2018d7631ce1068d21766a') {
          return 'MathematicsWizzard'
        } else if (badgeOfPerson === 'https://api.wisebadges.osoc.be/badgeclass/5f201b84631ce1068d21766c') {
          return 'NextGenGenius'
        } else if (badgeOfPerson === 'https://api.wisebadges.osoc.be/badgeclass/5f201751631ce1068d217668') {
          return 'BigBangBadge'
        } else if (badgeOfPerson === 'https://api.wisebadges.osoc.be/badgeclass/5f201a58631ce1068d21766b') {
          return 'YouRocketScience'
        } else if (badgeOfPerson === 'https://api.wisebadges.osoc.be/badgeclass/5f201253631ce1068d217665') {
          return 'osoc20Survivor'
        }
      }
    }
  });
</script>


<style lang="scss">
  $color-dark: #0B1147;
  $color-purpleDark: #331F9F;
  $color-purpleLight: #7C6DF1;
  $color-yellow: #FCDC3A;
  $color-mint: #A3F7E9;
  $color-pink: #E598C9;
  $color-red: #DF7668;

  .acceptedBadges {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    // flex-wrap: wrap;
    // grid-template: repeat(3, auto) / repeat(2, 1fr);
     //grid-gap: 1.875rem;

    // @media only screen and (max-width: 768px) {
    //   grid-template: auto / repeat(1, 1fr);
    //   grid-gap: 1.25rem;
    // }
  }

    .li__badge__active {
    margin-top: 1rem;
  }

  .acceptedBadge {
    background-color: $color-purpleDark;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .badge__receiver {
      transform: translateX(2rem);
      margin-bottom: 1rem;
      padding-right: 2rem;
      font-weight: 700;

      &::before {
        content: '';
        position: absolute;
        background-image: url('/assets/img/icons/award.svg');
        width: 1.1rem;
        height: 1.5rem;
        background-repeat: no-repeat;
        transform: translate(-2rem, .1rem)
      }
    }

    & a {
      color: white;
      text-decoration: none;
    }

    .badge__message {
      margin-bottom: 1rem;
    }

    .badge__issuer {
      padding-left: 4rem;

      &::before {
        content: '';
        position: absolute;
        height: .1rem;
        width: 2rem;
        background-color: $color-purpleLight;
        transform: translate(-3rem, .9rem);
      }
    }
  }

  .all__option {
    color: black;
  }


.badge__select {
  padding: 1rem 2rem;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  font-size: 1rem;
  border: transparent;
}

.badge__select:focus {
  outline: transparent;
}

.badge__select {
  letter-spacing: 0.02em;
  color: #0B1147;
  font-weight: 600;
}

.make__italic {
  font-style: italic;
  font-weight: 400;
}

.selection__container {
  display: flex;
}

.white__block {
  background-color: white;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  width: 2rem;
  cursor: default;
}

.buttons__pages {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.button_specific {
margin: 0 2rem;
}

.button_specific:focus {
  outline: transparent;
}

.buttons__page-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
