<template>
<!-- eslint-disable -->
  <div id="app" :class="{ 'home': $route.path==='/' }">
    <Header />
    <div class="container">
      <router-view/>
    </div>
    <Footer />
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
  mounted() {
    this.$store.dispatch('loadBadges')
  }
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
  background-color: #0B1147;
  min-height: 100vh;
  height: 100%;
  background-image: url('/assets/img/bg-shapes.svg');
  background-repeat: no-repeat;
  background-size: 30rem;
  background-position-x: calc((100vw - 60rem)/2 - 10rem);
}

/* to do, important weghalen */
.home {
  background-image: url('/assets/img/bg-shapes.svg'), url('/assets/img/bg-banner.svg') !important;
  background-position-x: calc((100vw - 60rem)/2 - 10rem), calc((100vw - 60rem)/2) !important;
}
</style>
