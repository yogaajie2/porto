<template>
  <footer>
    <section
      v-show="$nuxt.$route.path != '/contact'"
      class="text-secondary bg-primary-lighter "
    >
      <div class="container mx-auto px-8 pt-12 pb-12 md:px-16 lg:px-24 xl:px-32">
        <!-- <div class="space-y-8 md:space-y-24 lg:flex lg:items-center lg:justify-between lg:space-y-0"> -->
          <div
            v-show="isPlaceholderShown"
            class="h-24"
          ></div>
  
          <div v-show="isContentShown">
            <div class="min-h-24 md:text-center lg:text-left lg:space-y-0">
              <SlideUp @after-enter="isCTAShown = true">
                <h2
                  v-show="isQuestionShown"
                  class="mb-8"
                >Have a project?</h2>
              </SlideUp>
    
              <SlideRight>
                <CTA v-show="isCTAShown" />
              </SlideRight>
            </div>
          </div>
  
          <!-- <div class="flex mb-12 space-x-16 text-lg md:justify-center md:space-x-24 xl:space-x-32">
            <nav class="flex flex-col space-y-4">
              <p class="font-bold mb-2">Social</p>
  
              <a
                href="https://www.instagram.com/yogaajie2/"
                target="_blank"
              >instagram</a>
  
              <a
                href="https://www.linkedin.com/in/yogajie"
                target="_blank"
              >linkedin</a>
              
              <a
                href="https://github.com/yogaajie2"
                target="_blank"
              >github</a>
            </nav>
  
            <nav class="flex flex-col space-y-4 md:text-right lg:text-left">
              <p class="font-bold mb-2">Navigation</p>
  
              <NuxtLink
                to="/about"
                @click.native="$nuxt.$emit('showTransition')"
              >about</NuxtLink>
  
              <NuxtLink
                to="/projects"
                @click.native="$nuxt.$emit('showTransition')"
              >projects</NuxtLink>
  
              <NuxtLink
                to="/contact"
                @click.native="$nuxt.$emit('showTransition')"
              >contact</NuxtLink>
            </nav>
          </div>
        </div> -->
      </div>
    </section>
    
    <section class="text-primary bg-secondary md:px-16 lg:px-24 xl:px-32">
      <div class="container flex flex-col justify-center py-4 space-y-4">
        <nav class="flex justify-center text-xl">
          <a
            href="https://www.instagram.com/yogaajie2/"
            target="_blank"
            class="p-4 rounded transition duration-200 hover:bg-primary-lighter hover:text-tertiary"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
  
          <a
            href="https://www.linkedin.com/in/yogajie"
            target="_blank"
            class="p-4 rounded transition duration-200 hover:bg-primary-lighter hover:text-tertiary"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          
          <a
            href="https://github.com/yogaajie2"
            target="_blank"
            class="p-4 rounded transition duration-200 hover:bg-primary-lighter hover:text-tertiary"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </nav>
  
        <span class="block font-heading text-center">// Carpe Momentum</span>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isPlaceholderShown: true,
      isContentShown: false,
      isQuestionShown: false,
      isCTAShown: false,
      observer: null
    }
  },

  mounted() {
    let options = { threshold: 0.5 }

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
          this.isContentShown = true;
          this.isQuestionShown = true;
        }
      });
    }
  }
}
</script>
