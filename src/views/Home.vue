<template>
<app>
  <v-container>
      <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <h1 class="text-h4 font-weight-thin mb-4">
              Hallo, Politikus Muda
            </h1>
            <h4 class="subheading">
              Temukan pengetahuan yang kau butuhkan disini
            </h4>
              <v-btn
                href="https://drive.google.com/drive/folders/1h8XQBoUzfP7gvJVuJ3bpM6-NUJd8_MSQ?usp=sharing"
                class="ma-2"
                outlined
                color="yellow"
              >
                Download Versi Android
              </v-btn>
          <Sos/>
          </v-col>
        </v-row>
      </v-parallax>
        <Content/>
  </v-container>
</app>
</template>

<script>
import Content from '../components/Content.vue'
import Sos from '../components/Sos.vue'


export default {
  components:{
  Sos,
  Content
  },
  
}
</script>
