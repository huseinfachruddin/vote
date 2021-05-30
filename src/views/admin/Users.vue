<template>
  <div class="admin">
  <!-- <Navbar/> -->
  <Sidebar/>

  <Table/>

  </div>
</template>

<script>
import Table from '../../components/TableUser.vue';
import Sidebar from '../../components/Sidebar.vue';

export default {
  components: { 
    Sidebar,
    Table,
  },
  data(){
    return{
    }
  },
  computed:{
    user() {
        return this.$store.state.auth.profile;
      }
  },
    mounted(){      
     return this.$store.dispatch('profile');   
      },
    methods:{
      getProfile(){
        return this.$store.dispatch('profile');
      }
    }
}
</script>