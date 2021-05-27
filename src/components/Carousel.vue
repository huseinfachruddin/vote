<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(data, i) in data"
      :key="i"
    >
        <v-img
            full
          height="400"
          :src="data.img" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        data: [
            {
            title:"Trust",
            img: require('@/assets/bener.jpg'),
            desc:"Amanah anda adalah tanggung jawab kami",
            },
            {
            title:"Cek pengiriman",
            img: require('@/assets/box.jpg'),
            desc:"Cek satatus pengiriman anda",
            },
        ],
      }
    },
  }
</script>