<template>
    <v-row class="d-flex justify-center ma-3">
      <v-card width="500">
        <v-card-title primary-title>
          Tambah Data Content
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
              label="Name"
              dense
              hint="Nama untuk menampilkan judul konten"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form.desc"
              label="Description"
              dense
              hint="Deskripsi dari konten"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >
            <v-text-field
            v-model="form.link"
              label="Link"
              dense
              hint="Link yang akan di kaitkan"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-combobox
              v-model="form.category"
              :items="notheader"
              :item-text="notheader=>notheader.name"
              :item-value="notheader=>notheader.id"
              label="Pilih Category..."
              hint="Kelompokankonten category"
              dense
              small-chips
              outlined
              multiple
            >
            </v-combobox>
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
    computed:{
      category(){
        return this.$store.state.category.category;
      },
      notheader(){
        return this.$store.state.category.notheader;
      },
      form(){
        return this.$store.state.content.form;
      },
      errors(){
        return this.$store.state.content.errors;
      },
    },
    methods:{
      getCategoryNotHeader(){
        this.$store.dispatch('getCategoryNotHeader')
      },
      getContent(){
        this.$store.dispatch('getContent')
      },
      async save(form){
        await this.$store.dispatch('createContent',form)
        await this.getContent()
        this.loading=false
      },
    },
    mounted() {
      this.getCategoryNotHeader()
    },

  }
</script>