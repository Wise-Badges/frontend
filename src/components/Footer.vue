<template>
  <footer id="footer">
    <div class="footer__main">
      <div class="container">
        <ul class="social">
          <li><a href="https://twitter.com/wisebadges" target="_blank"><img class="social__icon" alt="Twitter" src="/assets/img/footer/twitter.svg"/></a><span class="hidden">Twitter</span></li>
          <li><a href="https://www.instagram.com/wisebadges/" target="_blank"><img class="social__icon" alt="Instagram" src="/assets/img/footer/instagram.svg"/></a><span class="hidden">Instagram</span></li>
          <li><a href="https://www.linkedin.com/in/wisebadges" target="_blank"><img class="social__icon" alt="LinkedIn" src="/assets/img/footer/linkedin.svg"/></a><span class="hidden">LinkedIn</span></li>
          <li><a href="https://join.slack.com/t/wisebadges/shared_invite/zt-g689qtur-yXwL5ZpIBPd89d7iaMVldw" target="_blank"><img class="social__icon" alt="Slack" src="/assets/img/footer/slack.svg"/></a><span class="hidden">Slack</span></li>
        </ul>
        <div class="info">
          <p class="info__site">WiseBadges is a part of Bridges, a project funded by the Erasmus+ programme to improve gender equity in the access to STEM education</p>
          <div class="info__links">
            <a href="https://bridges.openrecognition.org/" target="_blank">bridges.openrecognition.org</a>
            <a href="mailto:wisebadges@openrecognition.org" target="_blank">contact</a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__copyright">
      <div class="container">
        <p>Made with love at <a href="https://osoc.be/editions/2020/wise-badges" target="_blank" class="sec-btn-inline">OSOC20</a></p>
        <div class="footer__logos">
          <img class="footer__logo--erasmus" alt="Erasmus" src="/assets/img/footer/logo-erasmus.png" />
          <img class="footer__logo--osoc" alt="OSOC" src="/assets/img/footer/logo-osoc.svg" />
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default ({
    name: 'Footer',
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

  #footer {
    /* position: absolute;
    bottom: 0;
    width: 100%; */
    margin-top: 11.2rem;

    @media only screen and (max-width: 1024px) {
       margin-top: 5rem;
    }
  }

  .footer__main {
    background-color: $color-purpleDark;
    color: $color-purpleLight;
    background-image: url('/assets/img/footer/background.svg');
    background-repeat: no-repeat;
    background-position: bottom right;

    & .social {
      display: flex;
      justify-content: center;
      padding: 3.5rem 0;
      border-bottom: 1px solid $color-purpleLight;

      & li {
      padding: 0 .5rem;
      }

      & .social__icon {
        height: 1.875rem;
        transition: .4s;

        &:hover {
          filter: brightness(300%);
        }
      }
    }

    & .info {
      padding: 3.5rem 0;
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 630px) {
        flex-direction: column;
      }

      & .info__site {
        max-width: 28rem;
        line-height: 1.5rem;
      }

      & .info__links {
        line-height: 1.5rem;
        text-align: right;
        transform: translateX(-3rem);
        display: flex;
        flex-direction: column;

        & a {
          color: $color-purpleLight;
          text-decoration: none;
          transition: .4s;

          &:hover {
            color: white;
          }

          @media only screen and (max-width: 630px) {
            margin-top: .5rem;
          }
        }

        @media only screen and (max-width: 630px) {
          margin-top: 1rem;
          text-align: left;
          transform: translateX(0rem);
        }

        & a::after {
            content: '';
            background-image: url("/assets/img/footer/arrow.svg");
            position: absolute;
            background-repeat: no-repeat;
            width: 2.5rem;
            height: 100%;

            transform: translate(1rem, .5rem);
            display: inline-block;
            vertical-align: top;
            transition: 0.4s;
        }
      }
    }
  }

  .footer__copyright {
    background-color: white;
    color: $color-purpleDark;

    & .container {
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 1024px) {
        flex-direction: column;
        text-align: center;
      }
    }

    & p {
      padding: 2rem 0;
    }

    & .sec-btn-inline {
       border-bottom: .06rem dotted $color-purpleDark;
       color: $color-purpleDark;

       &::after {
         background-image: url('/assets/img/footer/link.svg');
       }
     }
  }

  .footer__logos {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1024px) {
      margin: 0 auto 2rem;
    }

    & .footer__logo--erasmus {
      height: 1.8rem;
    }

    & .footer__logo--osoc {
      height: 2.7rem;
      margin-left: 1.5rem;
    }
  }
</style>
