<template>
  <v-card
    id="paymentSelect"
    lazy-validation
  >
    <v-form ref="paymentSelectForm">
      <v-container class="pa-1">
        <v-layout wrap>
          <v-flex xs12 md12>
            <p class="text-xs-left pl-4 title pt-5"><strong color="black">ZAHLART</strong></p>
            <v-divider></v-divider>
            <v-radio-group v-model="method" column method :rules="[v => !!v || '']" required>
              <v-expansion-panel focusable popout>
                <v-expansion-panel-content
                  v-for="(item, ind) in methods"
                  expand-icon="move"
                  :key="ind"
                >
                  <template v-slot:actions>
                    <img height="25px" style="flex: 0 auto" :src="item.img">
                  </template>
                  <template v-slot:header>
                    <v-radio
                      color="blue darken-1"
                      :value="item.value"
                    >
                      <template v-slot:label><strong color="black">{{item.label}}</strong>&nbsp;(kostenios)</template>
                    </v-radio>
                  </template>
                  <v-card>
                    <v-card-text class="grey lighten-3">{{ item.description }}</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-radio-group>
          </v-flex>
          <v-flex xs12 class="mb-5 pb-5">
            <v-btn
              submit
              dark
              color="green darken-1"
              large
              @click="continueNext"
              class="px-5"
            >
              Nächster Schritt
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>

    </v-form>
  </v-card>
</template>

<script>
import { SET_PAYMENT_METHOD } from '@/store/modules/billing-data/billingData-types'
import { mapActions } from 'vuex'

export default {
  data: () => ({
    method: null,
    paymentSelectForm: false,
    methods: [
      {
        label: 'Rechnung',
        value: 'account',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor and vitality, so that the labor and sorrow, some important things to do eiusmod. Over the years, I will come, who will nostrud aliquip out of her the advantage of exercise, so that stimulus efforts if the school district and longevity.',
        img: ''
      },
      {
        label: 'SEPA-Lastschrift',
        value: 'sepa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor and vitality, so that the labor and sorrow, some important things to do eiusmod. Over the years, I will come, who will nostrud aliquip out of her the advantage of exercise, so that stimulus efforts if the school district and longevity.',
        img: 'https://www.e-commerce-report.ch/userobjects/112_0_6204_LogoSEPA_neu_AT.png'
      },
      {
        label: 'Krditkarte',
        value: 'creditCard',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor and vitality, so that the labor and sorrow, some important things to do eiusmod. Over the years, I will come, who will nostrud aliquip out of her the advantage of exercise, so that stimulus efforts if the school district and longevity.',
        img: 'http://www.credit-card-logos.com/images/multiple_credit-card-logos-1/credit_card_logos_11.gif'
      },
      {
        label: 'PayPal',
        value: 'paypal',
        description: 'Die Weiterleitung zu PayPal erfolgt am Ende des Bestellvorgangs zur Zahlungsabwicklung. Die Bestellung ist danach erfolgreich abgeschlossen.',
        img: 'https://cdn-images-1.medium.com/max/800/1*tk56TNWKofHhzlB1igAZbQ.png'
      },
      {
        label: 'EPS Online-überweisung',
        value: 'eps',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor and vitality, so that the labor and sorrow, some important things to do eiusmod. Over the years, I will come, who will nostrud aliquip out of her the advantage of exercise, so that stimulus efforts if the school district and longevity.',
        img: 'https://eservice.stuzza.at/images/IMG/eservice_logos/eps-Logo-RGB.png'
      }
    ]
  }),
  methods: {
    ...mapActions('BillingData', {
      setPaymentMethod: SET_PAYMENT_METHOD
    }),
    continueNext () {
      const vm = this
      if (this.$refs.paymentSelectForm.validate()) {
        vm.setPaymentMethod(this.method)
        vm.$emit('continue')
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';
.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child) {
  padding: 12px 0;
}
</style>
