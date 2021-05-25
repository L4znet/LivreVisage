<template>
  <div v-if="selected_id == author_id" class="card">
    <div class="card-body">
      <p class="card-text">{{ content }}.</p>
      <p>Posté par <strong>{{author_name}}</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilteredPost',
  props:{
    content:String,
    author_name:String,
    author_id:String,
    selected_id:String,
  },
}
</script>