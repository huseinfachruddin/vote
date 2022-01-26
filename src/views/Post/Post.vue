<template>
  <v-container>
    <v-container>
      <Post v-for="data in 10" :key="data" class="mb-1"/>
    </v-container>
  </v-container>
</template>

<script>
import Post from '../../components/Post/Post.vue'

export default {
  components:{
    Post,
  }
}
</script>
