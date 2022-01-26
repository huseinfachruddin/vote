<template>
  <v-container>
    <v-card flat>
      <v-card-title class="text-center">
      <h5 >Verifikasi</h5>
      </v-card-title>
      <v-card-text>
    <v-alert
      shaped
      outlined
      type="info"
      dense
    >
      Silahkan Masukan Kode OTP 
    </v-alert>
    <v-alert
      shaped
      outlined
      type="error"
      v-for="error,index in errors" :key="index"
      dense
    >
      {{error.message}}
    </v-alert>
      <v-otp-input
        v-model="form.code"
        length="4"
        type="number"
      ></v-otp-input>
      </v-card-text>
      <v-card-actions class="justify-center">
          <v-btn 
          block 
          color="info"
          @click="verification(form)"
          depressed
          small
          >
            Verifikasi
          </v-btn>
      </v-card-actions>
      <p class="text-center">ganti nomor? <router-link to="/login">kembali</router-link></p>
  <v-divider></v-divider>
  </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
import router from '../../router'

export default {
  components:{
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
      async verification(form){
        try {
          let response = await axios.post('auth/login/verify',form)
          if (response.status==200) {

            localStorage.setItem('token',response.data.token)
            router.push('/')
          }
        } catch (error) {
          this.errors = error.response.data
        }
      }
    }
}
</script>
