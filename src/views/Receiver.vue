<template>
  <div class="maxi-form-container">

    <BadgeExample />
    <h2 class="subtitle">Choose who you want to send the badge to</h2>
      <div class="form-container">
          <div class="platform-receiver-container">
            <div class="select-platforms" name="platforms" id="platforms">
              <p class="twitter-text" value="twitter">twitter</p>
              <img src="/assets/img/icons/twitterWhite.svg" alt="twitterLogo">
            </div>
            <!-- FUTURE: Selection between platforms if needed -->
            <!-- <select class="select-platforms" name="platforms" id="platforms">
              <option value="twitter">twitter</option>
              <option value="facebook">facebook</option>
            </select> -->
            <span class="twitter-receiver">
             <input v-on:keyup="checkCharacter" ref="receiver" class="form-receiver" type="text" placeholder="TwitterHandler" v-model="twitterhandler">
            </span>
          </div>
          <div class="navigation-form">
            <router-link id="sec-btn" class="router-item" to="/">Previous</router-link>
            <div class="bol-container">
              <router-link to="/" class="bol"></router-link>
              <router-link to="" class="bol bol-active"></router-link>
              <router-link to="" class="bol bol-inactive"></router-link>
              <router-link to="" class="bol bol-inactive"></router-link>
            </div>
            <router-link  :class="this.$store.state.validField ? 'router-item' : 'router-item-invalid'" :to=" this.$store.state.validField ? '/receiver/' + this.$route.params.id + '/' + this.$store.state.receiver[0].receiver : '/receiver/' + this.$route.params.id">
              <span :id="this.$store.state.validField ? 'prim-btn' : 'prim-btn-disabled'" v-on:click="handleSubmit">Next</span>
            </router-link>
          </div>
      </div>
  </div>
</template>


<script>
import BadgeExample from '@/components/BadgeExample.vue';

export default {
  name: 'receiver',
  data() {
    return {
      twitterhandler: [],
    }
  },
  components: {
    BadgeExample
  },
  methods: {
    checkCharacter: function(e) {
      if (e.key === '@') {
        this.$store.state.pressedAtmark = true;
      }
      if (this.$refs.receiver.value !== '') {
        this.$store.state.validField = true;
      }

    },
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
    handleSubmit: function(e) {
      this.$store.state.receiver = [];


      if (this.$refs.receiver.value === '') {
        this.$store.state.validField = false;
      } else {
        this.$store.state.validField = true;
      }

      if(this.$store.state.pressedAtmark) {
        this.$store.state.receiver.push({receiver: this.$refs.receiver.value})
      } else {
          this.$store.state.receiver.push({receiver: '@' + this.$refs.receiver.value})
      }
    }
  }
}
</script>

<style scoped lang="scss">

.form-receiver {
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  border: 0.1rem solid transparent;
  height: 1rem;
  width: calc(100% - 4rem);
  padding: 1rem 2rem 1rem 2.4rem;
  color: #7C6DF3;
  letter-spacing: 0.05rem;
  font-size: 1rem;
}

.twitter-receiver {
  width: 100%;
  display: flex;
  align-items: center;

    &::before {
    content: '@';
    position: absolute;
    color: #7C6DF1;
    font-size: 1.2rem;
    padding-left: 1rem;
  }
}

.form-receiver:focus {
  outline: 0.1rem solid transparent;
}

.img-badge-triangle {
  margin-left: -5rem;
}

.platform-receiver-container {
  display: flex;
  width: 100%;
}

.badge-text {
    @media only screen and (max-width: 630px) {
      text-align: center;
      margin: 0 auto;
   }
}

.select-platforms {
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  padding-left: 2rem;
  padding-right: 1.5rem;
  background-color: #7C6DF1;
  color: white;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  border: none;
  padding-top: 0.7rem;
  display: flex;
  flex-direction: row-reverse;
}

.select-platforms img {
  margin-top: -0.5rem;
  margin-right: 1rem;
}

.select-platforms:focus {
  outline: transparent;
}

@media only screen and (max-width: 800px) {
  .twitter-text {
    display: none;
    margin-right: 1rem;
  }

  .select-platforms img {
  margin-right: 0rem;
}
}

</style>
