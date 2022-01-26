<template>
  <v-sheet    
  >
    <v-slide-group
      v-model="model"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
      >
        <v-card
          class="ma-2"
          height="50"
          width="100"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
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

    },
    methods:{

    },

  }
</script>