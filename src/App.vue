<template>
  <v-app>
    <div class="bg">
        <Navbar/>
          <router-view/>
        <Footer/>
    </div>
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

</style>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar'

export default {
  components:{
    Navbar,
    Footer
  }

};
</script>
