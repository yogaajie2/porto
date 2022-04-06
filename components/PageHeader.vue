<template>
  <section>
    <ZoomIn @after-enter="isSubtitleShown = true; $nuxt.$emit('startHeaderAnimation')">
      <div
        v-if="isContentShown"
        key="content"
        class="h-screen pt-40 bg-primary-dark z-0 md:pt-60"
        data-cy="page-header"
      >
        <div class="container h-screen space-y-8">
          <FadeIn @after-enter="isTitleShown = true">
            <h3
              v-if="isSubtitleShown"
              class="text-gray-400"
              data-cy="page-subtitle"
            >
              {{ pageSubtitle }}
            </h3>
          </FadeIn>
          
          <SlideUp @after-enter="isCTAShown = true">
            <h1
              v-if="isTitleShown"
              data-cy="page-title"
            >
              {{ pageTitle }}
            </h1>
          </SlideUp>
  
          <SlideRight>
            <CTA v-if="isCTAShown" />
          </SlideRight>
        </div>
      </div>
      
      <Placeholder
        v-else
        class="h-screen pt-40 bg-primary-dark md:pt-60"  
      />
    </ZoomIn>
  </section>
</template>

<script>
export default {
  props: {
    pageSubtitle: {
      type: String,
      required: true
    },

    pageTitle: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isContentShown: false,
      isSubtitleShown: false,
      isTitleShown: false,
      isCTAShown: false
    };
  },

  mounted() {
    this.$nuxt.$on('emitShowContents', () => this.isContentShown = true);
  }
}
</script>
