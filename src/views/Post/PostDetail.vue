<template>
  <v-container>
    <v-container>
      <PostDetail class="mb-1"/>
      <CommentCreate class="mb-1"/>
      <Comment class="mb-3"/>
    </v-container>
  </v-container>
</template>

<script>
import PostDetail from '../../components/Post/PostDetail.vue'
import Comment from '../../components/Post/Comment.vue'
import CommentCreate from '../../components/Post/CommentCreate.vue'

export default {
  components:{
    PostDetail,
    Comment,
    CommentCreate
  },

}
</script>
