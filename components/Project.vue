<template>
  <div class="mb-20 lg:w-5/12">
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
        <img
          src="https://via.placeholder.com/1200x540"
          class="mb-12"
        />
        
        <h4>{{ project.overview.role }}</h4>
    
          <h2 class="text-tertiary lg:mb-4">{{ project.title }}</h2>
    
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
      isProjectShown: false
    }
  },

  mounted() {
    let options = { threshold: 1.0 }

    let observer = new IntersectionObserver(this.handleObserver, options);
    observer.observe(this.$el);
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