<template>
  <div class="maxi-form-container">
    <div class="selectedBadge-container">
      <img :class="'img-badge-form img-badge-' + this.$store.state.badges[$route.params.id - 1].figure" :src="'/assets/img/badges/' + this.$store.state.badges[$route.params.id - 1].img + '.svg'" v-bind:alt="this.$store.state.badges[$route.params.id - 1].img">
      <p class="selectedBadge-name">{{this.$store.state.badges[$route.params.id - 1].name}}</p>
    </div>
    <h2 class="subtitle">Choose who you want to send the badge to</h2>
      <div class="form-container">
          <div class="platform-receiver-container">
            <select class="select-platforms" name="platforms" id="platforms">
              <option value="twitter">twitter</option>
              <option value="facebook">facebook</option>
            </select>
            <input v-on:keyup="checkCharacter" ref="receiver" class="form-receiver" type="text" placeholder="@TwitterHandler" v-model="twitterhandler">
          </div>
          <div class="navigation-form">
            <router-link id="sec-btn" class="router-item" to="/">Previous</router-link>
            <div class="bol-container">
              <router-link to="/" class="bol"></router-link>
              <router-link to="" class="bol bol-active"></router-link>
              <router-link to="" class="bol bol-inactive"></router-link>
              <router-link to="" class="bol bol-inactive"></router-link>
            </div>
            <router-link  :class="this.$store.state.validField ? 'router-item' : 'router-item-invalid'" :to=" this.$store.state.validField ? '/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/' + this.$store.state.receiver[0].receiver : '/receiver/' + this.$store.state.badges[$route.params.id - 1].id">
              <span :id="this.$store.state.validField ? 'prim-btn' : 'prim-btn-disabled'" v-on:click="handleSubmit">Next</span>
            </router-link>
          </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'receiver',
  data() {
    return {
      twitterhandler: [],
    }
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

<style lang="scss">

.form-receiver {
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  border: 0.1rem solid transparent;
  height: 1rem;
  width: calc(100% - 4rem);
  padding: 1rem 2rem 1rem 1rem;
  color: #7C6DF3;
  letter-spacing: 0.05rem;
  font-size: 1rem;

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

.select-platforms {
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #7C6DF1;
  color: white;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  border: none;
  margin-right: 1rem;
}

.select-platforms:focus {
  outline: transparent;
}

</style>
