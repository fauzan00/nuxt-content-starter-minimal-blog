<template>
  <div class="relative">
    <input v-model="query" type="text" autocomplete="off" placeholder="Search.." class="focus:outline-none" />
    <ul v-if="query.length" class="absolute px-4 py-2 w-64 rounded shadow mt-3 right-0 overflow-hidden">
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="{ name: 'posts-slug', params: { slug: post.slug } }" class="block py-1 text-green-500 hover:underline">{{ post.title }}</NuxtLink>
      </li>
      <li v-if="! posts.length" class="text-gray-600">¯\_( ͡❛ ͜ʖ ͡❛)_/¯</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      posts: [],
    }
  },
  watch: {
    async query(query) {
      if (!query) {
        this.posts = []
        return
      }
      this.posts = await this.$content('posts').limit(6).search(query).fetch()
    },
  },
}
</script>
