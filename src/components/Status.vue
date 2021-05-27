<template>
<v-container>
    <v-layout row wrap d-flex justify-center>
    <v-flex md8 sm8 >
<v-card class="ma-5 pa-3 light-green darken-4 white--text">
    <h3>Tambah Status</h3>
<div class="form">
            <v-text-field
            v-model="form.name"
              label="Status Baru"
              solo
              dense
              >
            
            </v-text-field>
            
            <small class="red--text" v-for="error in errors.name" :key="error">{{error}}</small>
            <div class="d-flex justify-end"> 
            <v-btn
            @click="createStatus(form)"
            color="success"
            small
            >
                Add
            </v-btn>
            </div>
</div>
<div>

<div class="data my-5">
<v-card class="pa-1">
    <v-container>
        <v-row class="d-flex justify-end">
            <v-btn color="info" v-if="edit" small @click="edit=false">selesai</v-btn>
            <v-btn color="info" v-if="!edit" small @click="edit=true">edit</v-btn>

        </v-row>
        <v-row>
              <v-simple-table v-if="status">
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        id
                    </th>
                    <th class="text-left">
                        data status
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in status"
                    :key="item.id"
                    >
                    <td >{{ item.id }}</td>
                    <td v-if="!edit">{{ item.name }}</td>
                    <td v-if="edit">
                        <v-text-field
                            solo
                            dense
                            v-model="item.name"
                            hide-details="auto"
                        ></v-text-field>
                    </td>
                    <td v-if="edit">
                        <v-btn
                        class="ma-1"
                        dark
                        dense
                        color="cyan"
                        small
                        @click="saveStatus(item)"
                        >
                        <v-icon dark>
                            mdi-check
                        </v-icon>
                        save
                        </v-btn>
                        <v-btn
                        class="ma-1"
                        dark
                        dense
                        color="red"
                        small
                        @click="destroyStatus(item)"
                        >
                        <v-icon dark>
                            mdi-delete
                        </v-icon>
                        </v-btn>
                    </td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-row>
    </v-container>
</v-card>
</div>
</div>
</v-card>
    </v-flex>
        
    </v-layout>
</v-container>
</template>

<script>
export default {
    data(){
        return{
            edit:false
        }
    },
    computed:{
        form(){
            return this.$store.state.receipt.form          
        },
        status(){
            return this.$store.state.receipt.status          
        },
        errors(){
            return this.$store.state.receipt.errors         
        },
    },
    mounted(){
        this.getStatus()
    },
    methods:{
    getStatus(){
        return this.$store.dispatch('getStatus')
      },
    createStatus(form){
        this.$store.dispatch('createStatus',form)
        return this.$store.dispatch('getStatus')
    },
    saveStatus(form){
        return this.$store.dispatch('saveStatus',form)
    },
    destroyStatus(form){
        this.$store.dispatch('destroyStatus',form)
        return this.$store.dispatch('getStatus')
    },
    }


}
</script>