<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/viewbadges">View badges</router-link>
      <router-link to="/community">Community</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'reset-css';

@font-face {
    font-family: 'montserratbold';
    src: url('./assets/fonts/montserrat-bold-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'montserratsemibold';
    src: url('./assets/fonts/montserrat-semibold-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat-semibold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'montserratmedium';
    src: url('./assets/fonts/montserrat-medium-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat-medium-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'montserratregular';
    src: url('./assets/fonts/montserrat-regular-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

#app {
  font-family: 'Montserratmedium', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #0B1147;
  height: 100vh;
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
