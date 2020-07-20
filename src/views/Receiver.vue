<template>
  <div class="maxi-container">
    <h2>Describe why this person earned this badge</h2>
      <div class="form-container">
        <input class="form-receiver" type="text">
        <div class="navigation-form">
          <router-link to="/"><button id="sec-btn">Previous</button></router-link>
          <router-link to="/receiver/message"><button id="prim-btn">Next to 'sendwhy'</button></router-link>
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
  width: 100%;
  padding: 1rem;
}

.form-receiver:focus {
  outline: 0.1rem solid transparent;
}

</style>
