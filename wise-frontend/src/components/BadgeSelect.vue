<template>
  <div>
    <h2>{{ msg }}</h2>
    <ul>
      <SingleBadge/>
    </ul>
  </div>
</template>

<script>
import SingleBadge from '@/components/SingleBadge.vue';

export default ({
  name: 'app',
  components: {
    SingleBadge,
  },
  data() {
    return {
      msg: '-- Choose a badge to give',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
