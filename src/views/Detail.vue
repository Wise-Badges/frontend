<template>
<div>
  <!-- <div v-if="loading">Loading...</div> -->
  <!-- <div v-else> -->
  <h1 class="title">Your badge</h1>
    <div class="detail">

      <div class="detail__info">
        <p>This badge has not been accepted yet, please accept it by liking the following Tweet. Only @{{this.$store.state.assertionByIdApi.recipient.name}} can officially accept this badge before 21/08/20.</p>

        <div class="tweet__wrapper">
          <blockquote class="twitter-tweet" data-lang="en">
            <p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over
            <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>.
            <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a>
            <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a>
            <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior)
            <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote>
        </div>
      </div>

      <div class="detail__badge">
        <div class="badge__container">
          <!-- <img class="badge__img" :src="badgeOfCurrentAssertionsId().image" :alt="badgeOfCurrentAssertionsId().image"> -->
          <p class="badge__title">{{this.$store.state.assertionByIdApi.badge}}</p>
          <a href="/" id="prim-btn">Download</a>
          <p class="badge__status">Badge has not been accepted.</p>
        </div>
      </div>
    </div>
    <div class="delete">
      <p>Not happy with your badge? With a simple Tweet command, our bot will delete your badge Open Badge permanently. Only a tweet by @receiver_here will be accepted.</p>
      <router-link to="/" target="_blank" id="prim-btn">Tweet to delete</router-link>
    </div>
  <!-- </div> -->
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

      this.loading = true;
    },
    // mounted() {
    //   let recaptchaScript = document.createElement('script')
    //   console.log(recaptchaScript)
    //   recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    //   document.head.appendChild(recaptchaScript)

    //   console.log(this.$store.state.assertionsApi);
    // },
    methods: {
      badgeOfCurrentAssertionsId: function() {
        // console.log(this.currentAssertion.badge);
        // console.log(this.$store.state.badgesApi.data[0].id);

        // for(let i = 0; i < this.$store.state.badgesApi.data.length; i++) {

        //   if (this.currentAssertion.badge === this.$store.state.badgesApi.data[i].id) {
        //     console.log('overeenkomstige id:' + this.$store.state.badgesApi.data[i].id);

        //     let currentBadge = this.$store.state.badgesApi.data[i];

        //     return currentBadge
        //   } else {
        //     //this.$router.push('/')
        //     console.log('ai fout')
        //   }
        // }
      },
      loadCurrentAssertionsId: function() {
        // for(let i = 0; i < this.$store.state.assertionsApi.data.length; i++) {
        //   //console.log(this.$store.state.badgesApi.data[i].id);
        //   let fullId = this.$store.state.assertionsApi.data[i].id;
        //   let shortId = /[^/]*$/.exec(fullId)[0];

        //   //console.log(this.$route.params.idString);
        //   //console.log(shortId);
        //   if (this.$route.params.idString === shortId) {
        //     //console.log(this.$store.state.badgesApi.data[i].name);
        //     console.log('succeed')
        //     let currentAssertionsDetail = this.$store.state.assertionsApi.data[i];
        //     //console.log(currentAssertionsDetail)

        //    this.currentAssertion = currentAssertionsDetail;

        //    //console.log(this.currentAssertion);

        //     return currentAssertionsDetail
        //   } else {
        //     this.$router.push('/')
        //     console.log('error loop')
        //     return 'erroooor assertion'
        //   }
        // }
      },
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
    margin-top: 1rem;
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
</style>
