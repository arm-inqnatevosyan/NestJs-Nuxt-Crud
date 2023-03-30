<template>
  <div>
    <NavBars />
    <div class="mt-7 w-full sm:grid-cols-1 md:grid-cols-3 lg:grid grid-cols-3">
      <SeePost
        v-for="user in users"
        :id="user.id"
        :key="user.id"
        :email="user.email"
        :name="user.name"
        :password="user.password"
        :comments="user.comments"
      />
    </div>
  </div>
</template>

<script>
import NavBars from '@/components/NavBars'
import SeePost from '@/components/SeePost'
export default {
  components: { NavBars, SeePost },
  middleware: ['auth'],
  data () {
    return {
      users: [],
      content: ''
    }
  },
  async mounted () {
    const response = await this.$axios.get('/users')
    this.users = response.data
  },
  methods: {
    async openUserProfile (user) {
      await this.$router.push('/users' + '/' + `${user}`)
      if (user) {
        user = !user
      }
    },
    async addComment (id, name) {
      return await this.$axios.post('/comments', { name, postId: id })
    }
  }
}
</script>
