<template>
<div class="maxi-form-container">
  <!-- <div style="width:60%;height:0;padding-bottom:59%;position:relative;">
    <iframe src="https://giphy.com/embed/Ta1WpLdOWd7pu" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div> -->
  <h2 class="subtitle">Thanks for spreading the love 💛</h2>

  <router-link id="prim-btn" to="/community">SEE OTHERS WHO RECEIVED THIS BADGE</router-link>
  <router-link class="router-item" id="sec-btn" :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/' + this.$store.state.receiver[0].receiver">Go back</router-link>
  <div class="bol-container">
    <router-link to="/" class="bol"></router-link>
    <router-link :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id" class="bol"></router-link>
    <router-link :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id+ '/' + this.$store.state.receiver[0].receiver" class="bol"></router-link>
    <router-link to="" class="bol bol-active"></router-link>
  </div>
  <h3 class="twitterlink-title-backup">Went something wrong? </br> Here is your <a class="twitterlink" :href="this.$store.state.twitterString + '%20@WiseBadges' + ',%20issue%20a%20'  + this.$store.state.badges[$route.params.id - 1].hashtag + '%20to%20' + $route.params.receiver + '%20with%20this%20message:%20' + $route.params.message" target=_black>Twitterlink</a></h3>

</div>
</template>



