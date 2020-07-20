<template>
  <div>
    <h2>Describe why this person earned this badge</h2>
    <div class="form-container">
      <input class="form-receiver" type="text" placeholder="test">
      <div class="navigation-form">
        <router-link to="/"><button id="sec-btn">Previous</button></router-link>
        <router-link :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message'"><button id="prim-btn">Issue badge<img src="/assets/img/footer/twitter.svg" alt="twitter"></button></router-link>
      </div>
    </div>
  </div>
</template>
