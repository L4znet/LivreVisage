<template>
  <main class="container">
    <h1>Ajouter un utilisateur</h1>
    <div class="mb-3">
      <input type="text" class="form-control" v-model="username" placeholder="Nom d'utilisateur">
      <button type="submit" class="btn btn-warning" @click="addUser({username:username})">Ajouter</button>
    </div>
  </main>
</template>

<script>
import {mapActions } from 'vuex'

export default {
  name: 'feed',

  data(){
    return{
      username:''
    }
  },
  methods:{
    ...mapActions('users', ['addUser']),
  }
}
</script>


