<template>
  <div class="edit">
  <Sidebar/>
  <v-container v-if="form">
    <v-row class="d-flex justify-center pa-5">
      <v-card class="pa-3 col-md-8">
        <v-card-title primary-title>
          Edit User
        </v-card-title>
        <v-row class="d-flex justify-center pa-5">
        <v-col
          cols="12"
          sm="6"
          md="6"
        >
        <h6>Nama</h6>
          <small
          class="red--text"
          v-for="error in errors.name"
          :key="error"
          >
           {{error}}
           </small>
          <v-text-field
            label="Nama"
            v-model="form.name"
            solo
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="6"
        >
        <h6>Email</h6>
        <small
          class="red--text"
          v-for="error in errors.email"
          :key="error"
          >
           {{error}}
           </small>
          <v-text-field
            label="Email"
            v-model="form.email"
            solo
          ></v-text-field>
        </v-col>
 
        <v-col
          cols="12"
          sm="6"
          md="6"
        >
        <h6>Role</h6>
          <small
          class="red--text"
          v-for="error in errors.role_id"
          :key="error"
          >
           {{error}}
           </small>
        <v-select
          item-text="name"
          item-value="id"
          :items="roles"
          label="Role field"
          hide-details
          v-model="form.role_id"
          solo
        ></v-select>
        </v-col>
        </v-row>
        <v-row  class="d-flex justify-end pa-5">
        <v-btn 
        color="info mx-2"
        v-if="edit"
        @click="edit=false"
        >
          edit password selesai
        </v-btn>
        <v-btn color="info mx-2"
        v-if="!edit"
        @click="edit=true"
        >
          edit password
        </v-btn>
        <v-btn color="success"
        @click="save(form)"
        >
          save
        </v-btn>
        </v-row>
          <v-alert
            dense
            v-if="success"
            type="success"
          >
        data berhasil di save
          </v-alert>
        <v-row v-if="edit">
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
        <h6>Old password</h6>
          <small
          class="red--text"
          v-for="error in errors.oldPassword"
          :key="error"
          >
           {{error}}
           </small>
          <v-text-field
            hide-details="auto"
            label="old password"
            type="password"
            v-model="form.oldPassword"
            solo
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
        <h6>New Password</h6>
        <small
          class="red--text"
          v-for="error in errors.newPassword"
          :key="error"
          >
           {{error}}
           </small>
          <v-text-field
          hide-details="auto"
            label="new password"
            type="password"
            v-model="form.newPassword"
            solo
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
        
         <h6>rewrite new Password</h6>
        <small
          class="red--text"
          v-for="error in errors.rePassword"
          :key="error"
          >
           {{error}}
           </small>
          <v-text-field
          hide-details="auto"
            label="rewrite password"
            type="password"
            v-model="form.rePassword"
            solo
          ></v-text-field>
        </v-col>
        <v-row  class="d-flex justify-end pa-5">
        <v-btn color="success"
        @click="changePassword(form)"
        >
          save password
        </v-btn>
        </v-row>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import Sidebar from '../../components/Sidebar'

export default {
  components:{
    Sidebar
  },
  data(){
    return{
      edit:false
    }
  },
 computed:{
      user(){
        return this.$store.state.users.user
      },
      success(){
        return this.$store.state.users.success
      },
      errors(){
        return this.$store.state.users.errors
      },
      form(){
        return this.$store.state.users.form
      },
      roles(){
        return this.$store.state.users.roles
      }
    },
    mounted(){
      this.getUser(),
      this.getRoles()
    },
    methods:{
      getUser(){
        return this.$store.dispatch('getUser',this.$route.params.id);
      },
      searchUser(form){
        return this.$store.dispatch('searchUser',{form});
      },
      getRoles(){
        return this.$store.dispatch('getRoles');
      },
      save(form){
        return this.$store.dispatch('save',form)
      },
      changePassword(form){
        return this.$store.dispatch('changePassword',form)
      }
    }

}
</script>