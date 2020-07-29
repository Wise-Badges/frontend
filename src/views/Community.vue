<template>
  <div class="view-badges">
    <h1 class="title">Community</h1>
    <select>
      <option>All</option>
      <option
        v-for="badge in badges"
        v-bind:key="badge.name"
        v-bind:value="badge.name"
      >{{ badge.name }}</option>
    </select>

    <ul class="acceptedBadges">
      <!-- ALL -->
      <li class="acceptedBadge"v-for="assertion in assertions" :key="assertion.id">
        <a :href="assertion.evidence.id">
        <p class="badge__receiver">{{ assertion.recipient.name }} received {{ getBadgeNameById(assertion.badge) }}</p>
        <!-- <p class="badge__message">{{ assertion.message }}</p> -->
        <p class="badge__issuer">issued on {{ getDate(assertion.issuedOn) }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
  export default ({
    data() {
      return {
        assertions: this.$store.state.assertionsApi.data,
        badges: this.$store.state.badgesApi.data,
        // assertionsTest: '';
      };
    },
    methods: {
      getDate(dateString) {
        let date = new Date(dateString);
        let fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        return fullDate;
      },
      getBadgeNameById(id) {
        let badge = this.badges.find(badge => badge.id === id);
        if (badge) {
          return badge.name;
        } else {
          return 'undefined';
        }

      }
    }
  });
</script>


<style lang="scss">
  $color-dark: #0B1147;
  $color-purpleDark: #331F9F;
  $color-purpleLight: #7C6DF1;
  $color-yellow: #FCDC3A;
  $color-mint: #A3F7E9;
  $color-pink: #E598C9;
  $color-red: #DF7668;

  .acceptedBadges {
    display: grid;
    grid-template: repeat(3, auto) / repeat(2, 1fr);
    grid-gap: 1.875rem;

    @media only screen and (max-width: 768px) {
      grid-template: auto / repeat(1, 1fr);
      grid-gap: 1.25rem;
    }
  }

  .acceptedBadge {
    background-color: $color-purpleDark;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .badge__receiver {
      transform: translateX(2rem);
      margin-bottom: 1rem;
      padding-right: 2rem;
      font-weight: 700;

      &::before {
        content: '';
        position: absolute;
        background-image: url('/assets/img/icons/award.svg');
        width: 1.1rem;
        height: 1.5rem;
        background-repeat: no-repeat;
        transform: translate(-2rem, .1rem)
      }
    }

    & a {
      color: white;
      text-decoration: none;
    }

    .badge__message {
      margin-bottom: 1rem;
    }

    .badge__issuer {
      padding-left: 4rem;

      &::before {
        content: '';
        position: absolute;
        height: .1rem;
        width: 2rem;
        background-color: $color-purpleLight;
        transform: translate(-3rem, .9rem);
      }
    }
  }
</style>
