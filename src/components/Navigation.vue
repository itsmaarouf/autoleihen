<template>
  <v-app-bar absolute dark elevate-on-scroll>
    <span class="text-h4 font-weight-light">Mietwagen</span>
    <v-spacer></v-spacer>

    <v-btn to="/" class="btn" elevation="0">
      <span class="btn-text">Home</span>
    </v-btn>

    <v-btn to="/about" class="btn" elevation="0">
      <span class="btn-text">About Us</span>
    </v-btn>

    <v-btn to="/cars" class="btn" elevation="0">
      <span class="btn-text">Our Cars</span>
    </v-btn>

    <v-btn to="/minibus" class="btn" elevation="0">
      <span class="btn-text">Minibus</span>
    </v-btn>

    <v-btn to="/services" class="btn" elevation="0">
      <span class="btn-text">Our Services</span>
    </v-btn>

    <v-btn to="/news" class="btn" elevation="0">
      <span class="btn-text">News</span>
    </v-btn>

    <v-btn to="/testimonials" class="btn" elevation="0">
      <span class="btn-text">Testimonials</span>
    </v-btn>

    <v-btn to="/contact" class="btn" elevation="0">
      <span class="btn-text">Contact Us</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>

btn
  position relative
  color #a0a0a0
  font-family "cursive", sans-serif
  font-size initial

.btn
  &:before
    z-index -1
  &:after
    content ''
    position absolute
    width 100%
    transform scaleX(0)
    height 2px
    bottom 0
    left 0
    background-color #ffffff
    transform-origin bottom right
    transition transform 0.45s ease-out
  &:hover
    &:after
      transform scaleX(1)
      transform-origin bottom left
</style>
