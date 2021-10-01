<template>
<div id="navbar">
    <v-toolbar 
    color="yellow accent-4">
      <v-spacer></v-spacer>
      <v-toolbar-title class="d-flex justify-center">
          <v-img 
          max-width="40"
          src="../assets/hmj.png" />
      <h3 class="ma-1 black--text">PERPUSPOL</h3>
      </v-toolbar-title> 
      <v-spacer></v-spacer>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>

    </v-toolbar>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      right
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
        <v-treeview :items="items" right>
            <template v-slot:label="{item}">
              <v-list-item>
                <v-list-item-title v-if="!(item.children==[])">{{item.name}}</v-list-item-title>
                <v-list-item-title v-if="(item.children==[])">{{id}}</v-list-item-title>
              </v-list-item> 
            </template>

        </v-treeview>
              <v-list-item>
                <v-list-item-title>data</v-list-item-title>
              </v-list-item>
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
          name: 'Applications :',
          children: [{
            id: 2,
            name: 'Applications :',
            children: [
              { id: 4, name: 'Calendar : app' ,children:[]},
              { id: 3, name: 'Chrome : app' ,children:[]},
              { id: 5, name: 'Webstorm : app' ,children:[]},
            ],
          }]
        }]
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>