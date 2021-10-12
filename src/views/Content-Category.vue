<template>
<app>
  <v-container>
      <v-paralax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row
          align="center"
          justify="center"
        >
            <h3 class="text-h5 white--text mb-4">
              Category {{$route.params.name}}
            </h3>
        </v-row>
      </v-paralax>
  </v-container>
  <Content/>
</app>
</template>

<script>
import Content from '../components/Content-Category.vue'

export default {
  components:{
  Content
  },
  data () {
  return{
    }
  },
  methods:{
    getContentCategory(data){
      this.$store.dispatch('getContentCategory',{id:data})
    },
  },
  computed:{
    content(){
      return this.$store.state.content.content;
    },
  },
  mounted(){
  },
  watch: { 
      '$route.params.id': {
          handler: function() {
            this.getContentCategory(this.$route.params.id);
          },
          deep: true,
          immediate: true
        }
  }
}
</script>
