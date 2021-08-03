<template>
  <v-app-bar absolute dark
             elevate-on-scroll>
    <span class="text-h4 font-weight-light">Mietwagen</span>
    <v-spacer></v-spacer>

    <div class="btns">
    <button  to="/" class="mx-4" elevation="0">
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
      <span class="navTxt">Home</span>
    </button >

    <button  to="/reserve" class="mx-4" elevation="0"  >
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
      <span class="navTxt">Reserve</span>
    </button >

    <button  to="/store" class="mx-4" elevation="0">
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
      <span class="navTxt">Store</span>
    </button >

    <button  to="/contact" class="mx-4" elevation="0">
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
      <span class="navTxt">contact</span>
    </button >

    <button  to="/about" class="mx-4" elevation="0">
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
      <span class="navTxt">About</span>
    </button >
    </div>

  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.btns
  display: flex
  flex-direction: row
  height: 100%


button
  color: #fff
  cursor: pointer
  font-size:16px
  font-weight: 400
  line-height: 45px
  margin: 0 0 2em
  max-width: 160px
  position: relative
  text-decoration: none
  text-transform: uppercase
  background: darken(#E1332D, 1.5%)
  svg
    height 35px
    width 260px
    margin-inline auto
    left 0
    position absolute
    top 10
  rect
    fill none
    stroke #fff
    stroke-width 2
    stroke-dasharray 422, 0
    transition all 0.35s linear
    width 30%
  &:hover
    background rgba(225, 51, 45, 0)
    font-weight 900
    letter-spacing 1px
    rect
      stroke-width 5
      stroke-dasharray 15, 310
      stroke-dashoffset 48
      transition all 1.35s cubic-bezier(0.19, 1, 0.22, 1)
</style>