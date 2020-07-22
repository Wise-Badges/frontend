<template>
  <div class="view-badges">
    <h1>Community</h1>
    <ul class="tweets">
      <li class="tweet"v-for="tweet in tweets" :key="tweet.id">
        <p class="tweet__receiver">{{ tweet.receiver }}</p>
        <p class="tweet__message">{{ tweet.message }}</p>
        <p class="tweet__issuer">issued by {{ tweet.issuer }} on {{ tweet.platform }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
  export default ({
    data() {
      return {
        msg: 'Community',
        tweets: [
          { id: 1, receiver: 'username', issuer: 'username', message: 'At vero eos et accusamus et iusto odio dignis simos ducimus qui blanditiis praesentium voluptatum  et accusamus et iusto.', date: '24/05/2020', platform: 'Twitter'},
          { id: 2, receiver: 'username', issuer: 'username', message: 'At vero eos et accusamus et iusto odio dignis simos ducimus qui blanditiis praesentium voluptatum  et accusamus et iusto.', date: '24/05/2020', platform: 'Twitter'},
          { id: 3, receiver: 'username', issuer: 'username', message: 'At vero eos et accusamus et iusto odio dignis simos ducimus qui blanditiis praesentium voluptatum  et accusamus et iusto.', date: '24/05/2020', platform: 'Twitter'},
          { id: 4, receiver: 'username', issuer: 'username', message: 'At vero eos et accusamus et iusto odio dignis simos ducimus qui blanditiis praesentium voluptatum  et accusamus et iusto.', date: '24/05/2020', platform: 'Twitter'}
        ],
      };
    },
    getImgUrl(badge) {
      //var badgeImages = require.context('./assets/img/badges/', false, /\.svg$/)
      return badgeImages('./' + badge + ".svg")
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

  .tweets {
    display: grid;
    grid-template: repeat(3, auto) / repeat(2, 1fr);
    grid-gap: 1.875rem;
  }

  .tweet {
    background-color: $color-purpleDark;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .tweet__receiver {
      transform: translateX(2rem);
      margin-bottom: 1rem;
    }

    .tweet__receiver::before {
      content: '';
      position: absolute;
      background-image: url('/assets/img/award.svg');
      width: 1.1rem;
      height: 1.5rem;
      background-repeat: no-repeat;
      transform: translate(-2rem, .1rem)
    }

    .tweet__message {
      margin-bottom: 1rem;
    }
  }
</style>
