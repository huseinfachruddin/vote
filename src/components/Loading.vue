<template>
    <v-overlay :value="loading">
      <v-progress-circular
        indeterminate
        size="60"
      ></v-progress-circular>
    </v-overlay>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    mounted(){

    },
    computed:{
        loading(){
            return this.$store.state.loading           
        },
    }

}
</script>