<template>
  <div class="edit">
  <Sidebar/>
  <v-container>
    <v-row class="d-flex justify-center ma-5">
      <v-card class="col-md-12 pa-3">
        <v-card-title primary-title>
          Pengiriman Baru
        </v-card-title>
        <h4 class="yellow ma-1">Pengirim</h4>
        <v-row>
          <v-col
          cols="12"
          sm="6"
          md="6"
          >
            <v-text-field
              label="Nama"
              outlined
              dense
              hide-details="auto"
              v-model="form.sender"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.sender" :key="error">{{error}}</small>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="6"
          >
            <v-text-field
              label="Phone"
              outlined
              dense
              hide-details="auto"
              v-model="form.sender_phone"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.sender_phone" :key="error">{{error}}</small>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="6"
          >
            <v-text-field
              label="Email"
              outlined
              dense
              hide-details="auto"
              v-model="form.sender_email"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.sender_email" :key="error">{{error}}</small>
          </v-col>
          <v-col
          cols="12"
          sm="12"
          md="12"
          >
            <v-text-field
              label="Alamat Pengirim"
              outlined
              dense
              hide-details="auto"
              v-model="form.sender_address"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.sender_address" :key="error">{{error}}</small>
          </v-col>
        </v-row>
      <h4 class="yellow ma-1">Penerima</h4>
        <v-row>
          <v-col
          cols="12"
          sm="6"
          md="6"
          >
            <v-text-field
              label="Nama"
              outlined
              dense
              hide-details="auto"
              v-model="form.receiver"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.receiver" :key="error">{{error}}</small>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="6"
          >
            <v-text-field
              label="Phone"
              outlined
              dense
              hide-details="auto"
              v-model="form.receiver_phone"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.receiver_phone" :key="error">{{error}}</small>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="6"
          >
            <v-text-field
              label="Email"
              outlined
              dense
              hide-details="auto"
              v-model="form.receiver_email"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.receiver_email" :key="error">{{error}}</small>
          </v-col>
          <v-col
          cols="12"
          sm="12"
          md="12"
          >
            <v-text-field
              label="Alamat Pengirim"
              outlined
              dense
              hide-details="auto"
              v-model="form.receiver_address"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.receiver_address" :key="error">{{error}}</small>
          </v-col>
        </v-row>
        <h4 class="yellow ma-1">Data Barang</h4>
        <v-row>
          <v-col
          cols="12"
          sm="6"
          md="6"
          >
            <v-text-field
              label="Berat (gram)"
              outlined
              dense
              hide-details="auto"
              v-model="form.weight"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.weight" :key="error">{{error}}</small>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="6"
          >
            <v-text-field
              label="Volume (m3)"
              outlined
              dense
              hide-details="auto"
              v-model="form.volume"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.volume" :key="error">{{error}}</small>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="6"
          >
            <v-text-field
              label="Harga (Rp)"
              outlined
              dense
              hide-details="auto"
              v-model="form.price"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.price" :key="error">{{error}}</small>
          </v-col>
          <v-col
          cols="12"
          sm="12"
          md="12"
          >
            <v-text-field
              label="Deskripsi"
              outlined
              dense
              hide-details="auto"
              v-model="form.description"
            ></v-text-field>
            <small class="red--text" v-for="error in errors.description" :key="error">{{error}}</small>
          </v-col>
        </v-row>
        <v-row     
        align="center"
        justify="space-around"
        class="pa-3"
        >
          <v-btn
            tile
            color="success"
            small
            @click="create(form)"
          >
            <v-icon left>
              mdi-check
            </v-icon>
            simpan
          </v-btn>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import Sidebar from '../../components/Sidebar'

export default {
  components:{
    Sidebar
  },
 computed:{
      receipt(){
        return this.$store.state.receipt.receipt
      },
      form(){
        return this.$store.state.receipt.form
      },
      errors(){
        return this.$store.state.receipt.errors
      },
      success(){
        return this.$store.state.receipt.success
      },
    },
    mounted(){
      this.$store.dispatch('refresh')
    },
    methods:{
      create(form){
        return this.$store.dispatch('create',form)
      }

    }

}
</script>