<template>
<app>
  <v-container>
    <v-card flat>
      <v-card-actions class="justify-center">
          <v-list-item-avatar
          width="100"
          height="100"
          color="grey darken-3">
            <v-img
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>
      </v-card-actions>
      <v-card-title class="justify-center">
      <h5 class="text-center">Husein Fachruddin Al Fahmy</h5>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="form"
          filled
          label="Nama"
          dense
        ></v-text-field>
        <v-text-field
          v-model="form"
          filled
          label="Nama Lengkap"
          dense
        ></v-text-field>
      </v-card-text>
  <v-card-actions class="justify-center">
      <v-btn 
      block 
      color="info"
      :disabled="form"
      depressed
      small
      >
        Ubah
      </v-btn>
  </v-card-actions>
  <v-divider></v-divider>
  </v-card>
  </v-container>
</app>
</template>

<script>


export default {
  data(){
    return{

    }
  }
}
</script>
