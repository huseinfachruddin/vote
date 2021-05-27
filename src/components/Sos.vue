<template>
<div class="visitmore">
    <v-container>
        <v-row class="d-flex justify-center my-3 text-center">
                    <div v-for="button in buttons" :key="button.icon">
                      <a :href="button.link" style="text-decoration: none;">
                      <v-btn
                        class="mx-2"
                        fab
                        small
                        :href="button.link"
                      >
                      <v-icon dark>
                        {{button.icon}}
                      </v-icon>
                    </v-btn>
                    </a>
                  </div>
        </v-row>
    </v-container>
</div>
</template>


<script>
  export default {
    data () {
      return {
          buttons:[
            {
            icon:'mdi-github',
            link:'https://github.com/huseinfachruddin'
            },
            {
            icon:'mdi-facebook',
            link:'https://www.facebook.com/fachruddin.ilmii/'
            },
            {
            icon:'mdi-instagram',
            link:'https://www.instagram.com/husein_fachruddin/'
            },
            {
            icon:'mdi-whatsapp',
            link:'https://wa.me/6282154926482'
            },
            {
            icon:'mdi-linkedin',
            link:'https://www.linkedin.com/in/husein-fachruddin-5b4329205/'
            }
          ]
      }
    },
  }
</script>