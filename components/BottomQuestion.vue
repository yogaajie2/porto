<template>
  <section class="text-secondary bg-primary-lighter">
    <IntersectionObserverTarget
      :threshold="0.5"
      class="container py-12 lg:py-16 xl:py-24"
      @on-intersecting="handleIntersecting"
    >
      <div class="h-22 md:text-center lg:h-32 lg:text-left lg:space-y-0 xl:h-38">
        <SlideUp @after-enter="isCTAShown = true">
          <h2
            v-if="isQuestionShown"
            class="mb-8 lg:mb-16 xl:mb-20"
          >
            Have a project?
          </h2>
        </SlideUp>

        <SlideRight>
          <CTA v-if="isCTAShown" />
        </SlideRight>
      </div>
    </IntersectionObserverTarget>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isQuestionShown: false,
      isCTAShown: false,
    }
  },

  methods: {
    handleIntersecting(entry, unobserve) {
      if (entry.isIntersecting) {
        this.isQuestionShown = true;
        unobserve();
      }
    }
  }
}
</script>
