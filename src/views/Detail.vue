<template>
  <div class="detail">
    <div class="detail__info">
      <h1 class="title">Your badge</h1>
      <p>This badge has not been accepted yet, please accept it by liking the following Tweet. Only @username can officially accept this badge before 21/08/20.</p>

      <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over
        <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>.
        <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a>
        <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a>
        <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior)
        <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a>
      </blockquote>
    </div>
    <div class="detail__badge">
      <div>
        <img src="assets/img/badges/eureka.svg" alt="eureka">
        <p>Next Gen Albert Einstein</p>
        <router-link class="router-item" to="/" id="prim-btn">Download</router-link>
        <p>Badge has not been accepted.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      document.head.appendChild(recaptchaScript)
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  $color-dark: #0B1147;
  $color-purpleDark: #331F9F;
  $color-purpleLight: #7C6DF1;
  $color-yellow: #FCDC3A;
  $color-mint: #A3F7E9;
  $color-pink: #E598C9;
  $color-red: #DF7668;

.detail {
  display: grid;
  grid-template: auto / 2fr 1fr;
  grid-gap: 1.875rem;
}

.detail__badge div{
  padding: 2rem;
  background-color: $color-purpleDark;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.detail__badge {
  width: calc(((100% - (100% - 60rem)) - 1.875rem) /3);
  // calc(((100% - (100% - 60rem)) - 1.875rem) /3)
  // (60rem - 1.875rem)/3
  &::after {
    height: 5rem;
    width: inherit;
    background-image: url('/assets/img/flag-bottom.svg');
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center
  }
}
</style>
