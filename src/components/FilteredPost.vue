<template>
  {{author_id}}
  <div v-if="parseInt(selected_id) === author_id" class="card">
    <div class="card-body">
      <p class="card-text" v-if="!updateMode">{{ content }}.</p>
      <textarea cols="100" rows="3" v-else v-model="contentToChange"></textarea>
    </div>
    <div>
      <div class="post-by">
        <p class="post-by-p"><strong>{{author_name}}</strong></p>
        <hr class="post-by-hr">
      </div>
      <div v-if="author_id === getId">
        <button @click="deleteItem(id)" class="btn btn-danger">Supprimer</button>
        <button @click="toggleUpdateMode" type="button" class="btn btn-secondary">Modifier</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'FilteredPost',
  props:{
    content:String,
    author_name:String,
    author_id:String,
    selected_id:String,
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