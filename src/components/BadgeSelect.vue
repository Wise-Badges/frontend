<template>
  <div class="badge-select">
    <h2 class="subtitle">{{ msg }}</h2>
    <ul class="badges-ul">
      <li class="single-badge" id="badgelist" v-for="badge in this.$store.state.badgesApi.data" :key="badge.name">
        <input class="radio-btn" type="radio" :checked="checked" v-on:change="$emit('change', $event.target.checked)" v-model="currentBadge" :id="badge.name" :value="badge.id" name="badge.id">

        <label v-if="currentBadge === badge.id" class="badge-label" :for="badge.name" :id="badge.name" name="currentBadge">
          <img :class="'imgStnd active-badge-' + badge.figure" :src="badge.image" v-bind:alt="badge.name">
          <p class="badge-name-bold">{{badge.name}}</p>
        </label>

        <label v-if="currentBadge !== badge.id" class="badge-label" :for="badge.name" :id="badge.name" name="currentBadge">
          <img class="imgStnd" :src="badge.image" v-bind:alt="badge.name">
          <p class="badge-name">{{badge.name}}</p>
        </label>
      </li>
    </ul>
      <div class="bol-container">
        <router-link to="" class="bol bol-active"></router-link>
        <router-link to="/" class="bol bol-inactive"></router-link>
        <router-link to="/" class="bol bol-inactive"></router-link>
        <router-link to="/" class="bol bol-inactive"></router-link>
      </div>
        <router-link class="router-item next-selectbadge" badge="badge" :to="'/receiver/' + getId(currentBadge)" id="prim-btn">next</router-link>
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
      currentBadge: 'https://api.wisebadges.osoc.be/badgeclass/5f1ec15c71d07def7b588a73',
      active: true,
    };
  },
  getImgUrl(badge) {
    return badgeImages('./' + badge + ".svg")
  },
  methods: {
    getId() {
      let shortBadgeId = /[^/]*$/.exec(this.currentBadge)[0];

      return shortBadgeId;
    }
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

.badge-select {
  margin-top: 8rem;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    margin-top: 3.5rem;
  }

  & #prim-btn {
    align-self: flex-end;
  }
}

.badges-ul {
  margin: 4rem 0 6rem;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  grid-gap: 3rem 1.87rem;

   @media only screen and (max-width: 1024px) {
      grid-template: repeat(2, 1fr) / repeat(3, 1fr);
   }

    @media only screen and (max-width: 630px) {
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
      margin: 0 0 6rem;
      grid-gap: 1.25rem;
   }

  @media only screen and (max-width: 350px) {
     grid-template: repeat(2, 1fr) / repeat(1, 1fr);
  }
}

.radio-btn {
  opacity: 0;
  position: fixed;
  width: 0;
}

.badge-name {
  max-width: 8.8rem;
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
  opacity: 0.8;
  transition: 0.2s opacity;

    @media only screen and (max-width: 630px) {
      background-color: #331F9F;
      margin: 0;
      padding: 1rem;
   }
}

.single-badge:hover {
  font-weight: 400;
  opacity: 1;
}

.imgStnd {
  padding: 0.5rem;
  border: 0.1rem solid transparent;
  height: 8.8rem;

  @media only screen and (max-width: 630px) {
    height: 5rem;
  }
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
  background-image: url('/assets/img/shapes/triangle.svg');
  background-size: 102%;
  background-position-x: -0.1rem;
  background-position-y: -0.1rem;
  background-repeat: no-repeat;
}

.active-badge-hexagon {
  padding: 0.5rem;
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

  &:hover {
    cursor: pointer;
  }
}

.next-selectbadge {
  margin-top: -2.5rem;
}

</style>
