<template>
<div>
  <h2>Thanks for spreading the love 💛</h2>
  <h3>Here is the link if it didn't pop pup:</h3>
  <a :href="this.$store.state.twitterString + '%20@WiseBadges' + ',%20issue%20a%20'  + this.$store.state.badges[$route.params.id - 1].hashtag + '%20to%20' + $route.params.receiver + '%20with%20this%20message:%20' + $route.params.message" target=_black>Twitterbot link</a>

</div>
</template>
