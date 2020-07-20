<template>
<!-- eslint-disable max-len -->
  <div>
    <div class="title__wrapper">
      <div class="title">
        <p class="title__wise">WISE</p>
        <p class="title__info">Women <br>
          In <br>
          STEM <br>
          Empowered
        </p>
      </div>
      <p class="intro">Do you know a powerful woman who has incredible self-taught skills? Do you want to praise a colleague, freelancer, …?
      Celebrate an accomplishment of a female STEM student? Support them by sending a WiseBadge, make them smile and empower them. Yes, you can!</p>
    </div>
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
.title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    line-height: 1.2;

    & .title__wise {
      font-size: 13rem;
      font-weight: 700;
    }

    & .title__info {
      font-size: 2.1rem;
      padding-left: 1rem;
      transform: translateY(.6rem);
    }
  }

  .intro {
    max-width: 28rem;
    margin-top: 1rem;
    margin-left: auto;
  }
</style>
