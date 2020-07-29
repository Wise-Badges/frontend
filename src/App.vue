<template>
<!-- eslint-disable -->
  <div id="app">
    <div :class="{ 'home': $route.path==='/' }">
      <Header />
      <div class="container">
        <router-view/>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default ({
  name: 'app',
  components: {
    Header,
    Footer
  },
  data: () => ({loading: true}),
  async mounted() {

    await this.$store.dispatch('loadBadges');
    await this.$store.dispatch('loadAssertions');

    if(this.$route.params.assertionId !== undefined) {
      await this.$store.dispatch('loadAssertionById', {
          assertionID: this.$route.params.assertionId
      });
      await this.$store.dispatch('loadBadgeByAssertionId', {
          assertionID: this.$route.params.assertionId
      });
    }
    if(this.$route.params.badgeId !== undefined) {
      await this.$store.dispatch('loadAssertionsByBadgeId', {
        badgeId: this.$route.params.badgeId
      });
    }
  },
})
</script>

<style lang="scss">
@import 'reset-css';

#app {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  line-height: 1.7;
  min-height: 100vh;
  height: 100%;

  & > div {
    background-image: url('/assets/img/background/bg-shapes.svg');
    background-repeat: no-repeat;
    background-size: 30rem;
    background-position-x: calc((100vw - 60rem)/2 - 10rem);
  }

  & .home {
    background-image: url('/assets/img/background/bg-shapes.svg'), url('/assets/img/flag/bg.svg');
    background-position-x: calc((100vw - 60rem)/2 - 10rem), calc((100vw - 60rem)/2);

    @media only screen and (max-width: 1024px) {
      background-size: 50vw;
      height: 30rem;
      background-position: 0 0, bottom left;
    }

    @media only screen and (max-width: 670px) {
      background-image: url('/assets/img/background/bg-shapes-mobile.svg');
      background-size: 16rem;
      background-position-x: 0;
      background-position-y: 5rem;
    }
  }
}
</style>
