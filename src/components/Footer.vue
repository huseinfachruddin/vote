<template>
  <v-footer
    color="teal darken-3"
  >
  <v-container fluid>


      <v-row
      justify="center"
    >
      <sos/>
    </v-row>
    <v-row
      justify="center"
      no-gutters
    >
      <div v-for="link in links"
          :key="link.name">
        <router-link :to="{path:link.to,hash:'#aku'}" style="text-decoration: none;">
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.name }}
        </v-btn>
        </router-link>
      </div>
      <v-col
        class="teal darken-3 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>trustluggage</strong>
      </v-col>
    </v-row>
      </v-container>
  </v-footer>
</template>

<script>
import Sos from './Sos.vue'
  export default {
  components: {Sos },
    data: () => ({
      links: [
      {
        name:'trustluggage@gmail.com',
        to:"trustluggage@gmail.com"
      },
      ]
    }),
  }
</script>