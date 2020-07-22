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
    <h2 class="subtitle">Describe why this person earned this badge</h2>
      <div class="form-container">
        <textarea class="textarea-message" ref="message" name="message" id="1" cols="30" rows="10" placeholder="Type your personal message"></textarea>
        <div class="navigation-form">
          <router-link class="router-item" :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id"><span id="sec-btn">Previous</span></router-link>
          <!-- <a target="_black" :href="this.$store.state.twitterString + '%20@WiseBadges' + ',%20issue%20a%20'  + this.$store.state.badges[$route.params.id - 1].hashtag + '%20to%20' + $route.params.receiver + '%20with%20this%20message:%20' + $route.params.message" >ISSUE BADGE</a> -->
          <router-link :class="this.$store.state.validField ? 'router-item' : 'router-item-invalid'" :to="this.$store.state.validMessage ? '/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message/' + this.$store.state.receiver[0].receiver + '/done/' + this.$store.state.message[0].message : '/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message/' + this.$store.state.receiver[0].receiver">
            <span :id="this.$store.state.validMessage ? 'prim-btn' : 'prim-btn-disabled'" class="twitter-btn" v-on:click="handleSubmitMessage">Issue badge</span>
          </router-link>
        </div>
        <p class="issueBadge-info">Issue the Open Badge by sending a Tweet on Twitter.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'message',
    created() {
      console.log(this.$store.state.validMessage)
    },
    methods: {
      handleSubmitMessage: function(e) {
        this.$store.state.message = [];

        if (this.$refs.message.value === '') {
          console.log('ai empty');
          this.$store.state.validMessage = false;
        } else {
          console.log('not empty');
          this.$store.state.validMessage = true;
        }

        this.$store.state.message.push({message: this.$refs.message.value})

        console.log(this.$store.state.message)

        //let routeData = this.$router.resolve({name: 'https://www.google.be', query: {data: "www.google.be"}});

        //let personalRoute = this.$store.state.twitterString + '%20@WiseBadges' + ',%20issue%20a%20'  + this.$store.state.badges[$route.params.id - 1].hashtag + '%20to%20' + $route.params.receiver + '%20with%20this%20message:%20' + $route.params.message
        //console.log(personalRoute);
        //window.open('www.google.be');
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

.twitter-btn {
  background-image: url('/assets/img/icons/twitterPurple.svg');
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  transition: background-image 0.2s;
}

.twitter-btn:hover {
  background-image: url('/assets/img/icons/twitterWhite.svg');
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
}

</style>
