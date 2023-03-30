<template>
  <div class="bg-gray-400 h-screen">
    <NavBars />
    <div class="flex justify-center items-center pt-80">
      <div class="w-full max-w-xs">
        <div class="identity-input mb-4">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Email</label>
          <input
            id="identity"
            v-model="email"
            class="shadow border border-gray-400 appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
            aria-describedby="emailHelp"
          >
          <span id="emailHelp" class="text-xs text-red-700" />
        </div>

        <div class="password-input mb-6">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
          >Password</label>

          <input
            id="password"
            v-model="password"

            aria-describedby="passwordHelp"
            class="shadow border border-gray-400 appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="*******"
          >

          <span id="passwordHelp" class="text-xs text-red-700" />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            :disabled="(!email,!password)"
            @click="login(email,password)"
          >
            Log In
          </button>
          <NuxtLink
            class="inline-block align-baseline font-bold text-sm text-black-500 hover:text-blue-800"
            to="/register"
          >
            Register?
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBars from '../components/NavBars.vue'

export default {
  name: 'LoginVue',
  components: { NavBars },
  middleware: ['login'],
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login (email, password) {
      const post = await this.$axios.$post('/auth/login', { email, password })
      const myPath = window.location.pathname
      if (post.message === 'success') {
        alert(post.token)
        this.$cookiz.set('jwt', post.token, {
          path: myPath,
          Domain: 'http://localhost:3000/',
          maxAge: 60 * 60 * 24 * 7
        })
        this.$router.push('/home')
      }
    }
  }
}
</script>
<style scoped>
</style>
