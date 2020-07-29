<template>
  <div>
    <div class="maxi-form-container">
    <BadgeExample />
    <h2 class="subtitle">Describe why this person earned this badge</h2>
      <div class="form-container">
        <textarea class="textarea-message" ref="message" name="message" id="1" cols="20" rows="10" placeholder="Type your personal message"></textarea>
        <div class="navigation-form">
          <router-link class="router-item" :to="'/receiver/' + this.$route.params.id"><span id="sec-btn">Previous</span></router-link>
            <div class="bol-container">
              <router-link to="/" class="bol"></router-link>
              <router-link :to="'/receiver/' + this.$route.params.id" class="bol"></router-link>
              <router-link to="" class="bol bol-active"></router-link>
              <router-link to="" class="bol bol-inactive"></router-link>
            </div>
          <router-link class="router-item" :to="'/receiver/' + this.$route.params.id + '/' + $route.params.receiver + '/' + this.$store.state.message[0].message">
            <span id="prim-btn-twitter" class="twitter-btn" v-on:click="handleSubmitMessage">Issue badge</span>
          </router-link>
        </div>
        <p class="issueBadge-info">Issue the Open Badge by sending a Tweet on Twitter.</p>
      </div>
    </div>
  </div>
</template>

<script>
import BadgeExample from '@/components/BadgeExample.vue';

  export default {
    name: 'message',
    components: {
      BadgeExample
    },
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
      handleSubmitMessage: function(e) {
        this.$store.state.message = [];

        if (this.$store.state.message !== []) {
            this.$store.state.message.push({message: this.$refs.message.value})

            let twitterRoute = this.$store.state.twitterString + 'Hey @WiseBadges' + ', issue a %23'  + this.checkId().tag + ' to ' + this.$route.params.receiver + ' with this message: ' + this.$store.state.message[0].message
            window.open(twitterRoute)
        }
      },
  },

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
  color: #7C6DF1;
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
