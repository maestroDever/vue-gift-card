<template>
  <v-card id="paymentCheckout">
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <v-btn flat outline :ripple="false" color="blue darken-1">
            Gift Card &euro;{{ quantity.quantityAmount ? quantity.quantityAmount : '' }}
          </v-btn>
        </v-flex>
        <v-flex xs12>
          <strong>Billing & Shipping</strong>
          {{ billingData }}
        </v-flex>
        <v-flex xs12>
          <strong>Payment Method</strong>
          {{ paymentMethod }}
        </v-flex>
        <v-flex xs12>
          <v-btn dark :ripple="false" color="blue darken-1">
            Pay &euro;{{ quantity.quantityAmount ? quantity.quantityAmount : '' }}
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import PayPal from '@/components/paymentMethods/Paypal.vue'
import Stripe from '@/components/paymentMethods/Stripe.vue'
import { mapState } from 'vuex'
export default {
  components: {
    PayPal,
    Stripe
  },
  computed: {
    ...mapState({
      quantity: state => state.Quantity.quantity,
      billingData: state => state.BillingData.billingData,
      paymentMethod: state => state.BillingData.paymentMethod
    })
  }
}
</script>

<style>

</style>
