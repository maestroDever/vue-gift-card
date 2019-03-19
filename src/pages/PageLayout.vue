<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="cyan" dark fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title>Demo Application</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex text-xs-center xs4 class="pa-5">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                class="mx-auto"
                color="grey lighten-4"
              >
                <v-img
                  :aspect-ratio="16/9"
                  src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out orange darken-2 headline v-card--reveal white--text"
                      style="height: 100%;"
                    >
                      Click below button to book.
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text
                  class="pt-4"
                  style="position: relative;"
                >
                  <v-btn
                    color="orange"
                    class="white--text"
                    large
                    outline
                    @click.stop="dialogGift=true"
                  >
                    tisch reservieren
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex text-xs-center xs4 class="pa-5">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                class="mx-auto"
                color="grey lighten-4"
              >
                <v-img
                  :aspect-ratio="16/9"
                  src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal headline white--text"
                      style="height: 100%;"
                    >
                      Click below button to book.
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text
                  class="pt-4"
                  style="position: relative;"
                >
                  <v-btn
                    color="orange"
                    class="white--text"
                    large
                    outline
                    @click.stop="dialogGift=true"
                  >
                    tisch reservieren
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex text-xs-center xs4 class="pa-5">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                class="mx-auto"
                color="grey lighten-4"
              >
                <v-img
                  :aspect-ratio="16/9"
                  src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal headline white--text"
                      style="height: 100%;"
                    >
                      Click below button to book.
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text
                  class="pt-4"
                  style="position: relative;"
                >
                  <v-btn
                    color="orange"
                    class="white--text"
                    large
                    outline
                    @click.stop="dialogGift=true"
                  >
                    tisch reservieren
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="cyan" app>
      <v-spacer></v-spacer>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
    <v-dialog
      v-model="dialogGift"
      style="max-height:100% !important; margin: 0;"
      max-width="450"
    >
      <GiftCard />
    </v-dialog>
  </v-app>
</template>

<script>
import GiftCard from './GiftCard'

export default {
  data: () => ({
    drawer: false,
    dialogGift: false
  }),
  props: {
    source: String
  },
  components: {
    GiftCard
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.v-dialog {
  max-height: 100%;
  margin: 0;
}
</style>
