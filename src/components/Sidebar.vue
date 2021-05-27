<template>
  <nav>
    <v-app-bar
      color="teal"
      dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{profile.user.role.name}}</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link style="text-decoration:none" to="/">
        <v-btn color="white" rounded small outlined fab class="ma-2 pa-1">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <BtnLogout/>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
<Sidebar-menu/>
    </v-navigation-drawer>


  </nav>
</template>

<script>
import BtnLogout from './BtnLogout.vue';
import SidebarMenu from './SidebarMenu.vue'
  export default {
  components: { SidebarMenu, BtnLogout },
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  computed:{
    profile() {
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