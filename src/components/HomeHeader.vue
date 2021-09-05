<template>
  <v-carousel :show-arrows="true"
              cycle
              hide-delimiters
              show-arrows-on-hover>
    <v-carousel-item
        v-for="(item,i) in getCarousels"
        :key="i"
        :src="item.src"
    >
      <v-row
          class="fill-height blur-content"
          align="center"
          justify="center"
      >
        <div class="text-h4 text-center white--text ma-2">
          <h2>{{ item.bigTitle }}</h2>
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

import {mapGetters} from "vuex"
export default {
  name: "HomeHeader",
  data () {
    return {
    }

  },
  computed:{
    ...mapGetters(['getCarousels'])
  }
}
</script>

<style scoped lang="stylus">
.blur-content
  background-color rgba(37, 37, 37, 0.70)
  margin auto
</style>