<template>
  <div id="nav">
      <router-link class="nav__logo" to="/"><img src="/assets/logo.svg" alt="logo"></router-link>
      <div class="nav__links">
        <router-link class="header-item" to="/">Home</router-link>
        <router-link class="header-item" to="/about">About</router-link>
        <router-link class="header-item" to="/viewbadges">View badges</router-link>
        <router-link class="header-item" to="/community/">Community</router-link>
      </div>
      <Push class="nav__hamburger">
        <router-link class="header-item" to="/">Home</router-link>
        <router-link class="header-item" to="/about">About</router-link>
        <router-link class="header-item" to="/viewbadges">View badges</router-link>
        <router-link class="header-item" to="/community/">Community</router-link>
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
    font-size: .875rem;
    margin-bottom: 8rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    @media only screen and (max-width: 1024px) {
      padding: 1.5rem 2rem 0;
    }

    & .nav__links {
      order: 3;
    }

    .header-item {
      color: white;
      margin: 0 2rem;
      text-decoration: none;
      position: relative;
      padding-bottom: 10px;

      &.router-link-exact-active {
        border-bottom: 2px solid white;

        @media only screen and (max-width: 1024px) {
          border: 0;
        }
      }
    }
  }

  .nav__logo {
    height: 3rem;
    width: 3rem;

    @media only screen and (max-width: 1024px) {
      order: 3;
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  .nav__links {
    display: flex;
    justify-content: flex-end;
  }


  /* HAMBURGER MENU ------------  */
  .bm-burger-button, .bm-burger-bars {
    display: none;
  }

  .nav__hamburger {
    z-index: 1000;

    .bm-burger-button {
      width: 25px;
      height: 20px;
      left: 1.56rem;
    }

    .bm-burger-bars {
      background-color: white;
    }

    .line-style {
      height: 10%;
    }

    .cross-style {
      position: absolute;
      top: 30px;
      right: 20px;
      cursor: pointer;
    }

    .bm-cross {
      background: #bdc3c7;
    }

    .bm-cross-button {
      height: 20px;
      width: 20px;
    }

    .bm-menu {
      background: #331F9F !important;
    }

    .bm-item-list {
      color: #b8b7ad;
      font-size: 1rem;
    }
  }

  .bm-overlay {
    background: #0B1147 !important;
  }

  @media only screen and (max-width: 1024px) {
    .bm-burger-button, .bm-burger-bars {
      display: inline;
    }

    #nav {
      margin-bottom: 2rem;

      .header-item {
        margin: 0;
      }

      & .nav__links {
      display: none;
      }
    }
  }
</style>
