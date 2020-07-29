<template>
  <div class="selectedBadge-container">
    <img :class="'img-badge-form img-badge-' + checkId().figure" :src="checkId().image" v-bind:alt="checkId().name">
    <div class="badge-text">
      <p class="selectedBadge-name">{{checkId().name}}</p>
      <div class="selectedBadge-receiver">
        <p v-if="$route.params.receiver">To {{$route.params.receiver}}</p>
        <p v-if="this.$store.state.receiver[0] == undefined">Something went wrong my dear</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'receiver',
  data() {
    return {
      twitterhandler: [],
    }
  },
  methods: {
    checkId: function() {
      for(let i = 0; i < this.$store.state.badgesApi.data.length; i++) {
        let fullId = this.$store.state.badgesApi.data[i].id;
        let shortId = /[^/]*$/.exec(fullId)[0]

        if (this.$route.params.id === shortId) {
          let currentBadgeSelected = this.$store.state.badgesApi.data[i];

          return currentBadgeSelected
        }
      }
    },
    handleSubmit: function(e) {
      this.$store.state.receiver = [];

      if (this.$refs.receiver.value === '') {
        this.$store.state.validField = false;
      } else {
        this.$store.state.validField = true;
      }

        if(this.$store.state.pressedAtmark) {
          this.$store.state.receiver.push({receiver: this.$refs.receiver.value})
        } else {
          this.$store.state.receiver.push({receiver: '@' + this.$refs.receiver.value})
        }
    }
  }
}
</script>

<style lang="scss">
.img-badge-form {
  height: 10.4rem;
  z-index: 2;
}

.selectedBadge-container {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 4.5rem;
  position: relative;
  height: 100%;

  @media only screen and (max-width: 630px) {
    margin-left: 0;
    flex-direction: column;
  }

  & .badge-text {
    height: 100%;
    width: 100%;
    background-color: #331F9F;
    padding: 2rem;
    transform: translateX(-5rem);

    @media only screen and (max-width: 630px) {
      padding: 2rem 0 0 0;
      background: none;
      transform: translateX(0rem);
    }

    &::after {
      content: '';
      position: absolute;
      background-image: url('/assets/img/flag/flag-right.svg');
      height: 100%;
      width: 100%;
      right: 0;
      top: 0;
      transform: translateX(2rem);
      background-repeat: no-repeat;
      background-position: center right;

      @media only screen and (max-width: 630px) {
        position: relative;
      }
    }
  }
}

  .selectedBadge-name {
    letter-spacing: 0.2em;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: 4rem;

    @media only screen and (max-width: 630px) {
      margin-left: 0;
      text-align: center;
    }
  }

  .selectedBadge-receiver {
    letter-spacing: 0.1rem;
    font-weight: 400;
    margin-left: 4rem;
  }

  .bol {
      background-color: #A37FFA;
      width: .8rem;
      height: .8rem;
      margin: 0.5rem;
      border-radius: 2rem;
      opacity: 0.4;
  }

  .bol-active {
    opacity: 1;
  }

  .bol-inactive {
      cursor: default;
  }

  .twitterlink {
    color: #A37FFA;
    margin-bottom: 2rem;
  }
</style>
