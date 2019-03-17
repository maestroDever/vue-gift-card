<template>
  <v-card
    id="quantity"
    lazy-validation
  >
    <v-form ref="billingDataForm" v-model="billingDataForm">
      <v-container class="pb-5 pt-5">
        <v-layout wrap>
          <v-flex xs12 md6 class="pa-1">
            <v-text-field
              outline
              single-line
              v-model="firstName"
              :counter="15"
              :rules="nameRules"
              class="firstName"
              placeholder="First Name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6 class="pa-1">
            <v-text-field
              outline
              single-line
              v-model="lastName"
              :counter="15"
              :rules="nameRules"
              class="lastName"
              placeholder="Last Name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md12 class="pa-1">
            <v-text-field
              outline
              single-line
              v-model="company"
              class="company"
              placeholder="Company (Optional)"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md12 class="pa-1">
            <v-text-field
              outline
              single-line
              v-model="address"
              :rules="addressRules"
              class="address"
              placeholder="Address"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md12 class="pa-1">
            <v-text-field
              outline
              single-line
              v-model="email"
              :rules="emailRules"
              class="email"
              placeholder="E-Mail"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md6 class="pa-1">
            <v-text-field
              outline
              single-line
              v-model="city"
              :rules="addressRules"
              class="city"
              placeholder="City"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6 class="pa-1">
            <v-text-field
              outline
              single-line
              v-model="zip"
              :rules="addressRules"
              class="zip"
              placeholder="ZIP"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md12 class="pa-1">
            <v-btn
              submit
              dark
              color="blue darken-1"
              @click="continueNext"
              class="px-5"
            >
              Next
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>

    </v-form>
  </v-card>
</template>

<script>
import { SET_BILLING_DATA } from '@/store/modules/billing-data/billingData-types'
import { mapActions } from 'vuex'

export default {
  data: () => ({
    billingDataForm: false,
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    email: '',
    city: '',
    zip: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    addressRules: [
      v => !!v || 'Required Field.'
    ],
    nameRules: [
      v => !!v || 'Required Field.',
      v => (v && v.length <= 15) || 'Name must be less than 10 characters'
    ]
  }),
  methods: {
    ...mapActions('BillingData', {
      setBillingData: SET_BILLING_DATA
    }),
    continueNext () {
      const vm = this
      if (this.$refs.billingDataForm.validate()) {
        const second = {}
        second.firstName = vm.firstName
        second.lastName = vm.lastName
        second.company = vm.company
        second.address = vm.address
        second.email = vm.email
        second.zip = vm.zip
        second.city = vm.city
        vm.setBillingData(second)
        vm.$emit('continue')
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';

</style>
