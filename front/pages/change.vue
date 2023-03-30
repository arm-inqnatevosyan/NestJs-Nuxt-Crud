<template>
  <div class="flex flex-col">
    <NavBars />
    <div class="flex flex-col w-1/3 mt-40 p-10 bg-sky-800 mx-auto h-my shadow-lg shadow-cyan-500/50">
      <h1 class="text-white font-bold font-sans mb-10 text-2xl">
        Change User
      </h1>
      <input
        id="input"
        v-model="id"
        class="border-solid border-2 border-sky-200 outline-none p-1"
        required
        type="text"
        placeholder="Your Id"
      >
      <input
        id="input"
        v-model="email"
        class="border-solid border-2 border-sky-200 outline-none p-1 mt-5"
        required
        type="email"
        placeholder="Email"
      >
      <input
        id="input"
        v-model="name"
        class="border-solid border-2 border-sky-200 outline-none p-1 mt-5"
        required
        type="text"
        placeholder="Name"
      >
      <input
        id="input"
        v-model="password"
        class="border-solid border-2 border-sky-200 outline-none p-1 mt-5"
        required
        type="password"
        placeholder="Password"
      >
      <button style="padding: 5px;margin-top: 20px;background-color: grey;color:white;" @click="submit(id,email,name,password)">
        Change User
      </button>
    </div>
  </div>
</template>

<script>
import NavBars from '@/components/NavBars'
export default {
  name: 'NuxtTutorial',
  components: { NavBars },
  middleware: ['auth'],
  data () {
    return {
      users: [],
      id: '',
      email: '',
      name: '',
      password: ''
    }
  },
  methods: {
    async submit (id, email, name, password) {
      const update = await this.$axios.put(`/users/${id}`, { id, email, name, password })
      this.users = update
      if (update.message !== '') {
        this.$router.push('/users')
      }
    }
  }
}
</script>
