<template>
  <div>
    <NavBars />
    <div>
      <h1 class="mt-7 text-3xl font-bold text-sky-600 text-center">
        My Jobs
      </h1>
      <div class="mt-7 w-full sm:grid-cols-1 md:grid-cols-3 lg:grid grid-cols-3">
        <div v-for="user in users" :key="user.id" class="w-80 h-52 bg-sky-700 shadow-lg shadow-cyan-500/50  mx-auto mt-2">
          <div class="flex flex-col h-full items-center justify-center text-white font-bold">
            <h1>Email: {{ user.email }}</h1>
            <h1>Name : {{ user.name }}</h1>
            <h1>Id : {{ user.id }}</h1>
            <button class="text-black font-bold" @click="deleteData(user.id)">
              Delete
            </button>
            <div class="p-4">
              <div class="group relative">
                <button class="bg-gray-800 text-white px-6 h-10 rounded">
                  Change Your Profile
                </button>
                <nav tabindex="0" class="border bg-white invisible border-gray-800 rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                  <ul class="py-1">
                    <li>
                      <input v-model="email" type="email" required placeholder="Emaill" class="text-black pl-1 outline-none">
                    </li>
                    <li>
                      <input v-model="name" type="text" required placeholder="Name" class="text-black pl-1 outline-none">
                    </li>
                    <li>
                      <input v-model="password" type="password" required placeholder="Password" class="text-black pl-1 outline-none">
                    </li>
                    <li>
                      <button :disabled="(!email,!name,!password)" class="bg-sky-700 p-1 px-3 text-center mx-auto flex justify-center" @click="submit(user.id,email,name,password)">
                        Changee
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBars from '@/components/NavBars'

export default {
  components: { NavBars },
  middleware: ['auth'],
  data () {
    return {
      users: [],
      email: '',
      name: '',
      password: ''
    }
  },
  async mounted () {
    const response = await this.$axios.get('/users')
    this.users = response.data
  },
  methods: {
    async deleteData (id) {
      try {
        const response = await this.$axios.delete(`/users/${id}`)
        this.users.shift(response)
        if (response.message !== '') {
          this.$router.push('/')
        }
      } catch (error) {
      }
    },
    async submit (id, email, name, password) {
      const update = await this.$axios.put(`/users/${id}`, { id, email, name, password })
      this.users = update
      if (update.message !== '') {
        this.$router.push('/home')
      }
    }
  }
}
</script>
