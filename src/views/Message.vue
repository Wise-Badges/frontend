<template>
  <div>
    <div class="maxi-form-container">
    <h2>Describe why this person earned this badge</h2>
      <div class="form-container">
        <textarea class="textarea-message" name="personalmessage" id="1" cols="30" rows="10" placeholder="Type your personal message"></textarea>
        <div class="navigation-form">
          <router-link class="router-item" :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id"><button id="sec-btn">Previous</button></router-link>
          <router-link class="router-item" :to="'/receiver/' + this.$store.state.badges[$route.params.id - 1].id + '/message'"><button id="prim-btn">Issue badge<img src="/assets/img/footer/twitter.svg" alt="twitter"></button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

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
</style>
