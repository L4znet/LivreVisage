<template>
  <main class="container">
    <h1>Votre feed</h1>
    <h2>Vous êtes connecté en tant que {{username}}</h2>
    <div class="mb-3">
      <textarea class="form-control" v-model="content" rows="3" placeholder="Exprimez-vous" @keyup.prevent.enter="addPost({content:content, author_name:author_name, author_id:author_id })"></textarea>
    </div>
    <Post v-for="(post, index) in getFeedPost" :key="index" 
    :id="index"
    :content="post.content" 
    :author_name="post.author_name" 
    :author_id="post.author_id"></Post>
  </main>
</template>

<script>
import {mapActions, mapGetters } from 'vuex'

import Post from '../components/Post.vue'

export default {
  name: 'feed',
  components:{
  Post
  },

  data(){
    return{
      content:'',
      author_name:'Charly Escalona',
      author_id:'1111'
    }
  },

  props:{
    id:String,
    username:String
  },

  mounted() {
    this.getAllPosts()
  },
  computed:{
    ...mapGetters('feed', ['getFeedPost']),
  },

  methods:{
    ...mapActions('feed', ['getAllPosts', 'addPost', 'showConnect']),
  }
}
</script>


