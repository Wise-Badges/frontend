<template>
  <div id="nav">
    <router-link to="/"><img class="nav__logo" src="assets/logo.svg" alt="logo"></router-link>
    <div class="nav__links">
      <router-link class="header-item" to="/">Home</router-link>
      <router-link class="header-item" to="/about">About</router-link>
      <router-link class="header-item" to="/viewbadges">View badges</router-link>
      <router-link class="header-item" to="/community">Community</router-link>
    </div>
    <Push class="push-container">
        <router-link class="header-item-hamburger" to="/">Home</router-link>
        <router-link class="header-item-hamburger" to="/about">About</router-link>
        <router-link class="header-item-hamburger" to="/viewbadges">View badges</router-link>
        <router-link class="header-item-hamburger" to="/community">Community</router-link>
    </Push>
  </div>
</template>


<script>
import { Push } from 'vue-burger-menu'

export default ({
    name: 'Header',
    components: {
      Push
    }
  });
</script>


<style lang="scss">
  #nav {
    padding: 2.8rem 2.5rem 2.5rem 3.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8rem;

    .header-item {
      color: white;
      margin: 0 2rem;
      text-decoration: none;
      position: relative;
      padding-bottom: 10px;

      &.router-link-exact-active {
        border-bottom: 2px solid white;
      }
    }
  }

  .nav__logo {
    height: 3rem;
    width: 3rem;
  }

  .nav__links {
    display: flex;
    justify-content: flex-end;
  }

 .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: white;
      border-radius: 2rem;
    }

    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background: #331F9F; /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: #331F9F
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }




</style>
