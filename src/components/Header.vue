<template>
  <div id="nav">
    <router-link to="/"><p class="nav__logo">Logo</p></router-link>
    <div class="nav__links">
      <router-link class="header-item" to="/">Home</router-link>
      <router-link class="header-item" to="/about">About</router-link>
      <router-link class="header-item" to="/viewbadges">View badges</router-link>
      <router-link class="header-item" to="/community">Community</router-link>
    </div>
  </div>
</template>


<script>
export default ({
    name: 'Header',
  });
</script>


<style lang="scss">
  #nav {
    padding: 3.5rem 2.5rem 2.3rem 3rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;

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

  .nav__links {
    display: flex;
    justify-content: flex-end;
  }

</style>
