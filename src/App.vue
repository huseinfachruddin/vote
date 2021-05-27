<template>
  <v-app>
    <Loading/>
<router-view/>
  </v-app>
</template>

<script>
import Loading from './components/Loading'

export default {
  components:{
    Loading
  }

};
</script>
