<template>
  <footer id="footer">
    <div class="footer__main">
      <div class="container">
        <ul class="social">
          <li><img alt="Twitter" src="/assets/img/footer/twitter.svg"/><span class="hidden">Twitter</span></li>
          <li><img alt="Instagram" src="/assets/img/footer/instagram.svg"/><span class="hidden">Instagram</span></li>
          <li><img alt="Facebook" src="/assets/img/footer/facebook.svg"/><span class="hidden">Facebook</span></li>
        </ul>
        <div class="info">
          <p class="info__site">WiseBadges is a part of Bridges a project funded by the Erasmus+ project to improve gender equity in the access to STEM</p>
          <div class="info__links">
            <p>Lorem ipsum</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__copyright">
      <div class="container">
        <p>Made with love at <a href="http://osoc.be/editions/2020" target="_blank" class="sec-btn-inline">OSOC20</a></p>
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
  }

  .footer__main {
    background-color: $color-purpleDark;
    color: $color-purpleLight;

    & .social {
      display: flex;
      justify-content: center;
      padding: 3.5rem 0;
      border-bottom: 1px solid $color-purpleLight;

      & li {
      padding: 0 .5rem;
      }
    }

    & .info {
      padding: 3.5rem 0;
      display: flex;
      justify-content: space-between;

      & .info__site {
        max-width: 22rem;
        line-height: 1.5rem;
      }

      & .info__links {
        line-height: 1.5rem;
        text-align: right;
        transform: translateX(-3rem);

        & p::after {
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
    }

    & p {
      padding: 2rem 0;
    }

    & .sec-btn-inline {
       border-bottom: .06rem dotted $color-purpleDark;
       color: $color-purpleDark;

       &:hover {
         color: $color-purpleLight;
         border-bottom: .06rem dotted $color-purpleLight;
       }

       &::after {
         background-image: url('/assets/img/footer/link.svg');
       }
     }
  }

  .footer__logos {
    display: flex;
    align-items: center;

    & .footer__logo--erasmus {
      height: 1.8rem;
    }

    & .footer__logo--osoc {
      height: 2.7rem;
      margin-left: 1.5rem;
    }
  }
</style>
