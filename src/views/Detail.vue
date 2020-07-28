<template>
<div>
  <h1 class="title">Your badge</h1>
    <div class="detail">

      <div class="detail__info">
        <p>This badge has not been accepted yet, please accept it by liking the following Tweet. Only @username can officially accept this badge before 21/08/20.</p>

        <div class="tweet__wrapper">
          <blockquote class="twitter-tweet" data-lang="en">
            <p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over
            <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>.
            <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a>
            <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a>
            <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior)
            <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote>
        </div>
      </div>

      <div class="detail__badge">
        <div>
          <img class="badge__img" src="assets/img/badges/eureka.svg" alt="eureka">
          <p class="badge__title">Next Gen Albert Einstein</p>
          <a href="/" id="prim-btn">Download</a>
          <p class="badge__status">Badge has not been accepted.</p>
        </div>
      </div>

    </div>
    <div class="delete">
      <p>Not happy with your badge? With a simple Tweet command, our bot will delete your badge Open Badge permanently. Only a tweet by @receiver_here will be accepted.</p>
      <router-link to="/" target="_blank" id="prim-btn">Tweet to delete</router-link>
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

  @media only screen and (max-width: 1024px) {
    grid-template: auto / 1fr;
  }
}

.detail__info {
  padding-right: 2rem;

    @media only screen and (max-width: 1024px) {
        padding-right: 0;
    }

  & .tweet__wrapper {
    margin-top: 3rem;
  }
}

.detail__badge {
  width: calc(((100% - (100% - 60rem)) - 1.875rem) /3);
  // calc(((100% - (100% - 60rem)) - 1.875rem) /3)
  // (60rem - 1.875rem)/3
  &::after {
    height: 5rem;
    width: inherit;
    background-image: url('/assets/img/flag/flag-bottom.svg');
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center
  }

  & div{
    padding: 2rem;
    background-color: $color-purpleDark;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  & .badge__img {
    margin-bottom: 2rem;
  }

  & .badge__title {
    text-align: center;
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.5;
  }

  & .badge__status {
    margin-top: 1rem;
    font-style: italic;
  }

  & #prim-btn {
    margin-top: 2rem;
  }
}

.delete {
  display: grid;
  grid-template: auto / 2fr 1fr;
  grid-gap: 1.875rem;
  padding-right: 2rem;
  place-items: center center;
  margin-top: 8rem;

  @media only screen and (max-width: 1024px) {
    grid-template: auto / 1fr;
  }

  & p {
    color: $color-purpleLight;
    font-style: italic;
  }

  & #prim-btn {
    height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    height: .15rem;
    width: calc(100vw - (100vw - 60rem));
    background: $color-purpleDark;
    transform: translateY(-4rem);

    @media only screen and (max-width: 1024px) {
      width: 0;
    }
  }
}
</style>
