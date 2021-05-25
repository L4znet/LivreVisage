<template>
  <main class="container">
    <Post v-for="(post, index) in getFeedPost" :key="index" :content="post.content" :author_name="post.author_name" :author_id="post.author_id"></Post>
    {{id}}
  </main>
</template>

<script>
import {mapActions, mapGetters } from 'vuex'

import Post from '../components/Post.vue'

export default {
   data(){
      return {
        id: this.$route.params.id
      }
  },
  components:{
  Post
  },

  mounted() {
    this.getAllPosts()
  },
  computed:{
    ...mapGetters('feed', ['getFeedPost']),
  },

  methods:{
    ...mapActions('feed', ['getAllPosts']),
  }
}
</script>