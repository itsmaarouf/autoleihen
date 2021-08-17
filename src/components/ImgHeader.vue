<template>
  <v-card
      class="ma-0"
      width="100%"
      height="400"
      tile
  >
    <v-img
        class="imgsg"
        height="400"
        src="https://images.unsplash.com/photo-1627212602579-6d069634b781?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    >
      <v-col
          align="center"
      >
          <v-card class="d-block pa-4" width="450">
            <v-card-title class="ml-16 pb-0">Rental car price comparison</v-card-title>
            <v-card-text class="d-inline-block">Find your rental car at the best price now.
            </v-card-text>
            <v-form>
              <v-text-field
                  v-model="search"
                  label="city"
                  outlined
                  clearable
                  required
              >
                <v-icon
                    slot="append"
                    large
                >
                  mdi-magnify
                </v-icon>
              </v-text-field>
          </v-form>
          </v-card>
      </v-col>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "ImgHeader",

}
</script>

<style scoped lang="stylus">

</style>