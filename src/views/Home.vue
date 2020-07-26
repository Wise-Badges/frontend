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
// @ is an alias to /src
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
      margin-bottom: 4rem;
    }

    @media only screen and (max-width: 500px) {
      margin-top: 12rem;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 10rem;
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

    @media only screen and (max-width: 670px) {
      margin-left: 0;
    }
  }
</style>
