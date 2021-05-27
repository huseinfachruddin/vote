<template>
      <v-progress-linear
      v-if="loading"
      indeterminate
      color="cyan"
    ></v-progress-linear>

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
            return this.$store.state.auth.loading            
        },
    }

}
</script>