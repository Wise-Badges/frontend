<template>
<div>
  <div v-if="loading">Loading...</div>
  <div v-else>
  <h1 class="title">Your badge</h1>
    <div class="detail">

      <div class="detail__info">
        <p><span v-if="this.$store.state.assertionByIdApi.accepted === false"><span class="bold__text">This badge has not been accepted yet,</span> please accept it by liking the <a class="tweet__link" target="_blank" :href="'https://platform.twitter.com/embed/index.html?&embedId=twitter-widget-0&hideThread=false&theme=light&id=' + shortenAnswerId()">following Tweet.</a><br/><br/> Only @{{getName()}} can officially accept this badge before 21/08/20</span><span v-if="this.$store.state.assertionByIdApi.accepted === true" class="bold__text">Congratulations, this badge has already been accepted.</span></p>
        <div class="tweet__wrapper">
          <iframe class="twitter-answer" :src="'https://platform.twitter.com/embed/index.html?&embedId=twitter-widget-0&hideThread=false&theme=light&id=' + shortenEvidenceId()" frameborder="0" height=400 width=500></iframe>
          <router-link id="sec-btn" class="otherbadges__view" to="/community">view other earners</router-link>
        </div>
      </div>

      <div class="detail__badge">
        <p class="narrative-badge">{{this.$store.state.assertionByIdApi.evidence.narrative}}</p>
        <div class="badge__container">
          <img class="badge__img" :src="this.$store.state.badgeByAssertionIdApi.image" :alt="this.$store.state.badgeByAssertionIdApi.image">
          <p class="badge__title">{{this.$store.state.badgeByAssertionIdApi.name}}</p>
          <p class="badge__issued badge__info">Issued on: {{getDate(this.$store.state.assertionByIdApi.issuedOn)}}</p>
          <p class="badge__info">Earned by: @{{getName()}}</p>
          <a :href="'https://api.wisebadges.osoc.be/assertion/' + this.$route.params.assertionId + '/badge'" id="prim-btn">Download</a>
          <p v-if="this.$store.state.assertionByIdApi.accepted === true" class="badge__status">Badge accepted</p>
          <p v-if="this.$store.state.assertionByIdApi.accepted === false" class="badge__status">Badge not accepted yet</p>
        </div>
      </div>
    </div>
    <div class="delete">
      <p>Not happy with your badge? With a simple Tweet command, our bot will delete your badge Open Badge permanently. Only a tweet by @{{getName()}} will be accepted.</p>
      <a target="_blank" id="prim-btn" :href="this.$store.state.twitterString + ' @wisebadges %23delete-' + this.$route.params.assertionId">Tweet to delete</a>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: true,
      currentAssertion: ''
    }),
    async created() {
      await this.$store.dispatch('loadBadges');
      await this.$store.dispatch('loadAssertions');
      console.log(this.$route.params)

      if (this.$route.params)

      // if (this.$store.error.response.status == 404) {
      //   console.log('ondmqfksdqfksd‡')
      // }

      this.loading = false;
    },
    methods: {
      shortenEvidenceId() {
        let fullEvidenceId = this.$store.state.assertionByIdApi.evidence.id;
        let shortEvidenceId = /[^/]*$/.exec(fullEvidenceId)[0]

        return shortEvidenceId
      },
      shortenAnswerId() {
        let fullAnswerId = this.$store.state.assertionByIdApi.answer
        let shortAnswerId = /[^/]*$/.exec(fullAnswerId)[0]

        return shortAnswerId
      },
      getDate(dateString) {
        let date = new Date(dateString);
        let fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

        return fullDate;
      },
      getName() {
        let fullTwitterName = this.$store.state.assertionByIdApi.recipient.identity;
        let shortTwitterName = /[^/]*$/.exec(fullTwitterName)[0]

        return shortTwitterName
      }
    }
  }
</script>

<style lang="scss">
  $color-dark: #0B1147;
  $color-purpleDark: #331F9F;
  $color-purpleLight: #7C6DF1;
  $color-yellow: #FCDC3A;
  $color-mint: #A3F7E9;
  $color-pink: #E598C9;
  $color-red: #DF7668;

.detail {
  display: grid;
  grid-template: auto / 2fr 1fr;
  grid-gap: 1.875rem;

  @media only screen and (max-width: 1024px) {
    grid-template: auto / 1fr;
  }
}

.detail__info {
  padding-right: 2rem;

    @media only screen and (max-width: 1024px) {
        padding-right: 0;
    }

  & .tweet__wrapper {
    margin-top: 3rem;
  }
}

.badge__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (min-width: 1024px) {
  .detail__badge {
      margin-top: -10rem;
  }

}

.detail__badge {
  width: calc(((100% - (100% - 60rem)) - 1.875rem) /3);

  // calc(((100% - (100% - 60rem)) - 1.875rem) /3)
  // (60rem - 1.875rem)/3
  &::after {
    height: 5rem;
    width: inherit;
    background-image: url('/assets/img/flag/flag-bottom.svg');
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center
  }

  & div{
    padding: 2rem;
    background-color: $color-purpleDark;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  & .badge__img {
    margin-bottom: 2rem;
    width: 10rem;
    height: 10rem;
  }

  & .badge__title {
    text-align: center;
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.5;
  }

  & .badge__status {
    margin-top: 3rem;
    font-style: italic;
  }

  & #prim-btn {
    margin-top: 2rem;
  }
}





.delete {
  display: grid;
  grid-template: auto / 2fr 1fr;
  grid-gap: 1.875rem;
  padding-right: 2rem;
  place-items: center center;
  margin-top: 8rem;

  @media only screen and (max-width: 1024px) {
    grid-template: auto / 1fr;
  }

  & p {
    color: $color-purpleLight;
    font-style: italic;
  }

  & #prim-btn {
    height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    height: .15rem;
    width: calc(100vw - (100vw - 60rem));
    background: $color-purpleDark;
    transform: translateY(-4rem);

    @media only screen and (max-width: 1024px) {
      width: 0;
    }
  }
}

.twitter-answer {
  width: 100%;
  height: 100;
}

.narrative-badge {
  font-size: 0.8rem;
  opacity: 0.6;
  margin-bottom: 0.5rem;
}

.bold__text {
  font-weight: 600;
}

.badge__issued {
  margin-top: 1rem;
}

.badge__info {
  opacity: 0.7;
  font-size: 0.9;
}

.tweet__link {
  color: #7C6DF3;
}

.otherbadges__view {
  text-decoration: none;
}
</style>
