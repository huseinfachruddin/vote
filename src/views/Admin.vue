<template>
<app>
  <v-container >
    <v-row>
      <v-col>
            <v-btn
            width="100%"
            color="success"
            v-if="!created"
            @click="created=true"
            >
              Tambah Data
            </v-btn>
            <v-btn
            width="100%"
            color="red"
            v-if="created"
            dark
            @click="created=false"
            >
             X-close
            </v-btn>
      </v-col>
            <v-col>
            <v-btn
            width="100%"
            color="success"
            @click="created=true"
            >
              Tambah Data
            </v-btn>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center ma-3" v-if="created">
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
          <v-col
            cols="12"
            sm="12"
          >
            <v-btn
            width="100%"
            v-if="!loading"
            color="success"
            @click="save(form)"
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
    <v-row class="d-flex justify-center ma-3" v-if="!created">
      <v-card width="500">
        <v-card-title primary-title>
          Tambah Data Menu
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
              hint="Nama untuk menu baru"
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
            v-if="!loading"
            color="success"
            @click="save(form)"
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
  <v-row class="d-flex justify-center ma-5">
        <v-col cols="12" >
          
          <v-card class="pa-4">
          <v-text-field
            v-model="form.search"
            append-icon="mdi-magnify"
            label="Search Content..."
            solo
            hide-details
            @keyup="search(form)"
            @keyup.enter="search(form)"
          >
          </v-text-field>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
    <v-container>
        <v-row class="d-flex justify-center ma-5">
            <v-flex v-for="(content,i) in content.data" :key="i">
              <v-col cols="12">
                <v-card
                  color="#137abfa3"
                  dark
                  min-width="200"
                >
                  <v-card-title class="text-h5">
                    {{content.name}}
                  </v-card-title>

                  <v-card-subtitle>{{content.desc}}</v-card-subtitle>

                  <v-card-actions>
                    <v-spacer/>
                  <a :href="content.link">
                    <v-btn
                      class="ma-2"
                      outlined
                      color="yellow"
                      small
                    >
                    read
                    </v-btn>
                  </a>
                    <v-btn
                      class="ma-2"
                      color="red"
                      small
                      @click="destroy(content)"
                    >
                    delete
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-flex>

        </v-row>
          <v-row>
            <v-col cols="12">
            <div class="text-center">
              <v-pagination
                v-model="content.current_page"
                :length="content.last_page"
                @input="getContent()"
              ></v-pagination>
            </div>
            </v-col>
          </v-row>
    </v-container>
</app>
</template>

<script>

// import Content from '../components/Content.vue'
export default {
  // components:{
  //     Content
  //   },
  data() {
      return {
        loadng:false,
        created:false
        }
    },
  computed:{
      content(){
        return this.$store.state.content.content;
      },
      form(){
        return this.$store.state.content.form;
      },
      errors(){
        return this.$store.state.content.errors;
      },
    },
  methods:{
      getContent(){
        return this.$store.dispatch('getContent',this.content.current_page)
      },
      search(form){
        return this.$store.dispatch('getSearchContent',form)
      },
      async save(form){
        this.loading=true
        await this.$store.dispatch('createContent',form)
        this.loading=false
        this.created=false
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
