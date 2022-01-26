<template>
  <v-container>
    <v-card flat>
      <v-card-title class="text-center">
      <h5 >Masuk</h5>
      </v-card-title>
      <v-card-text>
    <v-alert
      v-for="error,index in errors" :key="index"
      shaped
      outlined
      type="error"
      dense
    >
      {{error.message}}
    </v-alert>
        <VuePhoneNumberInput
        @update="cek"
        :only-countries="['ID','MY','SG']" 
        default-country-code="ID"
        :no-example="true"
        size="lg"
        v-model="form.phone_number" class="mt-1"/>
      </v-card-text>
  <v-card-actions class="justify-center">
      <v-btn 
      block 
      color="info"
      depressed
      small
      @click="login(form)"
      >
        masuk
      </v-btn>
  </v-card-actions>
      <p class="text-center">belum punya akun? <router-link to="/register">daftar</router-link></p>
  <v-divider></v-divider>
    <v-card-actions class="justify-center">
      <v-btn 
      block 
      color="red"
      dark
      depressed
      small
      >
      <v-icon small left>
        mdi-google
      </v-icon>
        masuk dengan google
      </v-btn>
  </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import axios from 'axios'
import router from '../../router'

export default {
  components:{
    VuePhoneNumberInput
  },
  data(){
    return{
      form:{phone_number:null},
      phone:{},
      errors:{}
    }
  },
  methods:{
    cek(data){
      this.phone = data
    },
    async login(form){
      this.$store.commit('setLoading',true)
      form.phone_number = this.phone.countryCallingCode+this.phone.phoneNumber
      try {
      let response = await axios.post('/auth/login',form)      
        if (response.status == 200) {
          this.$store.commit('setLoading',false)
          router.push('/verification')
          form.phone_number=null
        }  
        this.$store.commit('setLoading',false)
      } catch (error) {
          this.errors = error.response.data
          form.phone_number=null
          this.$store.commit('setLoading',false)
      }
      this.$store.commit('setLoading',false)
    }
  }
}
</script>
