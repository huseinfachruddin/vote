<template>
<div id="navbar">
    <v-toolbar 
    color="yellow accent-4">
      <v-spacer></v-spacer>
      <v-toolbar-title class=" d-flex justify-center">
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
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
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
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>