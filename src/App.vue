<template>
  <v-app>
    <Navbar/>
    <v-container fluid class="bg" >
          <router-view temporary/>
    </v-container>
  </v-app>
</template>

<style>
.bg{
    background: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    font-family: "Georgia", "Courier New", monospace;
    height: 100%;
  }
router-link a{
    text-decoration: none ;
}
</style>

<script>
import Navbar from './components/Navbar'

export default {
  components:{
    Navbar,
  }

};
</script>
