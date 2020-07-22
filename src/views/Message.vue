<template>
  <div>
    <div class="maxi-form-container">
    <div class="data-selected-container selectedBadge-container">
      <img :src="'/assets/img/badges/' + this.$store.state.badges[$route.params.id - 1].img + '.svg'" v-bind:alt="this.$store.state.badges[$route.params.id - 1].img">
      <div>
        <p class="selectedBadge-name">{{this.$store.state.badges[$route.params.id - 1].name}}</p>
        <div class="selectedBadge-receiver">
          <p v-if="this.$store.state.receiver[0]">To {{$route.params.receiver}}</p>
          <p v-if="this.$store.state.receiver[0] == undefined">Refreshing is forbidden my dear</p>
        </div>
      </div>
    </div>
    <h2>Describe why this person earned this badge</h2>
      <div class="form-container">
        <textarea class="textarea-message" ref="message" name="personalmessage" id="1" cols="30" rows="10" placeholder="Type your personal message"></textarea>
        <div class="navigation-form">
          <router-link class="router-item" :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id"><button id="sec-btn">Previous</button></router-link>
          <router-link class="router-item" :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message/' + this.$store.state.receiver[0].receiver + '/done/' + this.$store.state.message[0].message"><button v-on:click="handleSubmitMessage" id="prim-btn">Issue badge<img class="img-twitter" src="/assets/img/icons/twitterWhite.svg" alt="twitter"></button></router-link>

          <!-- <router-link class="router-item" :to=" this.$store.state.validField ? '/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message/' + this.$store.state.receiver[0].receiver + '/done' : '/receiver/' + this.$store.state.badges[$route.params.id - 1].id"><button v-on:click="handleSubmitMessage" id="prim-btn">Issue badge<img class="img-twitter" src="/assets/img/icons/twitterWhite.svg" alt="twitter"></button></router-link> -->
        </div>
        <p class="issueBadge-info">Issue the Open Badge by sending a Tweet on Twitter.</p>
      </div>
      <a :href="this.$store.state.twitterString + '%20@WiseBadges' + ',%20issue%20a%20'  + this.$store.state.badges[$route.params.id - 1].hashtag + '%20to%20' + $route.params.receiver" target=_black>{{this.$store.state.twitterString + '%20@WiseBadges' + ',%20issue%20a%20' + this.$store.state.badges[$route.params.id - 1].hashtag + '%20to%20#' + $route.params.receiver}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'message',
    methods: {
      handleSubmitMessage: function(e) {
        this.$store.state.message = [];

        if (this.$refs.message.value === '') {
          console.log('ai empty');
          this.$store.state.validField = false;
        } else {
          this.$store.state.validField = true;
        }

        this.$store.state.message.push({message: this.$refs.message.value})

        console.log(this.$store.state.message)
      }
    }
  }
</script>


<style lang="scss">
.textarea-message {
  width: 100%;
  font-family: 'Montserrat';
  padding: 1rem;
  border: transparent;
  font-size: 1rem;
}

.textarea-message:focus {
  outline: transparent;
}

.issueBadge-info {
  opacity: 0.5;
  width: 15rem;
  text-align: right;
  align-self: flex-end;
  margin-top: 2rem;
}

.img-twitter {
  margin-left: 1rem;
}

</style>
