<template>
  <div>
    <h1 class="title">View badges</h1>
    <ul class="badges">
      <li class="badge"v-for="badge in this.$store.state.badgesApi.data" :key="badge.name">
        <section>
          <img class="badge__img" :src="badge.image" v-bind:alt="badge.name">
          <h2 class="badge__title">{{badge.name}}</h2>
          <!-- TO DO: Total amount of accepted badges display -->
          <!-- <p class="badge__amount">2.340</p> -->
          <p class="badge__description">{{badge.description}}</p>
          <router-link class="router-item" badge="badge"  :to="'/receiver/' + getId(badge.id)" id="prim-btn">award badge</router-link>
          <router-link class="router-item" :to="'/community/' + getId(badge.id)" id="sec-btn">View earners</router-link>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
export default ({
  data() {
    return {
      msg: 'Choose a badge to give',
      assertionsByBadges: this.$store.state.assertionsByBadgeIdApi
    };
  },
  methods: {
    getId(id) {
      let shortBadgeId = /[^/]*$/.exec(id)[0];
      return shortBadgeId;
    }
  }
});
</script>

<style scoped lang="scss">
  $color-dark: #0B1147;
  $color-purpleDark: #331F9F;
  $color-purpleLight: #7C6DF1;
  $color-yellow: #FCDC3A;
  $color-mint: #A3F7E9;
  $color-pink: #E598C9;
  $color-red: #DF7668;

  .badges {
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    grid-gap: 1.875rem;

    @media only screen and (max-width: 1024px) {
      grid-template: auto / repeat(2, 1fr);
    }

    @media only screen and (max-width: 768px) {
      grid-template: auto / repeat(1, 1fr);
      grid-gap: 1.25rem;
    }
  }

  .badge {
    background-color: $color-purpleDark;
  }

  .badge section {
    padding: 2rem 1.2rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .badge__img {
      margin-bottom: 2rem;
      height: 10.4rem;
    }

    & #prim-btn {
      margin-top: 2.5rem;
    }

    & #sec-btn {
      margin-top: .5rem;
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
    background-image: url('/assets/img/icons/award.svg');
    width: 1.1rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    transform: translate(-2rem, -.1rem)
  }

  .badge__description {
    text-align: center;
    margin-top: 1rem;
  }
</style>
