<template>
<app>
  <v-container >
    <v-row>
      <v-col>
            <v-btn
            width="100%"
            color="success"
            v-if="!formcontent"
            @click="formcontent=true , formcategory=false"
            >
              Tambah Content
            </v-btn>
            <v-btn
            width="100%"
            color="red"
            v-if="formcontent"
            dark
            @click="formcontent=false"
            >
             X-close
            </v-btn>
      </v-col>
      <v-col>
            <v-btn
            width="100%"
            color="success"
            v-if="!formcategory"
            @click="formcategory=true,formcontent=false "
            >
              Tambah Category
            </v-btn>
            <v-btn
            width="100%"
            color="red"
            v-if="formcategory"
            dark
            @click="formcategory=false"
            >
             X-close
            </v-btn>
      </v-col>
    </v-row>
  <FormContent v-if="formcontent"/>
  <FormCategory v-if="formcategory"/>

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
                    open
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
import FormContent from '../components/Form-Content.vue'
import FormCategory from '../components/Form-Category.vue'

export default {
  components:{
      FormContent,
      FormCategory
    },
  data() {
      return {
        loadng:false,
        formcontent:false,
        formcategory:false
        }
    },
  computed:{
      content(){
        return this.$store.state.content.content;
      },
      category(){
        return this.$store.state.category.category;
      },
      form(){
        return this.$store.state.content.form;
      },
      errors(){
        return this.$store.state.content.errors;
      },
    },
  methods:{
      getCategory(){
        return this.$store.dispatch('getCategory')
      },
      getContent(){
        return this.$store.dispatch('getContent',this.content.current_page)
      },
      search(form){
        return this.$store.dispatch('getSearchContent',form)
      },
      async destroy(data){
        await this.$store.dispatch('deleteContent',data)
        return this.getContent();
      },
    },
    mounted(){
      this.getContent();
      this.getCategory();
    }
}
</script>
