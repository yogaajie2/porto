<template>
  <section>
    <ZoomIn @after-enter="isSubtitleShown = true; $nuxt.$emit('startHeaderAnimation')">
      <div
        v-if="isContentShown"
        key="content"
        class="h-screen pt-40 bg-primary-light md:pt-60"
      >
        <div class="container h-screen space-y-8">
          <FadeIn @after-enter="isTitleShown = true">
            <h3
              class="text-gray-400"
              v-if="isSubtitleShown"
            >{{ pageSubtitle }}</h3>
          </FadeIn>
          
          <SlideUp @after-enter="isCTAShown = true">
            <h1 v-if="isTitleShown">{{ pageTitle }}</h1>
          </SlideUp>
  
          <SlideRight>
            <CTA v-if="isCTAShown" />
          </SlideRight>
        </div>
      </div>
      
      <Placeholder
        v-else
        class="h-screen pt-40 bg-primary-light md:pt-60"  
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
