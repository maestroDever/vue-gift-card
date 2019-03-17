<template>
  <div id="app">
    <PayPal
      amount="10.00"
      currency="USD"
      :client="paypalCredentials"
      :items="myItems">
    </PayPal>
  </div>
</template>
<script>
import PayPal from 'vue-paypal-checkout'
export default {
  components: {
    PayPal
  },
  data () {
    return {
      paypalCredentials: {
        sandbox: 'AWi18rxt26-hrueMoPZ0tpGEOJnNT4QkiMQst9pYgaQNAfS1FLFxkxQuiaqRBj1vV5PmgHX_jA_c1ncL',
        production: 'AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl'
      },
      myItems: [
        {
          'name': 'hat',
          'description': 'Brown hat.',
          'quantity': '1',
          'price': '5',
          'currency': 'USD'
        },
        {
          'name': 'handbag',
          'description': 'Black handbag.',
          'quantity': '1',
          'price': '5',
          'currency': 'USD'
        }
      ]
    }
  }
}
</script>
