<template>
  <article>
    <h1>About</h1>

    <div class="about">
      <section class="about__info">
        <h2 class="hidden">Info</h2>
        <p>WiseBadges is created out of the need for recognizing females within the STEM field. A field where females are a minority and struggling to find their ways to be valued, accepted and appreciated. WiseBadges believes it is crucial to recognize the ongoing struggles, aiming to create a positive climate for females studying or working in a STEM domain.</p>
        <p>When studying at a college or university receiving a diploma and therefore, acknowledgment is a logical step. Times do change, and informal learning is gaining importance. The valuable time devoted to boosting competences needs to be more visible and therefore, more powerful. That is where WiseBadges comes into place, making it possible to validate a specific skill, approach or characteristic.</p>
        <p>WiseBadges makes the process of giving and receiving recognition easy, fun and inspiring. Awarding people who deserve it, making them feel recognized and especially helping them build their presence within the STEM community. WiseBadges shines a light on the importance of empowering and validating females, aiming to develop a community of like-minded people.</p>
      </section>
      <aside class="about__sidebar">
        <h2 class="hidden">Project and license</h2>
        <p>WISEBAdges is an ongoing open source project funded by Erasmus+</p>
        <p>The content on this website, is licensed under a Creative Commons Attribution 4.0 International License.</p>
        <span>Support us on</span>
        <ul>
          <li>Open Collective</li>
          <li>Github</li>
        </ul>
      </aside>
    </div>

    <div class="partners">
      <div>
        <h2>Partners</h2>
        <p>The participants are a consortium of non-formal and formal science and technologies education providers:</p>
        <ol>
          <li>Espace Mendès France, France</li>
          <li>University of Cyprus</li>
          <li>Open Knowledge Belgium</li>
          <li>Scientifica, Romania</li>
          <li>Vrije Universiteit, Netherlands</li>
          <li>Reconnaître-Open Recognition Alliance</li>
        </ol>
      </div>
      <div>
        logo's
      </div>
    </div>

  </article>
</template>

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

    & p {
      margin-bottom: 1.5rem;
    }

    .about__info {
      padding-right: 2rem;


      & p:first-of-type {
        font-weight: bold;
      }
    }

    .about__sidebar {
      background-color: $color-purpleDark;
      padding: 2rem;
    }
  }

  .partners {
    display: grid;
    grid-template: auto / 2fr 1fr;
    grid-gap: 1.875rem;

    & p {
      margin-bottom: 1.5rem;
    }
  }
</style>
