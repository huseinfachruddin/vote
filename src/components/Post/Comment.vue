<template>
  <v-card
  flat
  >
    <v-card-title>
      <span class="text-h6 font-weight-bold">Komentar</span>
    </v-card-title>
      <CommentNasted class="mb-1" v-for="data in 5" :key="data"/>
        <v-card-actions>
      <v-list-item class="grow">

      </v-list-item>
    </v-card-actions>
  </v-card>
</template>
<style >

</style>


<script>
import CommentNasted from '../Post/CommentNasted.vue'
  export default {
    components:{
      CommentNasted
    }

  }
</script>