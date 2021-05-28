<template>
  <main class="container">
    <h1 class="left">Votre feed</h1>
    <!-- <h2>Vous êtes connecté en tant que <b>{{getUserConnect.username}}</b></h2> -->
    <div class="mb-3">
      <textarea class="form-control" :value="content" rows="3" placeholder="Exprimez-vous"
                @keyup="updateContentValue($event.target.value)"></textarea>
      <button @click="addPost({content:content, author_name:getUsername, author_id:getId })" class="btn btn-post">Poster <img src="../assets/paper-plane-solid.svg"></button>
    </div>
    <Post v-for="(post, index) in getFeedPost" :key="index" 
    :id="index"
    :content="post.content" 
    :author_name="post.author_name" 
    :author_id="post.author_id"></Post>
  </main>
</template>

<script>
import {mapActions, mapGetters, mapState } from 'vuex'

import Post from '../components/Post.vue'

export default {
  name: 'feed',
  components:{
  Post
  },

  mounted() {
    this.getAllPosts()
    this.loadConnected()
    this.updateContentValue()
  },
  computed: {
    ...mapGetters("feed", [
      "getFeedPost",
    ]),
    ...mapGetters("users", [
      "getUserConnect",
      "getUsername",
      "getId",
    ]),
    ...mapState("feed", ["content"]),
  },
  methods: {
    ...mapActions("feed", [
      "getAllPosts",
      "addPost",
      "updateContentValue",
    ]),
    ...mapActions("users", [
      "loadConnected",
    ]),
  },
}
</script>

<style>
textarea {
  background-color: #5F6778 !important;
  border: none !important;
  margin-bottom: 50px !important;
  color: white !important;
}

.mb-3 {
  padding-right: 320px;
}

textarea:focus {
  background-color: #5F6778 !important;
  color: white !important;
}

textarea::placeholder {
  color: #808DA7 !important;
}

.left {
  text-align: left;
  color: #FFBE38;
}

h1 {
  margin-bottom: 30px;
}

</style>
