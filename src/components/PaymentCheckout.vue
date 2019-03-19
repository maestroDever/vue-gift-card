<template>
  <v-card id="paymentCheckout">
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <v-btn
            outline
            :ripple="false"
            class="font-weight-bold text-capitalize title"
            color="blue darken-1"
            style="width: 100%; height: 60px;"
          >
            Gift Card &euro;{{ quantity.quantityAmount ? quantity.quantityAmount : '' }}
          </v-btn>
        </v-flex>
        <v-flex xs12 class="textBox pl-3 pr-0 pt-0 pb-0 ml-3 mt-3">
          <div class="textBox-left">
            <strong>Account</strong>
            <span>{{ billingData.firstName + ' ' + billingData.lastName }}</span>
            <span>{{ billingData.email }}</span>
          </div>
          <div class="textBox-right">
            <v-btn flat color="blue darken-1" class="text-capitalize" @click.native="editPage(2)">
              Edit
              <v-icon class="body-2">arrow_forward</v-icon>
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs12 class="textBox pl-3 pr-0 pt-0 pb-0 ml-3 mt-3">
          <div class="textBox-left">
            <strong>Billing & Shipping</strong>
            <span>{{ billingData.firstName + ' ' + billingData.lastName }}</span>
            <span>{{ billingData.address }}</span>
            <span>{{ billingData.city }}</span>
          </div>
          <div class="textBox-right">
            <v-btn flat color="blue darken-1" class="text-capitalize" @click="editPage(2)">
              Edit
              <v-icon class="body-2">arrow_forward</v-icon>
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs12 class="textBox pl-3 pr-0 pt-0 pb-0 ml-3 mt-3">
          <div class="textBox-left">
            <strong>Payment</strong>
            <span>{{ paymentMethod }}</span>
          </div>
          <div class="textBox-right">
            <v-btn flat color="blue darken-1" class="text-capitalize" @click="editPage(3)">
              Edit
              <v-icon class="body-2">arrow_forward</v-icon>
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs12 style="display: flex; flex-direction: column; align-items: center;" class="mt-4">
          <v-btn
            dark
            :ripple="false"
            color="blue darken-1"
            style="width: 50%;"
            class="mb-2"
            @click="continueNext"
          >
            Pay &euro;{{ quantity.quantityAmount ? quantity.quantityAmount : '' }}
          </v-btn>
          <p style="color: rgba(0, 0, 0, 0.54); display: flex; align-items: center;">
            <v-icon class="body-2">security</v-icon>&nbsp;
            Secure Checkout by Chargebee
          </p>
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
  },
  methods: {
    editPage (pageNum) {
      this.$emit('edit', pageNum)
    },
    continueNext () {
      const vm = this
      vm.$emit('continue')
    }
  }
}
</script>

<style lang="scss" scoped>
.textBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-left: 3px solid rgba($color: #000000, $alpha: 0.2);
  .textBox-left {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
}
</style>
