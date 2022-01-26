<template>
  <v-container>
    <v-card flat>
      <v-card-title class="text-center">
      <h5 >Daftar</h5>
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
        <v-text-field
          v-model="form.nickname"
          filled
          outlined
          label="Nickname"
          dense
        ></v-text-field>
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
          @click="register(form)"
          depressed
          small
          >
            Daftar
          </v-btn>
      </v-card-actions>
      <p class="text-center">sudah punya akun? <router-link to="/login">masuk</router-link></p>
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
import axios from 'axios'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import router from '../../router'

export default {
  components:{
  VuePhoneNumberInput
  },
  data(){
    return{
      phone:{},
      form:{},
      errors:{},
      data:{}
    }
  },
  methods:{
    cek(data){
      this.phone=data
      },
      async register(form){
          form.phone_number=this.phone.countryCallingCode+this.phone.phoneNumber
        try {
          let response = await axios.post('/auth/register',form)
          if (response.status==200) {
            form.phone_number=this.phone.phoneNumber
            router.push('/verification')
          }
        } catch (error) {
          this.errors = error.response.data
          form.phone_number=this.phone.phoneNumber
        }
      }
    }
}
</script>
