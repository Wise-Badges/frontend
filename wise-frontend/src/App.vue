<template>
<!-- eslint-disable -->
  <div id="app">
    <Header />
    <router-view/>
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
})
</script>

<style lang="scss">
@import 'reset-css';

#app {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  line-height: 1.5;
  background-color: #0B1147;
  min-height: 100vh;
  height: 100%;
  background-image: url('assets/img/bg_xl.svg');
  background-repeat: no-repeat;
  background-size: 25rem;
  background-position-x: 10rem;
}
</style>
