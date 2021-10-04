<template>
    <v-row class="d-flex justify-center ma-3">
      <v-card width="500">
        <v-card-title primary-title orange>
          Tambah Data Category
        </v-card-title>
        <v-row>
          <v-col
            cols="12"
            sm="12"
          >
          <v-alert
            border="top"
            color="red lighten-2"
            dark
            v-for="([error],i) in errors" :key="i"
          >
            - {{error}}
          </v-alert>
          </v-col>
        </v-row>
        <v-row class="ma-3">
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form.name"
              label="Nama Category"
              dense
              hint="Nama untuk menampilkan judul category"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            class="d-flex"
            cols="12"
            sm="6"
          >
            <v-select
              v-model="form.parent"
              :items="header"
              :item-text="header=>header.name"
              :item-value="header=>header.id"
              label="Induk Category"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >
          <v-switch
            v-model="form.isheader"
            label="aktifkan header"
          ></v-switch>
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >
            <v-btn
            width="100%"
            v-if="!loading"
            color="success"
            @click="loading=true,save(form)"
            >
              Save
            </v-btn>
            <v-btn
            v-if="loading"
            width="100%"
            color="info"
            >
              Loading...
            </v-btn>
          </v-col>
              <v-card
                class="ma-2 pa-2 white--text"
                close
                color="cyan"
                label
                v-for="data in category" :key="data"
                text-color="white"
              >
                {{data.name}} 
            <v-btn
              color="red"
              fab
              x-small
              dark
              class="ma-1"
              @click="destroy(data)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
              </v-card>
        </v-row>
      </v-card>
    </v-row>
</template>


<script>
  export default {
    data () {
      return{
        loading:false,
      }
    },
    methods:{
      async getCategory(){
        await this.$store.dispatch('getCategory')
      },
      async getCategoryHeader(){
        await this.$store.dispatch('getCategoryHeader')
      },
      async save(form){
        await this.$store.dispatch('createCategory',form)
        await this.$store.dispatch('getCategoryTree')
        await this.$store.dispatch('getCategoryNotHeader')
        await this.getCategory()
        await this.getCategoryHeader()
        this.loading=false
      },
      async destroy(data){
        await this.$store.dispatch('deleteCategory',data)
        await this.$store.dispatch('getCategoryTree')
        await this.$store.dispatch('getCategoryNotHeader')
        await this.getCategory()
        await this.getCategoryHeader()
      },
    },
    mounted(){
      this.getCategory();
      this.getCategoryHeader()
    },
    computed:{
      category(){
        return this.$store.state.category.category;
      },
      header(){
        return this.$store.state.category.header;
      },
      form(){
        return this.$store.state.category.form;
      },
      errors(){
        return this.$store.state.category.errors;
      },
    },
  }
</script>