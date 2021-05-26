<template>
  <div class="home">
    <UserPosts/>
  </div>
</template>

<script>
import UserPosts from '@/components/UserPosts.vue'

export default {
  name: 'usersposts',
  components: {
    UserPosts
  }
}
</script>
