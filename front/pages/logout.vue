<template>
  <div>
    <NavBars />
    <div class="text-center">
      <h1>Go Register Page</h1>
      <button @click="clear">
        Clear jwt
      </button>
    </div>
  </div>
</template>
<script>
import NavBars from '../components/NavBars.vue'

export default {
  components: { NavBars },
  methods: {
    async clear () {
      const post = await this.$axios.$post('/auth/logout')
      alert(JSON.stringify(post))
      if (post.message === 'success') {
        this.$router.push('/')
      }
    }
  }
}
</script>
