<template>
<div class="content">
      <v-row class="d-flex justify-center ma-5">
        <v-col cols="12">
          
          <v-card class="pa-4" color="#FFD600">
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
        <v-row class="d-flex justify-center ma-5">
            <v-flex v-for="(content,i) in content.data" :key="i">
              <v-col cols="12">
                <a :href="content.link">
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
                    <v-btn
                      class="ma-2"
                      outlined
                      color="yellow"
                      small
                    >
                    open
                    </v-btn>
                  </v-card-actions>
                </v-card>
                </a>
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
</div>
</template>


<script>
  export default {
    data () {
      return {
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
    },
    mounted(){
      this.getContent();
    }
  }
</script>