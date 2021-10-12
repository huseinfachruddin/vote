<template>
<div id="navbar">
    <v-toolbar 
    color="yellow accent-4">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="d-flex justify-center">
          <v-img 
          max-width="40"
          src="../assets/hmj.png" />
      <h3 class="ma-1 black--text">PERPUSPOL</h3>
      </v-toolbar-title> 
      <v-spacer></v-spacer>

    </v-toolbar>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-yellow--text text--accent-4"
        >
      <v-list-item class="yellow">
        <v-list-item-content >
          <v-list-item-title class="text-h6">
            PERPUSPOL
          </v-list-item-title>
          <v-list-item-subtitle>
            menu
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <router-link to="/" style="text-decoration: none;">
              <v-list-item>
                <v-list-item-title >HOME</v-list-item-title>
              </v-list-item> 
              </router-link>
        <v-treeview :items="menu" open-on-click>
            <template v-slot:label="menu">
              <v-list-item v-if="menu.item.children.length">
                <v-list-item-title>{{menu.item.name}}</v-list-item-title>
              </v-list-item> 
              <router-link v-if="!menu.item.children.length" :key="$route.fullPath" :to="{name: 'category',params:{ id: menu.item.id,name:menu.item.name }}" style="text-decoration: none;">
              <v-list-item>
                <v-list-item-title >{{menu.item.name}}</v-list-item-title>
              </v-list-item> 
              </router-link>
            </template>
        </v-treeview>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style >

</style>


<script>
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
      category(){
        return this.$store.state.category.category;
      },
      menu(){
        return this.$store.state.category.menu;
      },
      form(){
        return this.$store.state.content.form;
      },
      errors(){
        return this.$store.state.content.errors;
      },
    },
    methods:{
      getCategory(){
        this.$store.dispatch('getCategory')
      },
      getCategoryTree(){
        this.$store.dispatch('getCategoryTree')
      },
      async save(form){
        await this.$store.dispatch('createContent',form)
        await this.getContent()
        this.loading=false
      },
    },
    mounted() {
      this.getCategoryTree()
    },
  }
</script>