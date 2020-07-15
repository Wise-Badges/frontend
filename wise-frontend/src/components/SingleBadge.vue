<template>
  <div class="hello">
    <ul>
      <li>
        <img src="../assets/img/badges/didnt_explode.svg" alt="badge women empowerment">
        <p> {{ title }} </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default ({
  name: 'app',
  data() {
    return {
      title: 'did not explode',
    };
  },
});
</script>
