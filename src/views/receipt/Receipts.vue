<template>
  <div class="admin">
  <!-- <Navbar/> -->
  <Sidebar/>
  <table-receipt/>


  </div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue';
import TableReceipt from '../../components/TableReceipt.vue';

export default {
  components: { 
  Sidebar,
    TableReceipt,
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
      getStaus(){
        return this.$store.dispatch('profile');
      }
    },

}
</script>