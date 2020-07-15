<template>
<!-- eslint-disable max-len -->
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1><img src="@/assets/img/wise_h1.svg" alt="WISE" width=600></h1>

    <p class="subtext">Do you know a powerful woman who has incredible self-taught skills? Do you want to praise a colleague, freelancer, …?
      Celebrate an accomplishment of a female STEM student? Support them by sending a WiseBadge, make them smile and empower them.
      Yes, you can!</p>
    <BadgeSelect msg="Choose a badge to give"/>
    <button id="prim-btn">next</button>
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

.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.subtext {
  max-width: 30rem;
  text-align: left;
  line-height: 28px;
  font-size: 1rem;

}

</style>
