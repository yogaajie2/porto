<template>
  <section>
    <div
      v-show="isPlaceholderShown"
      class="min-h-screen"
    ></div>

    <ZoomIn @after-enter="isSubtitleShown = true; $nuxt.$emit('startHeaderAnimation')">
      <div
        class="min-h-screen bg-primary-light pt-20 lg:mt-20"
        v-show="isContentShown"
      >
        <div class="h-screen space-y-8 container mx-auto px-8 py-20 md:px-16 lg:px-24 xl:px-32">
          <FadeIn @after-enter="isTitleShown = true">
            <h3
              class="opacity-0 text-gray-400"
              v-show="isSubtitleShown"
            >{{ pageSubtitle }}</h3>
          </FadeIn>
          
          <SlideUp @after-enter="isCTAShown = true">
            <h1 v-show="isTitleShown">{{ pageTitle }}</h1>
          </SlideUp>
  
          <SlideRight>
            <CTA v-show="isCTAShown" />
          </SlideRight>
        </div>
      </div>
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
      isPlaceholderShown: true,
      isContentShown: false,
      isSubtitleShown: false,
      isTitleShown: false,
      isCTAShown: false
    };
  },

  mounted() {
    this.$nuxt.$on('emitShowContents', this.showContents);
  },

  methods: {
    showContents() {
      this.isPlaceholderShown = false;
      this.isContentShown = true; 
    }
  }
}
</script>
