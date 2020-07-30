<template>
<div class="maxi-form-container">
  <!-- <div style="width:60%;height:0;padding-bottom:59%;position:relative;">
    <iframe src="https://giphy.com/embed/Ta1WpLdOWd7pu" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div> -->
  <h2 class="subtitle">Thanks for spreading the love 💛</h2>

  <router-link id="prim-btn" to="/community">SEE OTHERS WHO RECEIVED THIS BADGE</router-link>
  <router-link class="router-item" id="sec-btn" :to="'/receiver/' + this.$route.params.id + '/' + this.$store.state.receiver[0].receiver">Go back</router-link>
  <div class="bol-container">
    <router-link to="/" class="bol"></router-link>
    <router-link :to="'/receiver/' + this.$route.params.id" class="bol"></router-link>
    <router-link :to="'/receiver/' + this.$route.params.id + '/' + this.$store.state.receiver[0].receiver" class="bol"></router-link>
    <router-link to="" class="bol bol-active"></router-link>
  </div>
  <h3 class="twitterlink-title-backup">Did something go wrong? <br/> Here is your <a class="twitterlink" :href="this.$store.state.twitterString + 'Hey @WiseBadges' + ', issue a %23'  + checkId().tag + ' to ' + $route.params.receiver + ' with this message: ' + $route.params.message" target=_black>Twitter link</a></h3>

</div>
</template>

<script>
export default {
  methods: {
  checkId: function() {
    for(let i = 0; i < this.$store.state.badgesApi.data.length; i++) {
      let fullId = this.$store.state.badgesApi.data[i].id;
      let shortId = /[^/]*$/.exec(fullId)[0]

      if (this.$route.params.id === shortId) {
        let currentBadgeSelected = this.$store.state.badgesApi.data[i];

        return currentBadgeSelected
      }
    }
  },
  }
}
</script>

<style scoped>
.twitterlink-title-backup {
  margin-top: 2rem;
}
</style>



