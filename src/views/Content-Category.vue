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
              Category {{$route.params.id}}
            </h3>
        </v-row>
      </v-paralax>
  </v-container>
  <Content/>
</app>
</template>

<script>
import Content from '../components/Content.vue'

export default {
  components:{
  Content
  },
  data () {
  return{
    }
  },
  methods:{
    getContentCategory(){
      this.$store.dispatch('getContentCategory',this.$route.params.id)
    },
  },
  computed:{
    content(){
      return this.$store.state.content.content;
    },
  },
  mounted(){
      this.getContentCategory();
  },
}
</script>
