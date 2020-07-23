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
        <textarea class="textarea-message" ref="message" name="message" id="1" cols="20" rows="10" placeholder="Type your personal message"></textarea>
        <div class="navigation-form">
          <router-link class="router-item" :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id"><span id="sec-btn">Previous</span></router-link>
            <div class="bol-container">
              <router-link to="/" class="bol"></router-link>
              <router-link :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id" class="bol"></router-link>
              <router-link to="" class="bol bol-active"></router-link>
              <router-link to="" class="bol bol-inactive"></router-link>
            </div>
          <router-link class="router-item" :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/' + $route.params.receiver + '/' + this.$store.state.message[0].message">
            <span id="prim-btn-twitter" class="twitter-btn" v-on:click="handleSubmitMessage">Issue badge</span>
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

        if (this.$store.state.message !== []) {
            this.$store.state.message.push({message: this.$refs.message.value})
        } else {
          console.log('empty')
        }



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
  width: calc(100% - 2rem);
  font-family: 'Montserrat';
  padding: 1rem;
  border: transparent;
  font-size: 1rem;
  height: 5rem;
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
  background-position-x: 92%;
  background-position-y: center;

  padding-right: 3rem;
  font-family: 'Montserrat';
    font-weight: 700;
    background-color: white;
    padding: 1rem 3.4rem 1rem 4rem;
    letter-spacing: 0.2em;
    border-radius: 2rem;
    border: none;
    text-transform: uppercase;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: .875rem;
}

.twitter-btn:hover {
  background-image: url('/assets/img/icons/twitterWhite.svg');
  background-repeat: no-repeat;
}

</style>
