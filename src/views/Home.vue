<template>
<!-- eslint-disable max-len -->
  <div>
      <div class="title__wrapper">
        <p class="title__wise">WISE</p>
        <p class="title__info">Women <br>
          In <br>
          STEM <br>
          Empowered
        </p>
      </div>
      <p class="intro">Do you know a powerful woman who has incredible self-taught skills? Do you want to praise a colleague, freelancer, …?
      Celebrate an accomplishment of a female STEM student? Support them by sending a WiseBadge, make them smile and empower them. Yes, you can!</p>
    <BadgeSelect msg="Choose a badge to give"/>
  </div>
</template>

<script>

import BadgeSelect from '@/components/BadgeSelect.vue';

export default {
  name: 'Home',
  components: {
    BadgeSelect,
  },
};
</script>

<style lang="scss">
.title__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    line-height: 1.2;

    @media only screen and (max-width: 670px) {
      margin-top: 12rem;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 12rem;

      &::before {
        content: '';
        position: absolute;
        background-size: cover;
        left: 0;
        top: 0;
        bottom: 0;
        height: 48rem;
        width: 100%;
        background-image: url('/assets/img/flag/bg-mobile.svg');
        background-repeat: no-repeat;
        background-position: bottom;
        z-index: -1;
      }
    }

    @media only screen and (max-width: 500px) {
      margin-top: 12rem;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 8rem;

      &::before {
        height: 42rem;
      }
    }

    & .title__wise {
      font-size: 13rem;
      font-weight: 700;

      @media only screen and (max-width: 1024px) {
        font-size: 10rem;
      }

      @media only screen and (max-width: 670px) {
        font-size: 9rem;
      }

      @media only screen and (max-width: 500px) {
        font-size: 6.25rem;
      }
    }

    & .title__info {
      font-size: 2.1rem;
      padding-left: 1rem;
      transform: translateY(.6rem);

      @media only screen and (max-width: 1024px) {
        font-size: 1.65rem;
      }

      @media only screen and (max-width: 670px) {
        font-size: 2.1rem;
        padding-left: 0;
      }
    }
  }

  .intro {
    max-width: 28rem;
    margin-top: 1rem;
    margin-left: auto;

    @media only screen and (max-width: 1024px) {
      max-width: calc(50vw - 3.5rem);
      margin-left: auto;
    }

    @media only screen and (max-width: 670px) {
      max-width: 100%;
      margin-left: 0;
    }
  }
</style>
