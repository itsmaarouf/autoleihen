<template>
    <div class="containerDiv ma-auto d-flex">
      <v-img width="100%"
             height="150"
             src="/images/Cover-title.jpg"
             gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,1.5)"
      ></v-img>
      <div class="text-block">
        <h2 class="text-center font-weight-bold">About Us</h2>
        <router-link to="/" class="removeLink font-weight-light">Home </router-link><span class="pageName"> / About Us</span>

      </div>
    </div>
</template>

<script>
export default {
  name: "CoverTitle"
}
</script>

<style lang="stylus" scoped>
.containerDiv
  position relative
  padding 0
  margin 0

.text-block
  position absolute
  bottom 20%
  left 45%
  color white
  font-size large
.removeLink
  text-decoration none
a
  color white
.pageName
  color #FFB100
</style>