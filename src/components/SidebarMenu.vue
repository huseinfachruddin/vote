<template>
  <v-list
        nav
        dense
      >
        <v-list-item-group

          active-class="deep-purple--text text--accent-4"
        >
        <!-- admin menu -->
            <router-link to="/admin" style=" text-decoration: none">
              <v-list-item v-if="admin">
                <v-icon>mdi-view-dashboard</v-icon>
                <v-list-item-title> Dashboard</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/admin/users" style=" text-decoration: none">
              <v-list-item v-if="admin">
                <v-icon>mdi-account</v-icon>
                <v-list-item-title> User</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/receipt" style=" text-decoration: none">
              <v-list-item v-if="admin">
                <v-icon>mdi-truck-fast</v-icon>
                <v-list-item-title> Pengiriman</v-list-item-title>
              </v-list-item>
            </router-link>
          <!-- courier menu -->
          <router-link to="/courier" style=" text-decoration: none">
            <v-list-item v-if="courier">
               <v-icon>mdi-view-dashboard</v-icon>
                <v-list-item-title> Dashboard</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/receipt" style=" text-decoration: none">
            <v-list-item v-if="courier">
              <v-icon>mdi-truck-fast</v-icon>
                <v-list-item-title> Pengiriman</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>

      </v-list>
</template>

<script>
export default {

  data(){
    return{
      admin:false,
      courier:false,
    }
  },
  computed:{
    profile() {
        let data=this.$store.state.auth.profile;

        return data
      }
  },
    mounted(){      
     this.getProfile()
      },
    methods:{
      getProfile(){
        if (this.profile.user.role.name=='admin') {
          this.admin=true
        }else if (this.profile.user.role.name=='courier') {
          this.courier=true
        }
        return this.$store.dispatch('profile');
      }
    }
}
</script>