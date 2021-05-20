<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text">{{ content }}.</p>
      <p>Posté par <strong>{{ author }}</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props:{
    content:String,
    author:String,
  },
}
</script>


