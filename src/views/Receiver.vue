<template>
  <div class="maxi-form-container">
    <div class="data-selected-container selectedBadge-container">
      <img :src="'/assets/img/' + this.$store.state.badges[$route.params.id - 1].img + '.svg'" v-bind:alt="this.$store.state.badges[$route.params.id - 1].img">
      <p class="selectedBadge-name">{{this.$store.state.badges[$route.params.id - 1].name}}</p>
    </div>
    <h2>Choose who you want to send the badge to</h2>
      <div class="form-container">
        <input class="form-receiver" type="text" placeholder="@TwitterHandler">
        <div class="navigation-form">
          <router-link to="/"><button id="sec-btn">Previous</button></router-link>
          <router-link :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message'"><button id="prim-btn">Next to 'sendwhy'</button></router-link>
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

.data-selected-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.selectedBadge-name {
  letter-spacing: 0.2em;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 2rem;
  max-width: 14rem;
}


.selectedBadge-container {
  background-image: url('/assets/img/flag.svg');
  background-repeat: no-repeat;
  width: 30rem;
  height: 7rem;
  background-position-x: 7rem;
  margin-bottom: 4rem;
}
</style>
