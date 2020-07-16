<template>
  <div class="badge-select">
    <h2>{{ msg }}</h2>
    <ul id="badgelist">
      <li v-for="badge in badges" :key="badge.title">
        <button>
          <img :src="'assets/img/' + badge.img + '.svg'" v-bind:alt="badge.img">
          <!-- <img :src="getImgUrl(pic)" v-bind:alt="badge.message"> -->
          <!-- <img class="bg-image" :src="'/assets/img/cover/' + workout.img + '.png'" alt="jump2" width=60%> -->
          <p>{{badge.title}}</p>
        </button>
      </li>
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
      msg: 'Choose a badge to give',
      badges: [
        { title: 'didnt explode', img: 'didnt_explode'},
        { title: 'woman empowerment', img: 'walking_sunshine'},
        { title: 'Einstein', img: 'einstein'},
      ]
    };
  },
  getImgUrl(badge) {
    var badgeImages = require.context('../assets/img/badges/', false, /\.svg$/)
    return badgeImages('./' + badge + ".svg")
  }
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

.badge-select {
  margin-top: 4rem;
}
</style>
