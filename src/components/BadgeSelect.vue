<template>
  <div class="badge-select">
    <h2 class="subtitle">{{ msg }}</h2>
    <ul class="badges-ul">
      <li class="single-badge" id="badgelist" v-for="badge in badges" :key="badge.name">
        <input class="radio-btn" type="radio" :checked="checked" v-on:change="$emit('change', $event.target.checked)" v-model="currentBadge" :id="badge.name" :value="badge.id" name="currentBadge">
        <label v-if="currentBadge === badge.id" class="badge-label" :for="badge.name" :id="badge.name" name="currentBadge">
          <img :class="'imgStnd active-badge-' + badge.figure" :src="'assets/img/badges/' + badge.img + '.svg'" v-bind:alt="badge.img">
          <p class="badge-name-bold">{{badge.name}}</p>
        </label>

        <label v-if="currentBadge !== badge.id" class="badge-label" :for="badge.name" :id="badge.name" name="currentBadge">
          <img class="imgStnd" :src="'assets/img/badges/' + badge.img + '.svg'" v-bind:alt="badge.img">
          <p class="badge-name">{{badge.name}}</p>
        </label>
      </li>
    </ul>
    <!-- <div class="step-container"> -->
      <div class="bol-container">
        <router-link to="" class="bol bol-active"></router-link>
        <router-link to="/" class="bol bol-inactive"></router-link>
        <router-link to="/" class="bol bol-inactive"></router-link>
        <router-link to="/" class="bol bol-inactive"></router-link>
      </div>
        <router-link class="router-item next-selectbadge" badge="badge" :to="'/receiver/' + currentBadge" id="prim-btn">next</router-link>
    </div>
  <!-- </div> -->
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

.badge-select {
  margin-top: 8rem;
  display: flex;
  flex-direction: column;

  & #prim-btn {
    align-self: flex-end;
  }
}

.badges-ul {
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; */
  margin: 4rem 0 6rem;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  grid-gap: 3rem 1.87rem;
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

.badge-name-bold {
  font-weight: 700;
  max-width: 9rem;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
  line-height: 24px;
}

.single-badge {
  font-weight: 400;
  /* margin: 2rem; */
  opacity: 0.8;
  transition: 0.2s opacity;

}

.single-badge:hover {
  font-weight: 400;
  opacity: 1;
  cursor: pointer;
}

.imgStnd {
  padding: 0.5rem;
  border: 0.1rem solid transparent;
}

.active-badge-square {
  padding: 0.5rem;
}


.single-badge .radio-btn:checked + .active-badge-square {
  padding: 0.5rem;
  border: 0.1rem solid white;
}

.active-badge-square {
  padding: 0.5rem;
  border: 0.1rem solid white;
}

.active-badge-circle {
  padding: 0.5rem;
  border: 0.1rem solid white;
  border-radius: 5rem;
}

.active-badge-triangle {
  padding: 0.5rem;
  //border: 0.1rem solid transparent;
  background-image: url('/assets/img/shapes/triangle.svg');
  background-size: 100%;
  background-repeat: no-repeat;
}

.active-badge-hexagon {
  padding: 0.5rem;
  //border: 0.1rem solid transparent;
  background-image: url('/assets/img/shapes/hexagon.svg');
  background-size: 89%;
  background-repeat: no-repeat;
  background-position-x: 0.55rem;
  background-position-y: -0.1rem;
}

.badge-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.next-selectbadge {
  margin-top: -2.5rem;
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
