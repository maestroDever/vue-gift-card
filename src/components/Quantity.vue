<template>
  <v-card
    id="quantity"
    class="stepperCard"
    lazy-validation
  >
    <v-form ref="quantityForm" v-model="quantityForm">
      <v-container wrap class="pb-5">
        <v-layout>
          <v-flex xs6 md3>
            <v-btn fab :outline="!ten" :dark="ten" large color="blue darken-1" @click="selectQuantity('ten')">
              10 &euro;
            </v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn fab  :outline="!twenty" :dark="twenty" large color="blue darken-1" @click="selectQuantity('twenty')">
              20 &euro;
            </v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn fab  :outline="!fifty" :dark="fifty" large color="blue darken-1" @click="selectQuantity('fifty')">
              50 &euro;
            </v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn fab  :outline="!hundred" :dark="hundred" large color="blue darken-1" @click="selectQuantity('hundred')">
              100 &euro;
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <v-select
        outline
        single-line
        class="quantityAmount"
        color="blue darken-1"
        v-model="amount"
        :items="quantities"
        item-text="text"
        item-value="val"
        :rules="[v => !!v || 'Quantity has to be selected']"
        placeholder="Anzahl der Gutscheine"
        required
      ></v-select>
      <v-text-field
        outline
        single-line
        v-model="receipient"
        :counter="15"
        :rules="nameRules"
        class="receipient"
        placeholder="Empfänger Name"
      ></v-text-field>
      <v-textarea
        outline
        single-line
        v-model="message"
        placeholder="Ihre persönliche Nachricht..."
      ></v-textarea>
      <v-hover>
        <v-btn
          submit
          dark
          color="green darken-1"
          large
          @click="continueNext"
          class="px-5 mx-auto"
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 4 : 2}`"
        >
          Nächster Schritt
        </v-btn>
      </v-hover>
    </v-form>
  </v-card>
</template>

<script>
import { SET_QUANTITY } from '@/store/modules/quantity/quantity-types'
import { mapActions } from 'vuex'

export default {
  data: () => ({
    quantityForm: false,
    ten: false,
    twenty: false,
    fifty: false,
    hundred: false,
    quantity: 0,
    amount: null,
    quantities: [
      { val: 1, text: '1' },
      { val: 2, text: '2' },
      { val: 3, text: '3' },
      { val: 4, text: '4' },
      { val: 5, text: '5' }
    ],
    receipient: '',
    message: '',
    nameRules: [
      v => !!v || 'Required Field',
      v => (v && v.length <= 15) || 'Name must be less than 15 characters'
    ]
  }),
  methods: {
    ...mapActions('Quantity', {
      setQuantity: SET_QUANTITY
    }),
    continueNext () {
      const vm = this
      if (vm.$refs.quantityForm.validate()) {
        const first = {}
        first.quantityAmount = vm.quantity * vm.amount
        first.recipient = vm.receipient
        first.message = vm.message
        vm.setQuantity(first)
        vm.$emit('continue')
      }
    },
    clearQuantity () {
      const vm = this
      vm.ten = false
      vm.twenty = false
      vm.fifty = false
      vm.hundred = false
    },
    selectQuantity (amount) {
      const vm = this
      vm.clearQuantity()
      if (amount === 'ten') {
        vm.ten = true
        vm.quantity = 10
      }
      if (amount === 'twenty') {
        vm.twenty = true
        vm.quantity = 20
      }
      if (amount === 'fifty') {
        vm.fifty = true
        vm.quantity = 50
      }
      if (amount === 'hundred') {
        vm.hundred = true
        vm.quantity = 100
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';

#quantity {
  .v-input__slot {
    border-color: $primaryColor;
    border-width: 1px;
    textarea, input, label {
      color: $primaryColor;
    }
  }
}
</style>
