<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text" v-if="!updateMode">{{ content }}.</p>
      <textarea cols="100" rows="3" v-else v-model="contentToChange"></textarea>
    </div>
    <div>
      <div class="post-by">
        <p class="post-by-p"><router-link :to="{ name: 'user-posts', params:{ id: author_id }}">{{author_name}}</router-link></p>
        <hr class="post-by-hr">
      </div>
      <div v-if="author_id === getId">
        <button @click="deleteItem(id)" class="btn btn-danger">Supprimer</button>
        <button @click="toggleUpdateMode" class="btn btn-secondary">Modifier</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions,  mapGetters} from "vuex";

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
  methods:{
    toggleUpdateMode(){
      this.updateMode = !this.updateMode;
      if(!this.updateMode){
        // Si updatemode = true, on masque le textarea et on envoi la valeur du champ à l'action
        this.editItem({id:this.id, author_id:this.author_id, author_name:this.author_name, content:this.contentToChange})
      }
    },
    ...mapActions('feed', ['deleteItem', 'editItem'])
  },
  computed:{
    ...mapGetters('users', ['getId']),
  },
}
</script>

<style>
.card {
  margin-bottom: 80px;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
}

.card-body {
   background-color: #5F6778;
   border: solid 3px #FFBE38;
   border-radius: 10px;
   width: 75%;
}

.card-text {
  text-align: left;
  color: white;
}

.post-by {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.post-by-p {
  text-align: right;
  margin-bottom: 0;
  width: 200px;
  color: #808DA7;
}

.post-by-hr {
  height: 3px;
  width: 100px;
  background-color: #FFBE38;
  opacity: 1;
  margin-left: 20px;
}
</style>
