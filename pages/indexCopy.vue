<template>
  <main>
    <transition
      enter-class="opacity-0 scale-75"
      enter-active-class="transition transform duration-500"
      enter-to-class="opacity-100 scale-100"
      @after-enter="isSubtitleShown = true; $nuxt.$emit('startHeaderAnimation');"
    >
      <section
        class="bg-primary-light pt-20 lg:mt-24"
        v-show="isContentShown"
      >
        <div class="h-screen space-y-8 px-8 py-20 md:px-16 lg:container lg:mx-auto lg:px-24 xl:px-32">
          <transition
            enter-class="opacity-0"
            enter-active-class="transition-opacity duration-300"
            enter-to-class="opacity-100"
            @after-enter="isTitleShown = true"
          >
            <h3
              class="opacity-0 text-gray-400"
              v-show="isSubtitleShown"
            >Welcome, we are Momentum.</h3>
          </transition>

          <transition
            enter-class="opacity-0 translate-y-4"
            enter-active-class="transition transform duration-500"
            enter-to-class="opacity-100 translate-y-0"
            @after-enter="isCTAShown = true"
          >
            <h1 v-show="isTitleShown">We design mindful user experiences & beautiful interfaces.</h1>
          </transition>

          <transition
            enter-class="opacity-0 -translate-x-4"
            enter-active-class="transition transform duration-500"
            enter-to-class="opacity-100 -translate-x-0"
          >
            <CTA v-show="isCTAShown" />
          </transition>
        </div>
      </section>
    </transition>

    <ProjectList />
    <Skills />
    <Process />
  </main>
</template>

<script>
export default {
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
