<template>
<!-- eslint-disable -->
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/viewbadges">View badges</router-link>
      <router-link to="/community">Community</router-link>
    </div>

    <!-- <Hamburger/> -->

    <router-view/>
    </div>
</template>

<script>
import Hamburger from '@/components/Hamburger.vue';

export default ({
  name: 'app',
  components: {
    Hamburger,
  }
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
  background-size: 24rem;
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
