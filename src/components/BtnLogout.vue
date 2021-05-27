<template>
    <v-btn
    small
    color="white"
    outlined
    @click="logout()"
    >
    <v-icon>mdi-logout</v-icon>
    Logout
    </v-btn>
</template>

<script>
export default {
    data(){
        return{
            token: localStorage.getItem('token'),
            user:[]
        }
    },
    mounted(){
    },
    methods:{
        async logout(){
                return this.$store.dispatch('logout');         
        }

    }

}
</script>