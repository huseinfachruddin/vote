<template>
    <v-btn
    small
    color="white"
    outlined
    @click="login()"
    >
    <v-icon>mdi-login</v-icon>
    Login
    </v-btn>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
        async login(){
                return this.$router.push({ name: 'login' })              
        },

    }

}
</script>