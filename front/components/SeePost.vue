<template>
  <div>
    <div class="w-80 h-auto text-sm bg-sky-700 shadow-lg py-4 shadow-cyan-500/50 text-white text-center font-bold mx-auto mt-2">
      <h1 class="font-bold text-xl">
        Name :{{ name }}
      </h1>
      <h1>Email :{{ email }}</h1>
      <div class="py-3">
        <input v-model="content" type="text" class="text-black px-1 outline-none bg-gray-300" placeholder="Add a comment">
        <button class="h-5 w-16 bg-sky-400 text-white font-bold tracking-widest" @click="addComment(id, content)">
          Post
        </button>
      </div>
      <div v-for="comment in comments" :key="comment.id" class="mt-3">
        <h1 class="text-black">
          Comment :{{ comment.name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SeePost',
  props: {
    id: { type: Number, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    comments: { type: Array, required: true }
  },
  data () {
    return {
      content: ''
    }
  },

  methods: {
    async addComment (id, name) {
      return await this.$axios.post('/comments', { name, userId: id })
    }
  }
}
</script>
