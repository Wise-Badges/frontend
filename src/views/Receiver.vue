<template>
  <div class="maxi-container">
    <div>
      <img :src="'/assets/img/' + this.$store.state.badges[$route.params.id - 1].img + '.svg'" v-bind:alt="this.$store.state.badges[$route.params.id - 1].img">
      <p>{{this.$store.state.badges[$route.params.id - 1].name}}</p>
    </div>
    <h2>Choose who you want to send the badge to</h2>
      <div class="form-container">
        <input class="form-receiver" type="text" placeholder="test">
        <div class="navigation-form">
          <router-link to="/"><button id="sec-btn">Previous</button></router-link>
          <router-link :to="'/receiver/' + id + '/message'"><button id="prim-btn">Next to 'sendwhy'</button></router-link>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'receiver'
}
</script>

<style lang="scss">

.navigation-form {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 4rem;
}

.maxi-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 65%;
  margin: 3rem;
}

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
