<template>
  <div class="view-badges">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h1 class="title">Community</h1>

      <select class="badge__select" v-on:change="changeRout"  v-model="currentBadge" name="select-badge" id="">
        <option value="" selected>All</option>
        <option
          v-for="badge in this.$store.state.badgesApi.data"
          :key="badge.name"
          :value="getId(badge.id)"
        >{{ badge.name }}</option>
      </select>

      <ul class="acceptedBadges">
        <li class="li__badge" v-for="assertion in this.$store.state.assertionsApi.data" :key="assertion.id">
          <div v-if="currentBadge === getId(assertion.badge)">
            <div class="acceptedBadge" >
              <a :href="assertion.evidence.id">
              <p class="badge__receiver">{{ assertion.recipient.name }} received LATER OPLOSSEN</p>
              <p class="badge__message">{{ assertion.message }}</p>
              <!-- <p>{{getId(assertion.badge)}}</p> -->
              <p class="badge__issuer">issued on {{ getDate(assertion.issuedOn) }}</p>
              </a>
            </div>
          </div>
          <div class="acceptedBadge" v-if="currentBadge === ''">
            <a :href="assertion.evidence.id">
            <p class="badge__receiver">{{ assertion.recipient.name }} received LATER OPLOSSEN</p>
            <!-- <p>{{getId(assertion.badge)}}</p> -->
            <p class="badge__message">{{ assertion.message }}</p>
            <p class="badge__issuer">issued on {{ getDate(assertion.issuedOn) }}</p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default ({
    data() {
      return {
        //assertions: this.$store.state.assertionsApi.data,
        //badges: this.$store.state.badgesApi.data,
        currentBadge: '',
        loading: true,
        currentPath: ''
      };
    },
    async created() {
      //console.log(this.$route.fullPath)
      this.currentPath = this.$route.fullPath;
      //console.log(this.currentPath)
      await this.$store.dispatch('loadBadges');
      await this.$store.dispatch('loadAssertions');
      //if (this.$store.state.loadAssertionsByBadgeId !== undefined) {
      //console.log(this.$store.state.loadAssertionsByBadgeId);
      //}


      //console.log("created")
      //console.log(this.$store.state.assertionsApi.data);

      this.loading = false;
    },
    // mounted () {
    //   console.log(this.$store.state.assertionsByBadgeIdApi);
    // },
    methods: {
      getId(id) {
        let shortBadgeId = /[^/]*$/.exec(id)[0];
        return shortBadgeId;
      },

      changeRout() {
        //this.$router.push(""/community/ + this.currentBadge").catch(()=>{});
        this.$router.push({path: '/community/' + this.currentBadge }).catch(()=>{});
        console.log(this.$store.state.assertionsByBadgeIdApi)
      },
      getDate(dateString) {
        let date = new Date(dateString);
        let fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        return fullDate;
      },
      getBadgeNameById() {
        //let badge = this.badges.find(badge => badge.id === id);
        // for (let i = 0; i < 10; i++) {
        //   let badge = this.$store.state.badgesApi.data[i].id; // alle badges opvragen
        //   let badgeShort = /[^/]*$/.exec(badge)[0]

        //   console.log(badgeShort)
        // }

        if(this.$route.params.badgeId === undefined) {
          console.log('all page')

        } else {
          console.log(this.$store.state.assertionByIdApi)
          console.log(this.$route.params)
        }
        // } else {
        //   console.log(this.$route.params)
        // }

        //console.log(this.$store.state)
        // if (badge) {
        //   return badge.name;
        // } else {
        //   return 'undefined';
        // }
      },
      getAssertionInfo() {
          console.log('test');
          console.log(this.$store.state);
      },
      findAllAssertions() {
        //console.log(this.$store.state)
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

  .li__badge {
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
  border-radius: 3rem;
  font-size: 1rem;
}

.badge__select:focus {
  outline: transparent;
}
</style>
