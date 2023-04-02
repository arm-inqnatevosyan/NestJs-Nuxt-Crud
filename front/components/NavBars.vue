<template>
  <nav class="bg-sky-600 w-full items-center h-20 mx-auto sm:w-full lg:w-3xl">
    <div class="flex items-center w-my mx-auto justify-between pt-5 bg-sky-600">
      <div class="h-10  z-10 flex items-center text-white">
        <h1 class="text-white font-bold text-2xl">
          Website
        </h1>
      </div>

      <div class="lg:hidden z-10">
        <button @click="isOpen = !isOpen">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div class="hidden z-10 lg:block">
        <ul class="flex space-x-5 text-sm  text-white font-sans">
          <li>
            <NuxtLink to="/home">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/users">
              Users
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/account">
              My Jobs
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/change">
              Change My Account
            </NuxtLink>
          </li>
        </ul>
      </div>

      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity" @keydown.esc="isOpen = false">
          <div class="absolute inset-0 bg-black opacity-50" tabindex="0" @click="isOpen = false" />
        </div>
      </transition>

      <aside
        class="p-5 transform top-0 left-0 w-64 bg-blacl fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul class="divide-y font-sans z-10 text-black font-bold">
          <li>
            <NuxtLink to="/home" class="my-4 inline-block" @click="isOpen = false">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/users" class="my-4 inline-block" @click="isOpen = false">
              Users
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/account" class="my-4 inline-block" @click="isOpen = false">
              My Jobs
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/change" class="my-4 inline-block" @click="isOpen = false">
              Change My Account
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/register" class="text-sm rounded-3xl px-10 py-2 text-white bg-mycolor mt-5">
              Sign In
            </NuxtLink>
          </li>
        </ul>
      </aside>
      <div class="hidden md:hidden xl:block">
        <NuxtLink to="/register" class="text-sm rounded-3xl px-10 py-2 text-white bg-mycolor">
          Sign In
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBars',
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
