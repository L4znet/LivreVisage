<template>
 <main class="container">
  <h1>Votre feed</h1>
  <div class="mb-3">
   <textarea
    class="form-control"
    :value="content"
    rows="3"
    placeholder="Exprimez-vous"
    @keyup="updateContentValue($event.target.value)"
   ></textarea>
   <button
    @click="
     addPost({ content: content, author_name: getUsername, author_id: getId })
    "
   >
    Poster
   </button>
  </div>
  <Post
   v-for="(post, index) in getFeedPost"
   :key="index"
   :id="index"
   :content="post.content"
   :author_name="post.author_name"
   :author_id="post.author_id"
  ></Post>
 </main>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import Post from "../components/Post.vue";

export default {
 name: "feed",
 components: {
  Post,
 },

 mounted() {
  this.getAllPosts();
  this.loadConnected();
  this.updateContentValue();
 },
 computed: {
  ...mapGetters("feed", ["getFeedPost"]),
  ...mapGetters("users", ["getUserConnect", "getUsername", "getId"]),
  ...mapState("feed", ["content"]),
 },

 methods: {
  ...mapActions("feed", ["getAllPosts", "addPost", "updateContentValue"]),
 },
};
</script>
