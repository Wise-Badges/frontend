<template>
  <article>
    <h1 class="title">About</h1>

    <div class="about">
      <section class="about__info">
        <h2 class="hidden">Info</h2>
        <p>WiseBadges is created out of the need for recognizing females within the STEM field. A field where females are a minority and struggling to find their ways to be valued, accepted and appreciated. WiseBadges believes it is crucial to recognize the ongoing struggles, aiming to create a positive climate for females studying or working in a STEM domain.</p>
        <p>When studying at a college or university receiving a diploma and therefore, acknowledgment is a logical step. Times do change, and informal learning is gaining importance. The valuable time devoted to boosting competences needs to be more visible and therefore, more powerful. That is where WiseBadges comes into place, making it possible to validate a specific skill, approach or characteristic.</p>
        <p>WiseBadges makes the process of giving and receiving recognition easy, fun and inspiring. Awarding people who deserve it, making them feel recognized and especially helping them build their presence within the STEM community. WiseBadges shines a light on the importance of empowering and validating females, aiming to develop a community of like-minded people.</p>
        <p>WiseBadges is inspired by the existing project <a target="_blank" class="sec-btn-inline" href="https://badgebot.io/">BadgeBot</a></p>
      </section>
      <aside class="about__sidebar">
        <div>
          <div>
            <h2 class="hidden">Project and license</h2>
            <p>WiseBadges as part of Bridges is an ongoing open source project funded by Erasmus+</p>
            <p>The content on this website, is licensed under a Creative Commons Attribution 4.0 International License.</p>
          </div>
          <div class="support">
            <span>Support us on</span>
            <ul>
              <li>Open Collective</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </aside>
    </div>

    <div class="partners">
      <div>
        <h2 class="subtitle">Partners</h2>
        <p>The participants are a consortium of non-formal and formal science and technologies education providers:</p>
        <ol>
          <li v-for="partner in partners" :key="partner.name">{{ partner.name }}</li>
        </ol>
      </div>
      <ul class="partner__images">
        <li v-for="partner in partners" :key="partner.name">
          <img :src="'assets/img/partners/' + partner.img + '.png'" v-bind:alt="partner.name">
        </li>
      </ul>
    </div>

  </article>
</template>

<script>
  export default ({
    data() {
      return {
        partners: [
          { id: 1, name: 'Espace Mendès France, France', img: 'espace-mendes'},
          { id: 2, name: 'University of Cyprus', img: 'university-of-cyprus'},
          { id: 3, name: 'Open Knowledge Belgium', img: 'open-knowledge-belgium'},
          { id: 4, name: 'Scientifica, Romania', img: 'scientifica'},
          { id: 5, name: 'Vrije Universiteit, Netherlands', img: 'vrije-universiteit'},
          { id: 6, name: 'Reconnaître-Open Recognition Alliance', img: 'reconnaitre'}
        ],
      };
    },
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

  .about {
    display: grid;
    grid-template: auto / 2fr 1fr;
    grid-gap: 1.875rem;

    @media only screen and (max-width: 1024px) {
      grid-template: auto / 1fr;
    }

    & p {
      margin-bottom: 1.5rem;
    }

    .about__info {
      padding-right: 2rem;


      & p:first-of-type {
        font-weight: bold;
      }
    }

    .about__sidebar > div {
      background-color: $color-purpleDark;
      padding: 2rem;

      @media only screen and (max-width: 1024px) {
        display: grid;
        grid-template: auto / 2fr 1fr;
        grid-gap: 6rem;
      }

      @media only screen and (max-width: 630px) {
        grid-gap: 0;
        grid-template: auto / 1fr;
      }

      & div {
        position:relative;
      }

      & .support::before {
        @media only screen and (max-width: 1024px) {
          content: '';
          top:0;
          bottom:0;
          left:0;
          position: absolute;
          width: 2px;
          background: $color-purpleLight;
          transform: translateX(-3rem)
        }
        @media only screen and (max-width: 630px) {
          width: 0;
        }
      }
    }
  }

  .partners {
    display: grid;
    grid-template: auto / 2fr 1.3fr;
    grid-gap: 1.875rem;
    margin-top: 8rem;

    @media only screen and (max-width: 1024px) {
      margin-top: 4rem;
      grid-template: auto / 1fr;
      grid-gap: 1.25rem;
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

    & p {
      margin-bottom: 1.5rem;
    }

    & .partner__images {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin-top: 4.5rem;

      & img {
         height: 5.4rem;
         margin-left: 3.5rem;

         @media only screen and (max-width: 1024px) {
          height: 6rem;
          margin: 1rem 2rem;
        }
      }

        @media only screen and (max-width: 1024px) {
          justify-content: center;
        }
    }
  }
</style>
