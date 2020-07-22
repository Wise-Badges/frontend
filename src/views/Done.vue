<template>
<div class="maxi-form-container">
  <div style="width:60%;height:0;padding-bottom:59%;position:relative;">
    <iframe src="https://giphy.com/embed/Ta1WpLdOWd7pu" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>
  <h2 class="subtitle">Thanks for spreading the love 💛</h2>
  <h3>Here is the link if it didn't pop pup:</h3>
  <a :href="this.$store.state.twitterString + '%20@WiseBadges' + ',%20issue%20a%20'  + this.$store.state.badges[$route.params.id - 1].hashtag + '%20to%20' + $route.params.receiver + '%20with%20this%20message:%20' + $route.params.message" target=_black>Twitterbot link</a>

  <router-link id="prim-btn" to="/community">SEE OTHERS WHO RECEIVED THIS BADGE</router-link>
  <router-link class="router-item" id="sec-btn" :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message/' + this.$store.state.receiver[0].receiver">Go back</router-link>
</div>
</template>


<script>
export default {
  name:'done',
  created() {
    //window.location.href = ('http://www.google.be');
  }
  // mounted() {
  //   console.log('done');
  //   // let routeData = this.$router.resolve({name: 'www.google.be', query: {data: "www.google.be"}});
  //   // window.open(routeData.href, '_blank');
  //   window.location.href = 'www.google.be'
  // }
}
</script>
