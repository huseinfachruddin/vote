<template>
<app>
  <v-container >
    <v-row class="d-flex justify-center ma-3">
    <v-card width="500">
      <v-card-title primary-title>
        Tambah Data Content
      </v-card-title>
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
            label="Desc"
            dense
            hint="Desc Sebagai pencarian"
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
        <v-col
          cols="12"
          sm="12"
        >
          <v-btn
          width="100%"
          color="success"
          @click="save(form)"
          >
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    </v-row>
  <v-row class="d-flex justify-center ma-5">
        <v-col cols="12" >
          
          <v-card class="pa-4">
          <v-text-field
            v-model="form.search"
            append-icon="mdi-magnify"
            label="Search"
            solo
            hide-details
            @keyup="search(form)"
          >
          </v-text-field>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
    <v-container>
        <v-row class="d-flex justify-center ma-5">
            <v-flex v-for="(content,i) in content" :key="i">
              <v-col cols="12">
                <v-card
                  color="#137abfa3"
                  dark
                  class="d-flex justify-center"
                >
                <a :href="content.link">
                <v-btn
                  class="ma-2"
                  outlined
                  color="yellow"
                  small
                >
                {{content.name}}
                </v-btn>
                </a>
                <v-btn
                  class="ma-2"
                  color="red"
                  small
                  @click="destroy(content)"
                >
                X
                </v-btn>
                </v-card>
              </v-col>
            </v-flex>

        </v-row>
    </v-container>
</app>
</template>

<script>


export default {
  components:{
  },
  computed:{
      content(){
        return this.$store.state.content.content;
      },
      form(){
        return this.$store.state.content.form;
      },
    },
  methods:{
      getContent(){
        return this.$store.dispatch('getContent')
      },
      search(form){
        return this.$store.dispatch('getSearchContent',form)
      },
      async save(form){
        await this.$store.dispatch('createContent',form)
        return this.getContent();
      },
      async destroy(data){
        await this.$store.dispatch('deleteContent',data)
        return this.getContent();
      },
    },
    mounted(){
      this.getContent();
    }
}
</script>
