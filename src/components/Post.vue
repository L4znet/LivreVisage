<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text">{{ content }}.</p>
      <p>Posté par <router-link :to="{ name: 'user-posts', params:{ id: author_id }}">{{author_name}}</router-link></p>
      <button @click="deleteItem(id)">Delete</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'Post',
  props:{
    content:String,
    author_name:String,
    author_id:String,
    id:String
  },
  methods:{
    ...mapActions('feed', ['deleteItem'])
  }
}
</script>


