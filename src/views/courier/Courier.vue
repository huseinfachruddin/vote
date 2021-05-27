<template>
  <div class="courier">
    <Sidebar/>
    <Search/>
  </div>
</template>

<script>
import Search from '../../components/Search.vue';
import Sidebar from '../../components/Sidebar.vue';

export default {
  components: { Sidebar, Search },
  data(){
    return{
    }
  },
  computed:{
    user() {
        return this.$store.state.auth.user;
      }
  },
}
</script>