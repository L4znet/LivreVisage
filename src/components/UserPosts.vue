<template>
  <main class="container">
    <FilteredPost v-for="(post, index) in getFeedPost" :key="index" :content="post.content" :author_name="post.author_name" :author_id="post.author_id" :selected_id="id"></FilteredPost>
  </main>
</template>

<script>
import {mapActions, mapGetters } from 'vuex'

import FilteredPost from '../components/FilteredPost.vue'

export default {
   data(){
      return {
        id: this.$route.params.id
      }
  },
  components:{
    FilteredPost
  },

  mounted() {
    this.getUserPosts(this.id);
  },
  computed:{
    ...mapGetters('feed', ['getFeedPost']),
  },

  methods:{
    ...mapActions('feed', ['getUserPosts']),
  }
}
</script>