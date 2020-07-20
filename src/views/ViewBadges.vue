<template>
  <div class="container">
    <h1>View badges</h1>
    <ul class="badges">
      <li class="badge"v-for="badge in badges" :key="badge.name">
        <img class="badge__img" :src="'assets/img/' + badge.img + '.svg'" v-bind:alt="badge.img">
        <p class="badge__title">{{badge.name}}</p>
        <p class="badge__amount">2.340</p>
        <router-link class="router-item" badge="badge" :to="'/receiver/' + badge.id" id="prim-btn">award badge</router-link>
        <router-link class="router-item" to="/" id="sec-btn">View earners</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default ({
  data() {
    return {
      msg: 'Choose a badge to give',
      badges: [
        { id: 1, name: 'Did not Explode', img: 'didnt_explode', figure: 'circle'},
        { id: 2, name: 'Eureka', img: 'eureka', figure: 'circle'},
        { id: 3, name: 'Leading Lady', img: 'leading_lady', figure: 'hexagon'},
        { id: 4, name: 'Mathematics Wizard', img: 'mathematics_wizard', figure: 'square'},
        { id: 5, name: 'Next gen Einstein', img: 'next_gen_einstein', figure: 'square'},
        { id: 6, name: 'The Bigbang Badge', img: 'the_bigbang_badge', figure: 'hexagon'},
        { id: 7, name: 'You rock(et) science', img: 'you_rocket_science', figure: 'triangle'},
        { id: 8, name: 'Another one', img: 'another_one', figure: 'hexagon'},
      ],
      currentBadge: 2,
      active: true
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

  .badges {
    display: grid;
    grid-template: repeat(3, auto) / repeat(3, 1fr);
    grid-gap: 1.875rem;
  }

  .badge {
    background-color: $color-purpleDark;
    padding: 2rem 1.2rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .badge__img {
      margin-bottom: 2rem;
    }
  }

  .badge__title {
    text-align: center;
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.5;
  }

  .badge__amount {
    color: $color-purpleLight;
    letter-spacing: .1rem;
    font-size: .8rem;
    transform: translateX(1rem);
    font-weight: 500;
    margin-top: 1rem;
  }

  .badge__amount::before {
    content: '';
	  position: absolute;
    background-image: url('/assets/img/award.svg');
    width: 1.1rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    transform: translate(-2rem, -.1rem)
  }
</style>
