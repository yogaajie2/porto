<template>
  <IntersectionObserverTarget
    :threshold="1"
    class="group mb-20 lg:w-5/12"
    data-cy="project-wrapper"
    @on-intersecting="handleIntersecting"
  >
    <SlideUp>
      <NuxtLink
        v-if="isProjectShown"
        :to="`projects/${ project.id }`"
        class="block"
        data-cy="project"
        @click.native="$nuxt.$emit('showTransition')"
      >
        <div class="h-43 mb-11 relative lg:h-56">
          <img
            :src="project.thumbnails.desktop"
            class="rounded-lg w-10/12"
          >

          <img
            :src="project.thumbnails.mobile"
            class="absolute right-0 rounded-lg top-1/4 w-1/5"
          >
        </div>
        
        <h4 class="lg:w-3/4">{{ project.overview.role }}</h4>

        <div class="font-heading text-primary lg:mb-4">
          <span class="logo-on-hover hidden text-2xl lg:block lg:font-normal lg:text-3xl xl:text-4xl">//</span>
          <h2 class="shift-right-12 font-bold translate-x-0 lg:font-normal">
            {{ project.title }}
          </h2>
        </div>

        <p class="none lg:block lg:text-gray-500 lg:text-xl">
          {{ project.subtitle }}
        </p>
      </NuxtLink>
    
      <Placeholder
        v-else
        class="h-96"
      />
    </SlideUp>
  </IntersectionObserverTarget>
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
      isProjectShown: false,
    }
  },

  methods: {
    handleIntersecting(entry, unobserve) {
      if (entry.isIntersecting) {
        this.isProjectShown = true;
        unobserve();
      }
    }
  }
}
</script>