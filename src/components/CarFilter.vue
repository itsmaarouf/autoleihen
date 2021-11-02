<template>
  <v-col class="pa-0">
    <v-card elevation="0"
    class="formColor pa-3"
    >
      <h2>Adjust the search result</h2>

      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="ma-auto pa-3"
      >
        <v-row>
          <v-col class=" col-md-4 col-sm-6 col-xs-12">
           <v-row>
             <v-col>
               <v-select
                   outlined
                   v-model="dep"
                   :items="places"
                   label="Departure"
                   hide-details
               ></v-select>
             </v-col>
           </v-row>
           <v-row>
             <v-col>
               <el-date-picker
                   style="width: fit-content"
                   v-model="value1"
                   type="date"
                   placeholder="Pick a date"
                   default-value="2010-10-01">
               </el-date-picker>
             </v-col>
             <v-col>
               <el-time-select
                   style="width: fit-content"
                   v-model="value"
                   :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
                   placeholder="Select time">
               </el-time-select>
             </v-col>
           </v-row>
          </v-col>

          <v-col class="col-md-4 col-sm-6 col-xs-12">
           <v-row>
             <v-col>
               <v-select
                   outlined
                   v-model="Ret"
                   :items="places"
                   label="Return"
                   hide-details
               ></v-select>
             </v-col>
           </v-row>
           <v-row>
             <v-col>
               <el-date-picker
                 style="width: fit-content"
                 v-model="value2"
                 type="date"
                 placeholder="Pick a date"
                 default-value="2010-10-01">
             </el-date-picker>
             </v-col>
             <v-col>
               <el-time-select
                   style="width: fit-content"
                   v-model="value3"
                   :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
                   placeholder="Select time">
               </el-time-select>
             </v-col>
           </v-row>
          </v-col>

          <v-col class="col-md-4 col-sm-12 col-xs-12">
           <v-row class="pt-3">
             <v-select
                 outlined
                 v-model="Brand"
                 :items="allBrands"
                 label="Departure"
                 class="mx-4"
             ></v-select>
             <v-select
                 outlined
                 v-model="Fuel"
                 :items="allTypes"
                 label="Departure"
                 hide-details
                 class="mx-4"
             ></v-select>
           </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-btn class="mt-6"
                 x-large
                 dark
          >SEARCH</v-btn>
        </v-row>

      </v-form>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "CarFilter",
  data: () => ({
    value3: '',
    value2: '',
    value1: '',
    value: '',
    valid: true,
    select: null,
    places: [ 'Agadir - Airport El Massira', 'Agadir - City', 'Bouznika - City Center', 'Casablanca - Airport Mohammed V',
      'Casablanca - City Center', 'Fez - Airport', 'Fez - City Center', 'Marrakech - Airport',
      'Marrakech - City Center', 'Mohammedia - City Center', 'Rabat - Airport', 'Rabat - City Center',
      'Tangier - Airport', 'Tangier - City Center', ],
    allBrands: [ 'Alfa Romeo','Audi','BMW','Citroën','Dacia','Fiat','Hyundai','Jeep','Kia','Mercedes','Peugeot','Range Rover','Renault','VW',  ],
    allTypes: [ 'Diesel','Essence','Hybride',  ]
  }),
}
</script>

<style lang="stylus" scoped>

.xcol
  background-color orange
.vcol
  background-color green
.formColor
  background-color #F5F5F5
</style>