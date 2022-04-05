<template>
  <main class="bg-primary-light">
    <div class="container">
      <section class="flex items-center justify-between py-8">
        <h1 class="text-primary lg:text-9xl">
          /draft/
        </h1>
    
        <p class="hidden w-1/3 lg:block">
          Welcome to the draft. I created this blog to make it a place where I can write about life, code, and anything in between.
        </p>
      </section>
  
      <div v-if="error">
        {{ error }}
      </div>

      <masonry
        :cols="{
          default: 4,
          1024: 3,
          768: 2
        }"

        :gutter="{
          default: '24px',
          768: '16px'
        }"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          class="dp-1 rounded-b-xl mb-4 bg-white md:mb-6"
        >
          <img
            :src="post.image.url"
            class="rounded-t-xl"
          >

          <div class="p-4">
            <h2 class="pb-6 text-base">
              {{ post.title }}
            </h2>
            
            <p class="hidden lg:block">{{ post.content }}</p>
  
            <div class="flex items-center justify-between text-xs">
              <p class="text-primary">
                {{ post.category.name }}
              </p>
              
              <p>{{ post.published }}</p>
            </div>
          </div>
        </div>
      </masonry>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'blog',

  data () {
    return {
      posts: [],
      error: null
    }
  },

  async mounted () {
    this.$nuxt.$emit('startHeaderAnimation');

    try {
      this.posts = await this.$strapi.$posts.find({
        _sort: "published:asc"
      });
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
