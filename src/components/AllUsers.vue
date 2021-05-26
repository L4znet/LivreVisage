<template>
  <main class="container">
    <h1>Changer d'utilisateur</h1>
    <UserItem v-for="(user, index) in getUsers" :key="index"
          :id="index"
          :content="user.username"></UserItem>
  </main>
</template>

<script>
import {mapActions, mapGetters } from 'vuex'

import UserItem from '../components/UserItem.vue'

export default {
  name: 'AllUsers',
  components:{
    UserItem
  },

  mounted() {
    this.getAllUsers()
  },
  computed:{
    ...mapGetters('users', ['getUsers']),
  },

  methods:{
    ...mapActions('users', ['getAllUsers']),
  }
}
</script>


