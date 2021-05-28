<template>
 <div class="card">
  <div class="card-body">
   <p class="card-text" v-if="!updateMode">{{ content }}.</p>
   <textarea
    id=""
    cols="30"
    rows="10"
    v-model="newContent"
    v-if="updateMode"
   ></textarea>
   <p>
    Posté par
    <router-link :to="{ name: 'user-posts', params: { id: author_id } }">{{
     author_name
    }}</router-link>
   </p>
   <button @click="deleteItem(id)" v-if="author_id === getId">Delete</button>
   <button @click="toggleUpdateMode()" v-if="author_id === getId">
    Modifier
   </button>
  </div>
 </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
 name: "Post",
 props: {
  content: String,
  author_name: String,
  author_id: String,
  id: String,
 },
 data() {
  return {
   updateMode: false,
   newContent: this.content,
  };
 },
 computed: {
  ...mapGetters("users", ["getId", "getUsername"]),
 },
 methods: {
  toggleUpdateMode() {
   this.updateMode = !this.updateMode;
   if (!this.updateMode) {
    // Si updatemode = true, on masque le textarea et on envoi la valeur du champ à l'action
    this.editItem({
     author_id: this.author_id,
     author_name: this.author_name,
     content: this.newContent,
    });
   }
  },
  ...mapActions("feed", ["deleteItem", "editItem"]),
  ...mapActions("users", ["loadConnected"]),
 },
};
</script>
