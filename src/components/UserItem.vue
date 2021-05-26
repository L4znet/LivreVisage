<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text">{{ username }}.</p>
     <button class="btn btn-warning" @click="connectUser({id:id, username:username})">Me connecter</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'UserItem',
  props:{
    id:String,
    username:String
  },
  methods:{
    ...mapActions('users', ['connectUser'])
  }
}
</script>


