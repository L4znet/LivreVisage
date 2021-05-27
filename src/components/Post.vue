<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text" v-if="!updateMode">{{ content }}.</p>
      <textarea cols="100" rows="3" v-else v-model="contentToChange"></textarea>
      <p>Posté par <router-link :to="{ name: 'user-posts', params:{ id: author_id }}">{{author_name}}</router-link></p>
      <button @click="deleteItem(id)" v-if="author_id === getId">Delete</button>
      <button @click="editItem">Modifier</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Post',
  props:{
    content:String,
    author_name:String,
    author_id:String,
    id:String
  },
  data() {
    return {
      updateMode: false,
      contentToChange: this.content,

    }
  },
  mounted() {
    this.loadConnected()
  },
  computed:{
    ...mapGetters('feed', ['getId']),
  },
  methods:{
    editItem() {
      if(this.updateMode === true){
        this.updateItem([this.id, this.author_id, this.author_name, this.contentToChange]);
      }
      this.updateMode = !this.updateMode;
    },
    ...mapActions('feed', ['deleteItem', 'updateItem'])
  }
}
</script>


