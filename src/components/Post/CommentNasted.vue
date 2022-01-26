<template>
  <v-treeview :items="items" item-text="" class="pa-0">
    <template  v-slot:prepend="{ item }">
      <v-card
      flat
      color="#cfebfc"
      class="pa-1 ma-1"
      >
          <v-list-item>
            <v-list-item-avatar width="10" color="grey darken-3">
              <v-img
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Husein fachruddin</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        <v-card-text class="text-h10 pa-0">
          {{item.comment}}
        </v-card-text>
      </v-card>
      </template>
    </v-treeview>
    </template>
<style >

</style>


<script>
  export default {
    components:{
    },
    data(){
      return{
        items:[
          {
            name:'Husein fachruddin',
            comment:'"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',
            children:[{
              name:'Husein fachruddin',
              comment:'"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',
              children:[{
                name:'Husein fachruddin',
                comment:'"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',
                children:null
              }]
            }]
          }
        ]
      }
    }

  }
</script>