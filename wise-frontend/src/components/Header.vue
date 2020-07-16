<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/viewbadges">View badges</router-link>
    <router-link to="/community">Community</router-link>
  </div>
</template>

<script>
export default ({
  name: 'app',
  data() {
    return {
      title: 'did not explode',
    };
  },
});
</script>
