<template>
  <div class="flex justify-between items-center mt-20 font-bold text-sm">
    <div>
      <NuxtLink v-if="prev" :to="{ name: 'blog-slug', params: { slug: prev.slug } }">
        &larr;
        {{ prev.title }}
      </NuxtLink>
    </div>
    <div>
      <NuxtLink v-if="next" :to="{ name: 'blog-slug', params: { slug: next.slug } }">
        {{ next.title }}
        &rarr;
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
};
</script>