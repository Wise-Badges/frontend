<template>
  <div class="badge-select">
    <h2>{{ msg }}</h2>
    <ul id="badgelist" v-for="badge in badges" :key="badge.name">
      <li>
        <input type="radio" v-model="currentBadge" :id="badge.name" :value="badge.id" name="currentBadge">
        <label :for="badge.name">{{badge.name}}
          <img :src="'assets/img/' + badge.img + '.svg'" v-bind:alt="badge.img">
        </label>
      </li>
    </ul>
    You have selected : {{currentBadge}}
  </div>
</template>

<script>

export default ({
  name: 'app',
  data() {
    return {
      msg: 'Choose a badge to give',
      badges: [
        { id: 1, name: 'did not explode', img: 'didnt_explode'},
        { id: 2, name: 'eureka', img: 'eureka'},
        { id: 3, name: 'leading lady', img: 'leading_lady'},
        { id: 4, name: 'mathematics wizard', img: 'mathematics_wizard'},
        { id: 5, name: 'next gen einstein', img: 'next_gen_einstein'},
        { id: 6, name: 'the bigbang badge', img: 'the_bigbang_badge'},
        { id: 7, name: 'you rock(et) science', img: 'you_rocket_science'},
        { id: 8, name: 'another one', img: 'another_one'},
      ],
      currentBadge: 2
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
