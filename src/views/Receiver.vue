<template>
  <div class="maxi-form-container">
    <div class="data-selected-container selectedBadge-container">
      <img :src="'/assets/img/badges/' + this.$store.state.badges[$route.params.id - 1].img + '.svg'" v-bind:alt="this.$store.state.badges[$route.params.id - 1].img">
      <p class="selectedBadge-name">{{this.$store.state.badges[$route.params.id - 1].name}}</p>
    </div>
    <h2 class="subtitle">Choose who you want to send the badge to</h2>
      <div class="form-container">
          <input v-on:keyup="checkCharacter" ref="receiver" class="form-receiver" type="text" placeholder="@TwitterHandler" v-model="twitterhandler">
          <div class="navigation-form">
            <router-link id="sec-btn" class="router-item" to="/">Previous</router-link>
            <!-- <router-link  :class="this.$store.state.validField ? 'router-item' : 'router-item-invalid'" :to=" this.$store.state.validField ? '/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message/' + 'brol' : '/receiver/' + this.$store.state.badges[$route.params.id - 1].id"><span id="prim-btn" v-on:click="handleSubmit"> Next to 'sendwhy'</span></router-link> -->
            <router-link  :class="this.$store.state.validField ? 'router-item' : 'router-item-invalid'" :to=" this.$store.state.validField ? '/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message/' + this.$store.state.receiver[0].receiver : '/receiver/' + this.$store.state.badges[$route.params.id - 1].id">
              <span :id="this.$store.state.validField ? 'prim-btn' : 'prim-btn-disabled'" v-on:click="handleSubmit">Next</span>
            </router-link>
            <!-- <router-link  class="router-item" :to=" this.$store.state.validField ? '/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message' : '/receiver/' + this.$store.state.badges[$route.params.id - 1].id"><span id="prim-btn" v-on:click="handleSubmit"> Next to 'sendwhy'</span></router-link> -->
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
      console.log('ai empty');
      this.$store.state.validField = false;
    } else {
      this.$store.state.validField = true;
    }

    console.log(this.$store.state.twitterString);

      if(this.$store.state.pressedAtmark) {
        this.$store.state.receiver.push({receiver: this.$refs.receiver.value})
      } else {
        this.$store.state.receiver.push({receiver: '@' + this.$refs.receiver.value})
      }

    console.log(this.$store.state.receiver)
  }
  }
}
</script>

<style lang="scss">

.form-receiver {
  border-radius: 3rem;
  border: 0.1rem solid transparent;
  height: 1rem;
  width: calc(100% - 4rem);
  padding: 1rem 2rem;
  color: #7C6DF3;
  letter-spacing: 0.05rem;
  font-size: 1rem;

}

.form-receiver:focus {
  outline: 0.1rem solid transparent;
}


</style>
