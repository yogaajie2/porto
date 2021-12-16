<template>
  <div class="link group mb-20 lg:w-5/12">
    <div
      v-show="isPlaceholderShown"
      class="h-96"
    ></div>

    <SlideUp>
      <div v-show="isProjectShown">
        <NuxtLink
          :to="`projects/${ project.id }`"
          @click.native="$nuxt.$emit('showTransition')"
        >
          <div class="mb-11 relative">
            <img
              :src="project.thumbnails.desktop"
              class="rounded-lg w-10/12"
            />

            <img
              :src="project.thumbnails.mobile"
              class="absolute right-0 rounded-lg top-1/4 w-1/5"
            />
          </div>
          
          <h4>{{ project.overview.role }}</h4>

          <div class="font-heading text-tertiary lg:mb-4">
            <span class="logo-on-hover hidden lg:block lg:text-4xl xl:text-5xl">//</span>
            <h2 class="shift-right-16 font-bold translate-x-0 lg:font-normal">{{ project.title }}</h2>
          </div>

          <p class="none lg:block lg:text-gray-500 lg:text-xl">{{ project.subtitle }}</p>
        </NuxtLink>
      </div>
    </SlideUp>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isPlaceholderShown: true,
      isProjectShown: false,
      observer: null
    }
  },

  mounted() {
    let options = { threshold: 1.0 }

    this.observer = new IntersectionObserver(this.handleObserver, options);
    this.observer.observe(this.$el);
  },

  destroyed() {
    this.observer.disconnect();
  },

  methods: {
    handleObserver(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isPlaceholderShown = false;
          this.isProjectShown = true;
        }
      });
    }
  }
}
</script>