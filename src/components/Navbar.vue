<template>
<div>
  <v-bottom-navigation
      color="primary"
      fixed
      background-color="#cfebfc"
      shift
    >
      <v-btn :href="'/'">
        <span>beranda</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn :href="'/post'">
        <span>sedang hangat</span>

        <v-icon>mdi-fire</v-icon>
      </v-btn>
      <v-btn :href="'/create/post'">
        <span>laporan</span>

        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn @click.stop="drawer = !drawer">
        <span>menu</span>

        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-bottom-navigation>

      <v-navigation-drawer
      v-model="drawer"
      fixed
      bottom
      height="auto"
      
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-yellow--text text--accent-4"
        >
      <router-link to="/profile" style="text-decoration: none;">
      <v-list-item style="background-color:#cfebfc">
        <v-list-item-content >
          <v-list-item class="px-1">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item-title class="text-h6">
            Husein Fachruddin
          </v-list-item-title>
          <v-list-item-subtitle>
            husein.fac18@gmail.com
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      </router-link>
      <v-divider></v-divider>
      <router-link to="/profile" style="text-decoration: none;">
              <v-list-item>
                <v-icon>
                  mdi-account
                </v-icon>
                <v-list-item-title >profile</v-list-item-title>
              </v-list-item> 
      </router-link>
              <v-list-item>
                <v-icon>
                 mdi-wrench
                </v-icon>
                <v-list-item-title >setting</v-list-item-title>
              </v-list-item>
              <v-list-item class="red--text" @click="logout()">
                <v-icon class="red--text" color="error">
                  mdi-logout
                </v-icon>
                <v-list-item-title >keluar</v-list-item-title>
              </v-list-item> 
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<style >

</style>


<script>
import router from '../router'

  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          id: 1,
          name: 'Agama',
          children: [{
            id: 2,
            name: 'Fisipol',
            children: [],
          }]
        }]
    }),
    computed:{

    },
    methods:{
      logout(){
        if (confirm('Yakin akan keluar?')){
          localStorage.removeItem('token')
          router.push('/login')
        }
      }
    },

  }
</script>