<template>
  <div class="flex justify-center px-4">
    <div class="w-full max-w-2xl py-6">
      <h1 class="text-4xl font-bold mb-10">#{{ posts[0].category }}</h1>
      <div v-if="posts">
        <div v-for="(post, index) in posts" :key="post.slug" :class="[ (index < 1) ? 'mt-0' : 'mt-2' ]" class="space-x-2">
            <span>{{ formatDate(post.createdAt) }}</span>
            <NuxtLink :to="{ name: 'posts-slug', params: { slug: post.slug } }"><span class="font-medium text-green-500 underline">{{ post.title }}</span></NuxtLink>
            <NuxtLink v-if="post.category" :to="`/categories/${post.category}`"><span class="font-medium text-gray-600 underline">#{{ post.category }}</span></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `#${this.posts[0].category}`
    };
  },
  async asyncData({ $content, params }) {
    const posts = await $content("posts", params.journal)
      .where({
        category: {
          $regex: [params.category, "i"]
        }
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      posts
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    excerpt(excerpt, length, clamp) {
      let regex = /<(?:.|\n)*?>/gm;
      length = length || 200;
      clamp = clamp || "...";
      let sanitizedExcerpt = excerpt.replace(regex, "");
      return sanitizedExcerpt.length > length
        ? `${sanitizedExcerpt.slice(0, length)}${clamp}`
        : sanitizedExcerpt;
    }
  }
};
</script>