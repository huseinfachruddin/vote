<template>
  <v-container>
    <v-container>
      <Sheet/>
    </v-container>
    <v-container>
      <router-link style="text-decoration:none" v-for="data in 5" :key="data" :to="'/post/'+data"><Post class="mb-3"/></router-link>
    </v-container>
  </v-container>
</template>

<script>
import Sheet from '../components/Sheet.vue'
import Post from '../components/Post/Post.vue'

export default {
  components:{
    Sheet,
    Post
  },
  mounted(){
    
  }
}
</script>
