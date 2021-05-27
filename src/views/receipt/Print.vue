<template>
<div v-if="data" class="print d-flex justify-center" ref="content" >
    <v-container fluid class="col-md-5 ma-1" style="width:500px">
    <div id="facture">
    <v-row class="ma-0 d-flex justify-center">
        <v-img
        contain
        height="90"
        src="../../assets/bw.png" />
        banguntapan,yogyakarta
    </v-row>
      <v-row>
        <v-col
        cols="12"
        md="12"
        sm6="12"
        >
        <h4 class="grey">No Receipt : {{receipt.no_receipt}}</h4>
        <p class="ma-0">
          {{receipt.created_at}} 
        </p>
        </v-col>
        <v-row class="d-flex justify-center">
        <QrcodeVue :value="value" :size="size"/>
        </v-row>
      </v-row>
      <v-row >
        <v-col
        cols="6"
        md="6"
        sm6="6"
        
        >
        <h4 class="grey">Pengirim:</h4>
        <p class="ma-0">
          <strong>{{receipt.sender.name}}</strong>
        </p>
        <p class="ma-0">
          {{receipt.sender.address}}
        </p>
        <p class="ma-0">
          Telp : {{receipt.sender.phone}}
        </p>
        <p class="ma-0">
          Email : {{receipt.sender.email}}
        </p>
        </v-col>
        <v-col
        cols="6"
        md="6"
        sm6="6"
        
        >
        <h4 class="grey">Penerima:</h4>
        <p class="ma-0">
          <strong>{{receipt.receiver.name}}</strong>
        </p>
        <p class="ma-0">
          {{receipt.receiver.address}}
        </p>
        <p class="ma-0">
          Telp : {{receipt.receiver.phone}}
        </p>
        <p class="ma-0">
          Email : {{receipt.receiver.email}}
        </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        cols="12"
        md="12"
        sm6="12"
        
        >
        <h4 class="grey">Data Barang:</h4>
        <p class="ma-0">
          Berat : {{receipt.weight}} gram
        </p>
        <p class="ma-0">
          Volume : {{receipt.volume}} m3
        </p>
        <p class="ma-0">
          Harga : Rp {{formatPrice(receipt.price)}}
        </p>
        </v-col>
      </v-row>
    </div>
    <v-row>
    <v-btn small class="ma-3" @click="printFacture()">cetak</v-btn>
    </v-row>
    </v-container>
</div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas"

export default {
  components:{
    QrcodeVue
  },
  data(){
    return{
      data:false,
      value: null,
      size:150
    }
  },
  computed:{
    receipt(){
      return this.$store.state.receipt.receipt;
    }
  },
  mounted(){
    this.getReceipt(),
    console.log(window.location.origin + this.$route.path)
  },
  methods:{
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    async getReceipt(){
      await this.$store.dispatch('receipt',this.$route.params.id)
      this.value=window.location.origin + this.$route.path
      return this.data=true
    },
    printFacture() {
        var pdf = new jsPDF();
        var element = document.getElementById('facture');
        var width= element.style.width;
        var height = element.style.height;

        html2canvas(element).then(canvas => {
            var image = canvas.toDataURL('image/png');
            pdf.addImage(image, 'JPEG', 1, 1, width, height,'center');
            pdf.save(this.receipt.no_receipt+'.pdf')
        });
    }
  }
}
</script>