<template>
  <div class="flex justify-center px-4">
    <div class="w-full max-w-2xl py-6">
      <div class="flex items-center mb-2 space-x-4">
        <NuxtLink to="/" class="font-bold text-2xl">&larr;</NuxtLink>
        <h1 class="text-4xl font-bold">{{ post.title }}</h1>
      </div>
      <div class="space-x-2">
        <span>{{ formatDate(post.createdAt) }}</span>
        <NuxtLink v-if="post.category" :to="`/categories/${post.category}`"><span class="font-medium text-gray-600 underline">#{{ post.category }}</span></NuxtLink>
      </div>

      <img v-if="post.image" :src="post.image" :alt="post.excerpt" class="w-full object-cover object-center mt-6" />

      <article class="mt-6 prose prose-sm md:prose">
        <nuxt-content :document="post" />
      </article>

      <post-link :prev="prev" :next="next" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: "description", name: "description", content: this.post.excerpt }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const post = await $content("posts", params.slug).fetch();
    const [prev, next] = await $content("posts")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return {
      post,
      prev,
      next
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>
