<template>
  <section class="text-secondary bg-primary-lighter">
    <IntersectionObserverTarget
      :threshold="0.5"
      class="container py-12 lg:py-16 xl:py-24"
      @on-intersecting="handleIntersecting"
    >
            <SlideUp @after-enter="isCTAShown = true">
              <h2
                v-show="isQuestionShown"
                class="mb-8 lg:mb-16 xl:mb-20"
              >Have a project?</h2>
            </SlideUp>
  
            <SlideRight>
              <CTA v-show="isCTAShown" />
            </SlideRight>
          </div>
    </IntersectionObserverTarget>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isPlaceholderShown: true,
      isContentShown: false,
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
