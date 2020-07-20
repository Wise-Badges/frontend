<template>
  <div>
    <h2>Describe why this person earned this badge</h2>
    <div>
      <input type="text">
      <div>
        <router-link to="/"><button>Previous</button></router-link>
        <router-link to="/receiver/message" id=#prim-btn><button>Next to 'sendwhy'</button></router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'receiver'
}
</script>
