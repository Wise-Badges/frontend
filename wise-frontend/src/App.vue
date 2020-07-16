<template>
<!-- eslint-disable -->
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';

export default ({
  name: 'app',
  components: {
    Header,
  },
})
</script>

<style lang="scss">
@import 'reset-css';

#app {
  font-family: 'Montserratmedium', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #0B1147;
  min-height: 100vh;
  height: 100%;
  background-image: url('assets/img/bg_xl.svg');
  background-repeat: no-repeat;
  background-size: 25rem;
  background-position-x: 10rem;
}

#nav {
  padding: 30px;
  padding-top: 35px;
  font-family: 'montserratsemibold';
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;

  a {
    font-weight: bold;
    color: white;
    margin: 0 1rem;
    text-decoration: none;

    &.router-link-exact-active {
      text-decoration:underline;
      content:"TEST";
      position: relative;
    }
  }
}

</style>
