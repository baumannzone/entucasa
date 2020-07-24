<template>
  <footer class="footer-bar">
    <div class="main-footer">
      <div>
        <img alt="entucasa-logo" src="/img/entucasa-logo.png" width="150px">
      </div>
      <div class="social">
        <h4>We are social!</h4>
        <div class="icon-links">
          <a href="https://www.instagram.com/entucasawhistler/" title="Instagram">
            <img alt="instagram entucasawhistler" height="30px" src="/img/icons/ig.png">
          </a>
          <a href="https://www.facebook.com/entucasawhisler" title="Facebook">
            <img alt="facebook entucasawhistler" height="30px" src="/img/icons/fb.png">
          </a>
          <a href="https://wa.me/16043888086" title="Whatsapp">
            <img alt="WhatsApp entucasawhistler" height="30px" src="/img/icons/wa.png">
          </a>
        </div>
        <p>
          <small>
            Call us: &nbsp; <code><b>604 388 8086</b></code>
          </small>
        </p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
    <div class="sub-footer">
      <small class="love">En Tu Casa Whistler · Made with <b title="Love"><3</b> </small>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer-bar'
  }
</script>

<style lang="stylus" scoped>
  footer.footer-bar
    .main-footer
      padding-top 3rem
      padding-bottom 3rem
      background-color #222
      color white
      display flex
      flex-direction column
      text-align center

      .social
        .icon-links
          margin-top 2rem

          a:not(:last-child)
            margin-right 1rem

    .sub-footer
      padding .5rem
      background-color #000
      text-align center

      .love
        color #797979
        font-family monospace

  @media (min-width: $MQMobileNarrow)
    footer.footer-bar
      .main-footer
        display grid
        grid-template-columns 1fr 1fr

  // $MQNarrow = 959px
  // $MQMobile = 719px
  // $MQMobileNarrow = 419px
</style>
