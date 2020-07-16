<template>
  <div class="badge-select">
    <h2>{{ msg }}</h2>
    <ul class="badges-ul">
      <li class="single-badge" id="badgelist" v-for="badge in badges" :key="badge.name">
        <input class="radio-btn" type="radio" :checked="checked" v-on:change="$emit('change', $event.target.checked)" v-model="currentBadge" :id="badge.name" :value="badge.id" name="currentBadge">
        <label class="badge-label" :for="badge.name">
          <!-- <img v-bind:class="{activeBadgeHexagon: active}" :src="'assets/img/' + badge.img + '.svg'" v-bind:alt="badge.img"> -->
          <img :class="'img-stnd active-badge-' + badge.figure" :src="'assets/img/' + badge.img + '.svg'" v-bind:alt="badge.img">
          <p class="badge-name">{{badge.name}}</p>
        </label>
      </li>
    </ul>
    You have selected : {{currentBadge}}
  </div>
</template>

<script>

export default ({
  name: 'app',
  props: {
    checked: Boolean
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  data() {
    return {
      msg: 'Choose a badge to give',
      badges: [
        { id: 1, name: 'Did not Explode', img: 'didnt_explode', figure: 'circle'},
        { id: 2, name: 'Eureka', img: 'eureka', figure: 'circle'},
        { id: 3, name: 'Leading Lady', img: 'leading_lady', figure: 'hexagon'},
        { id: 4, name: 'Mathematics Wizard', img: 'mathematics_wizard', figure: 'square'},
        { id: 5, name: 'Next gen Einstein', img: 'next_gen_einstein', figure: 'square'},
        { id: 6, name: 'The Bigbang Badge', img: 'the_bigbang_badge', figure: 'hexagon'},
        { id: 7, name: 'You rock(et) science', img: 'you_rocket_science', figure: 'triangle'},
        { id: 8, name: 'Another one', img: 'another_one', figure: 'hexagon'},
      ],
      currentBadge: 2,
      active: true
    };
  },
  getImgUrl(badge) {
    //var badgeImages = require.context('./assets/img/badges/', false, /\.svg$/)
    return badgeImages('./' + badge + ".svg")
  },
  setActive() {
    if (currentBadge) {
      console.log('test');
    }
  }
  // addClass() {
  //   if (currentBadge = badges.id[3]) {
  //     console.log('test')
  //   }
  //   return 'img-stnd active-badge-hexagon'
  // }
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

.badges-ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 60rem;
}

.badge-label {

}

.radio-btn {
  //display: none;
  opacity: 0;
  position: fixed;
  width: 0;
}

.badge-name {
  max-width: 9rem;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
  line-height: 24px;
}

.single-badge {
  font-weight: 400;
  margin: 2rem;
  opacity: 0.8;
}

.single-badge:hover {
  font-weight: 400;
  opacity: 1;
}

.img-stnd {
  padding: 0.5rem;
  border: 0.1rem solid transparent;
}

.active-badge-square {
  padding: 0.5rem;
}

/*
.single-badge input[type="radio"]:checked + .active-badge-square {
  padding: 0.5rem;
  border: 0.1rem solid white;
}
*/
.active-badge-square:hover {
  padding: 0.5rem;
  border: 0.1rem solid white;
}

.active-badge-circle:hover {
  padding: 0.5rem;
  border: 0.1rem solid white;
  border-radius: 5rem;
}

.active-badge-triangle:hover {
  padding: 0.5rem;
  //border: 0.1rem solid transparent;
  background-image: url('/assets/img/shapes/triangle.svg');
  background-size: 100%;
  background-repeat: no-repeat;
}

.active-badge-hexagon:hover {
  padding: 0.5rem;
  //border: 0.1rem solid transparent;
  background-image: url('/assets/img/shapes/hexagon.svg');
  background-size: 89%;
  background-repeat: no-repeat;
  background-position-x: 0.55rem;
  background-position-y: -0.1rem;
}

/*
.badges-ul [type="radio"]:checked + .single-badge {
  background-color: red;
  font-weight: 700;
  opacity: 1;
  color: orange;
}
*/
</style>
