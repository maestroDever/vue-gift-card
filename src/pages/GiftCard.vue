<template>
  <v-card
    id="e3"
    class="green darken-1 hide-overflow"
  >
    <v-toolbar
      color="green darken-1"
      flat
      dark
    >
      <v-toolbar-title>
        <p class="text-xs-center headline font-weight-bold mb-0">
          {{ title }}
        </p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-container
        fluid
        class="pa-0"
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 class="pt-0">
            <v-stepper v-model="e1" :light="true">
              <v-stepper-header>
                <v-stepper-step
                  :complete="e1 > 1"
                  @click="title='Gift Card'"
                  step="1"
                  :editable="e1 > 1"
                  color="green darken-1"
                ></v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                  :complete="e1 > 2"
                  @click="e1 > 2 ? title='Billing Data' : title=title"
                  step="2"
                  :editable="e1 > 2"
                  color="green darken-1"
                ></v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                  :complete="e1 > 3"
                  @click="e1 > 3 ? title='Payment Method' : title=title"
                  step="3"
                  :editable="e1 > 3"
                  color="green darken-1"
                ></v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                  :complete="e1 > 4"
                  @click="e1 > 4 ? title='Payment Method' : title=title"
                  step="4"
                  :editable="e1 > 4"
                  color="green darken-1"
                ></v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                  step="5"
                  @click="e1 > 5 ? title='Payment Method' : title=title"
                  color="green darken-1"
                ></v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <Quantity @continue="continue1"/>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <BillingData @continue="continue2"/>
                </v-stepper-content>
                <v-stepper-content step="3" class="pa-0">
                  <PaymentSelect @continue="continue3"/>
                </v-stepper-content>
                <v-stepper-content step="4" class="pa-0">
                  <PaymentCheckout @continue="continue4" @edit="editContinue" />
                </v-stepper-content>
                <v-stepper-content step="5" class="pa-0">
                  <PaymentConfirm @continue="continue5"/>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-card>
</template>
<script>
import Quantity from '@/components/Quantity.vue'
import BillingData from '@/components/BillingData.vue'
import PaymentSelect from '@/components/PaymentSelect.vue'
import PaymentCheckout from '@/components/PaymentCheckout.vue'
import PaymentConfirm from '@/components/PaymentConfirm.vue'

export default {
  data () {
    return {
      e1: 0,
      title: 'Gift Card'
    }
  },
  components: {
    Quantity,
    BillingData,
    PaymentSelect,
    PaymentCheckout,
    PaymentConfirm
  },
  methods: {
    continue1 () {
      this.e1 = 2
      this.title = 'Billing Data'
    },
    continue2 () {
      this.e1 = 3
      this.title = 'Payment Method'
    },
    continue3 () {
      this.e1 = 4
      this.title = 'Payment Method'
    },
    continue4 () {
      this.el = 5
      this.title = 'Payment Method'
      console.log(this.el)
    },
    continue5 () {
      this.title = 'Payment Method'
    },
    editContinue (pageNum) {
      console.log('first', this.el)
      this.el = pageNum
      console.log('second', this.el)
      if (pageNum === 2) this.title = 'Billing Data'
      else this.title = 'Payment Method'
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/base.scss';

// #e3 {
//   margin: 100px auto;
//   width: 450px;
// }
</style>
