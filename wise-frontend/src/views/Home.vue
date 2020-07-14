<template>
<!-- eslint-disable max-len -->
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>WISE</h1>

    <p>Do you know a powerful woman who has incredible self-taught skills? Do you want to praise a colleague, freelancer, …?
      Celebrate an accomplishment of a female STEM student? Support them by sending a WiseBadge, make them smile and empower them.
      Yes, you can!</p>
    <BadgeSelect msg="-- Choose a badge to give"/>
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
