<template>
<div class="skill">
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
    <v-container>
        <v-row class="d-flex justify-center ma-5">
            <v-flex v-for="(content,i) in content" :key="i">
              <v-col cols="12">
                <a :href="content.link">
                <v-card
                  color="#137abfa3"
                  dark
                  class="d-flex justify-center"
                >
                <v-btn
                  class="ma-2"
                  outlined
                  color="yellow"
                >
                {{content.name}}
                </v-btn>
                </v-card>
                </a>
              </v-col>
            </v-flex>

        </v-row>
    </v-container>
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
    },
    methods:{
      getContent(){
        return this.$store.dispatch('getContent')
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