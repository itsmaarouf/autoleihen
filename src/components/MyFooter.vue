<template>
  <v-footer dark padless>
    <v-card class="flex footers" flat tile>
      <v-container>
        <v-row>
          <v-col cols="12"
                 lg="3"
                 md="6"
                 sm="12"
          >
            <h2 class="my-4 text-center">Mietwagen</h2>
            <p class="text-justify descrip">Car rental in Casablanca, Morocco offers quality cars at unbeatable prices
              in the most important cities of Morocco: Casablanca, Rabat, Marrakech, Tangier, Agadir, Fez, El Jadida,
              Meknes, Essaouira, Ouarzazate. We offer car rental offers in Morocco in casablanca that meet all your
              needs.</p>
          </v-col>
          <v-col cols="12"
                 lg="3"
                 md="6"
                 sm="12"
          >
            <h2 class="my-4">Contact</h2>
           <ul class="contact-info">
             <li>
               <v-icon
                   class="ml-n9 mr-3"
                 color="#FB8C00"
             >mdi-home-variant</v-icon>
               <span >Rue Oussama Ibn Zaid, 1er Étage N°40 Galerie Familia Maarif Casablanca</span></li>
             <li>
               <v-icon
                   class="ml-n9 mr-3"
                 color="#FB8C00"
             >mdi-phone</v-icon>
               <span ><a href="tel:+212610327005">+2126 10 32 70 05</a> <br>
                <a href="tel:+212675716369">+2126 75 71 63 69</a></span></li>
             <li>
               <v-icon
                   class="ml-n9 mr-3"
                 color="#FB8C00"
             >mdi-email-outline</v-icon>
               <span >contact@1servicecar.com</span></li>
             <li>
               <v-icon
                   class="ml-n9 mr-3"
                 color="#FB8C00"
             >mdi-web</v-icon>
               <span >www.mietwagen.com</span></li>
           </ul>
          </v-col>
          <v-col cols="12"
                 lg="3"
                 md="6"
                 sm="12"
          >
            <h3 class="my-4">Useful Links</h3>
            <ul class="contact-info">
              <li>
                <v-icon
                    class="ml-n9 mr-3"
                    color="#FB8C00"
                >mdi-chevron-right</v-icon>
                <router-link to="/about">About Us</router-link></li>
              <li>
                <v-icon
                    class="ml-n9 mr-3"
                    color="#FB8C00"
                >mdi-chevron-right</v-icon>
                <router-link to="/rental-conditions">Rental Terms</router-link></li>
              <li>
                <v-icon
                    class="ml-n9 mr-3"
                    color="#FB8C00"
                >mdi-chevron-right</v-icon>
                <router-link to="/frequently-asked-questions">Frequently Asked Questions</router-link></li>
              <li>
                <v-icon
                    class="ml-n9 mr-3"
                    color="#FB8C00"
                >mdi-chevron-right</v-icon>
                <router-link to="/contact">Contact Us</router-link></li>
              <li>
                <v-icon
                    class="ml-n9 mr-3"
                    color="#FB8C00"
                >mdi-chevron-right</v-icon>
                <router-link to="/partners">Our Partners</router-link></li>

            </ul>
          </v-col>
          <v-col cols="12"
                 lg="3"
                 md="6"
                 sm="12"
          >
            <h3 class="my-4">Our Agencies In Morocco</h3>
            <ul class="contact-info">
              <li>
                <v-icon
                    class="ml-n9 mr-3"
                    color="#FB8C00"
                >mdi-chevron-right</v-icon>
                <router-link to="/car-rental-agency-in-casablanca">Car Hire In Casablanca</router-link></li>
              <li>
                <v-icon
                    class="ml-n9 mr-3"
                    color="#FB8C00"
                >mdi-chevron-right</v-icon>
                <router-link to="/car-rental-agency-in-rabat">Car Hire In Rabat</router-link></li>
              <li>
                <v-icon
                    class="ml-n9 mr-3"
                    color="#FB8C00"
                >mdi-chevron-right</v-icon>
                <router-link to="/car-rental-agency-in-mohammedia">Car Hire In Mohammedia</router-link></li>
              <li>
                <v-icon
                    class="ml-n9 mr-3"
                    color="#FB8C00"
                >mdi-chevron-right</v-icon>
                <router-link to="/car-rental-agency-in-tanger">Car Hire In Tanger</router-link></li>
              <li>
                <v-icon
                    class="ml-n9 mr-3"
                    color="#FB8C00"
                >mdi-chevron-right</v-icon>
                <router-link to="/car-rental-agency-in-marrakech">Car Hire In Marrakech</router-link></li>

            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "MyFooter",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style lang="stylus" scoped>
.ftr
  background-color #868686 !important

.descrip
  color #c7c7c7
  font-size medium
a
  text-decoration none
  cursor pointer
  color #ffffff
.contact
  margin 0 2px
  padding 0 2px
.contact-info
  position relative
  margin-bottom 50px
  list-style none
  li
    position: relative
    line-height: 24px
    font-size: 14px
    padding-left: 30px
    margin-bottom: 12px
    a
      color: #e3e3e3

</style>
