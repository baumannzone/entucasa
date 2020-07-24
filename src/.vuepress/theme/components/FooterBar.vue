<template>
  <footer class="footer-bar">
    <div>Img</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </footer>
</template>

<script>
  export default {
    name: 'footer-bar'
  }
</script>

<style lang="stylus" scoped>
  footer.footer-bar
    display flex
    justify-content space-between
    padding-top 2rem
    padding-bottom 2rem
    background-color #242424
    color white
</style>
