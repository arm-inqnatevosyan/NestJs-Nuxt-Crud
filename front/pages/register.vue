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

        <div class="identity-input mb-4">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Name</label>
          <input
            id="identity"
            v-model="name"
            class="shadow border border-gray-400 appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Name"
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
            :disabled="(!email,!name,!password)"
            @click="submit(email,name,password)"
          >
            Sign In
          </button>
          <NuxtLink to="/">
            <button
              class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBars from '../components/NavBars.vue'

export default {
  name: 'IndexPage',
  components: { NavBars },
  middleware: ['login'],
  data () {
    return {
      email: '',
      name: '',
      password: ''
    }
  },
  methods: {
    async submit (email, name, password) {
      const post = await this.$axios.$post('/auth/register', { email, name, password })
      alert(JSON.stringify(post))
      if (post.message === 'success') {
        this.$router.push('/')
      }
    }
  }
}
</script>
<style scoped>
.bg{
  width: 100%;
  height: 100vh;
  background-size: cover;
}
</style>
