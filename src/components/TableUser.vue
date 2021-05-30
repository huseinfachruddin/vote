<template>
<v-container fluid>
  <v-card class="pa-5">
    <v-card-title>
      Users Table
      
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-title>

      
    <v-spacer></v-spacer>
            <div class="ma-3">
              <router-link style="text-decoration:none" to="/register">
                <v-btn small solo class="success">
                  <v-icon>mdi-account-multiple-plus</v-icon>
                  tambah user
                </v-btn>
              </router-link>
            </div>
    </v-card-title>
    <v-card-title>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
            <v-text-field
            v-model="form.name"
            class=""
            solo
            label="Name"
            hide-details
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
            <v-text-field
            v-model="form.email"
            class=""
            solo
            label="Email"
            hide-details
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
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
        <v-row>
          <v-spacer></v-spacer>
            <v-btn
              class="ma-5"
              @click="searchUser(form)"
              dark
              color="cyan"
              small
            >
              cari
            </v-btn>
        </v-row>            
    </v-card-title>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Email
          </th>
          <th class="text-left">
            Role
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in users"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.role.name }}</td>
          <td>
            <router-link style="text-decoration:none" :to="{name:'edit.user', params: {id:item.id}}">

            <v-btn
              class="ma-1"
              fab
              dark
              color="cyan"
              small
            >
              <v-icon dark>
                mdi-pencil
              </v-icon>
            </v-btn>
            </router-link>

            <v-btn
              class="mx-2"
              fab
              dark
              color="error"
              small
              @click="destroy(item.id)"
              ref="deleteUser"
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

  </v-card>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed:{
      users(){
        return this.$store.state.users.users
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
      this.getRoles(),
      this.refresh()
    },
    methods:{
      refresh(){
        return this.$store.dispatch('refresh');
      },
      getUser(){
        return this.$store.dispatch('getUsers');
      },
      searchUser(form){
        return this.$store.dispatch('searchUser',{form});
      },
      getRoles(){
        return this.$store.dispatch('getRoles');
      },
      destroy(id){
        this.$store.dispatch('destroy',id);
        return this.$store.dispatch('getUsers');
      },
    }

  }
</script>