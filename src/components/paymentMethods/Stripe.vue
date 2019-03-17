<template>
  <v-card>
    <div ref="card"></div>
    <v-btn
      submit
      dark
      color="blue darken-1"
      @click="continueNext"
      class="px-5"
    >Next</v-btn>
  </v-card>
</template>

<script>
/* global Stripe:true */
const stripe = Stripe(`YOUR_STRIPE_PUBLISHABLE_KEY`)
const elements = stripe.elements()
let card = null
let stripeStyle = {
  base: {
    border: '1px solid #D8D8D8',
    borderRadius: '4px',
    color: '#000'
  },
  invalid: {
    // All of the error styles go inside of here.
  }
}

export default {
  data () {
    return {
      hasCardErrors: false
    }
  },
  mounted () {
    card = elements.create('card', stripeStyle)
    card.mount(this.$refs.card)
  },
  methods: {
    continueNext () {
      const vm = this
      stripe.createToken(card).then(function (result) {
        // Access the token with result.token
        if (result.error) {
          console.log('result error from stripe', result.error)
          vm.hasCardErrors = true
          vm.$forceUpdate()
        }
      })
    }
  }
}
</script>
