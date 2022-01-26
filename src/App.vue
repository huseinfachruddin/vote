<template>
  <v-app>
    <v-container>
      <Header v-if="$route.name!='login' && $route.name != 'register'"/>
    </v-container>
    <v-container class="mt-5">
      <Navbar v-if="$route.name!='login' && $route.name != 'register' "/>
      <router-view temporary/>
      <Loading />
    </v-container>
  </v-app>
</template>

<style>

#app,body {
  background-color: rgb(236, 247, 252);
  height: auto;
}

</style>

<script>
import Navbar from './components/Navbar'
import Header from './components/Header'
import Loading from './components/Loading'
export default {
  components:{
    Navbar,
    Header,
    Loading

  }

};
</script>
