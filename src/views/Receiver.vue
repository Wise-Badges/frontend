<template>
  <div class="maxi-form-container">
    <div class="data-selected-container selectedBadge-container">
      <img :src="'/assets/img/badges/' + this.$store.state.badges[$route.params.id - 1].img + '.svg'" v-bind:alt="this.$store.state.badges[$route.params.id - 1].img">
      <p class="selectedBadge-name">{{this.$store.state.badges[$route.params.id - 1].name}}</p>
    </div>
    <h2>Choose who you want to send the badge to</h2>
      <div class="form-container">
          <input ref="receiver" class="form-receiver" type="text" placeholder="@TwitterHandler" v-model="twitterhandler">
          <div class="navigation-form">
            <router-link id="sec-btn" class="router-item" to="/">Previous</router-link>
            <router-link id="prim-btn" class="router-item" :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message'"><span v-on:click="handleSubmit"> Next to 'sendwhy'</span></router-link>
          </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'receiver',
  data() {
    return {
      twitterhandler: []
    }

  },
  methods: {
  handleSubmit: function() {
    this.$store.state.receiver = [];
    //this.$store.state.receiver.push({receiver: this.$refs.receiver.value})
    //if (this.$refs.receiver.value =)
    this.$store.state.receiver.push({receiver: '@' + this.$refs.receiver.value})
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
