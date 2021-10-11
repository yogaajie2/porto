<template>
  <ZoomIn @after-enter="isSubtitleShown = true; $nuxt.$emit('startHeaderAnimation')">
    <section
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

        <transition
          enter-class="opacity-0 -translate-x-4"
          enter-active-class="transition transform duration-500"
          enter-to-class="opacity-100 -translate-x-0"
        >
          <CTA v-show="isCTAShown" />
        </transition>
      </div>
    </section>
  </ZoomIn>
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
    this.$nuxt.$on('emitShowContents', this.showContents);
  },

  methods: {
    showContents() { this.isContentShown = true; }
  }
}
</script>
