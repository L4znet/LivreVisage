<template>
  <main class="container">
    <h1 class="left">Changer d'utilisateur</h1>
    <UserItem v-for="(user, index) in getUsers" :key="index"
          :id="index"
          :username="user.username"></UserItem>
  </main>
</template>

<script>
import {mapGetters } from 'vuex'

import UserItem from '../components/UserItem.vue'

export default {
  name: 'AllUsers',
  components:{
    UserItem
  },

  computed:{
    ...mapGetters('users', ['getUsers']),
  },
}
</script>


