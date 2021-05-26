<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text">{{ username }}.</p>
     <button class="btn btn-warning">Me connecter</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'UserItem',
  props:{
    username:String
  },
  methods:{
    ...mapActions('feed', ['deleteItem'])
  }
}
</script>


