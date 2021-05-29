<template>
  <div class="admin">
    <!-- <Navbar/> -->
    <Sidebar />
    <v-container>
      <v-row class="d-flex justify-center pa-3">
        <v-card class="col-md-8">
          <v-row>
            <div class="ma-3">
              <router-link style="text-decoration:none" to="/receipt/new">
                <v-btn small solo class="success">
                  <v-icon>mdi-truck-delivery</v-icon>
                  pengiriman baru
                </v-btn>
              </router-link>
            </div>
            <div class="ma-3">
              <v-btn
                small
                solo
                class="success"
                @click="(status = true), (role = false)"
              >
                <v-icon>mdi-format-list-checks</v-icon>
                olah status
              </v-btn>
            </div>
            <div class="ma-3">
              <v-btn
                small
                solo
                class="success"
                @click="(status = false), (role = true)"
              >
                <v-icon>mdi-account-key</v-icon>
                olah role
              </v-btn>
            </div>
          </v-row>
        </v-card>
      </v-row>
    </v-container>

    <Role v-if="role" />
    <Status v-if="status" />
    <Search />
  </div>
</template>

<script>
import Search from "../../components/Search.vue";
import Sidebar from "../../components/Sidebar.vue";
import Status from "../../components/Status.vue";
import Role from "../../components/Role.vue";


export default {
  components: {
    Sidebar,
    Search,
    Status,
    Role,
  },
  data() {
    return {
      status: false,
      role: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.profile;
    },
  },
  mounted() {
    this.$store.dispatch("profile");
  },
  methods: {
    getProfile() {
      return this.$store.dispatch("profile");
    }
  },
};
</script>
