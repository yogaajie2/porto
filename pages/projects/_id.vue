<template>
  <main>
    <ZoomIn @after-enter="isTitleShown = true; $nuxt.$emit('startHeaderAnimation')">
      <section
        class="min-h-screen relative"
        v-show="isContentShown"
      >
        <img
          :src="headerBackground"
          class="h-screen w-screen filter blur lg:mx-auto lg:w-auto"
        />

        <div class="absolute bottom-0 w-full bg-primary bg-opacity-40">
          <div class="min-h-80 container py-16 space-y-4 text-secondary">
            <SlideUp @after-enter="isSubtitleShown = true">
              <h1 v-show="isTitleShown">{{ project.title }}</h1>
            </SlideUp>
            
            <FadeIn>
              <h4 v-show="isSubtitleShown">{{ project.subtitle }}</h4>
            </FadeIn>
          </div>
        </div>
      </section>
    </ZoomIn>

    <section class="container grid py-16 gap-y-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16 xl:py-28 xl:text-lg">
      <div
        v-for="(value, index) in project.overview"
        :key="index"
      >
        <h6 class="mb-2">{{ index }}</h6>
        <p v-if="index != 'address'">{{ value }}</p>

        <a
          v-else
          :href="value"
          target="blank"
          class="underline transition-colors duration-200 hover:text-tertiary"
        >{{ value }}</a>
      </div>
    </section>

    <!-- <section
      v-for="(content, index) in project.contents"
      :key="index"
      class="space-y-8 pb-16 bg-secondary text-primary lg:space-y-16"
    > -->
      <section class="py-8 bg-secondary text-primary xl:py-12">
        <div class="container">
          <h2 class="mb-8 font-heading text-center xl:mb-12">Gallery</h2>
  
          <div class="space-y-8">
            <img
              v-for="(screenshot, index) in project.screenshots"
              :key="index"
              :src="screenshot"
              class="mx-auto md:h-96"
            />
          </div>
        </div>
      </section>
    <!-- </section> -->

    <section class="container py-24">
      <h3>Next Project:</h3>

      <NuxtLink
        :to="nextProject.id"
        class="group flex items-center mb-16 font-heading text-tertiary"
        @click.native="$nuxt.$emit('showTransition')"
      >
        <!-- <div class="font-heading text-tertiary lg:mb-4">
          <span class="logo-on-hover hidden lg:block lg:text-4xl xl:text-5xl">//</span>
          <h2 class="shift-right-16 font-bold translate-x-0 lg:font-normal">{{ project.title }}</h2>
        </div> -->

        <span class="logo-on-hover hidden lg:block lg:text-4xl xl:text-5xl">//</span>

        <!-- <div class="shift-right-16 font-bold translate-x-0 lg:font-normal"> -->
          <h2 class="shift-right-16 font-bold translate-x-0 lg:font-normal">{{ nextProject.title }}</h2>
          
          <!-- <font-awesome-icon
            :icon="['fas', 'angle-double-right']"
            class="text-5xl text-tertiary"
          /> -->
        <!-- </div> -->
      </NuxtLink>

      <NuxtLink
        to="/projects"
        @click.native="$nuxt.$emit('showTransition')"
      >
        <p class="font-heading font-bold text-xl underline transition-colors duration-200 hover:text-tertiary">Back to all projects</p>
      </NuxtLink>
    </section>

    <BottomQuestion />
  </main>
</template>

<script>
import data from "~/projects.json";

export default {
  data() {
    return {
      isContentShown: false,
      headerBackground: '',
      isSubtitleShown: false,
      isTitleShown: false,
      projects: data.projects
    };
  },

  computed: {
    project() {
      return this.projects.find(project => project.id === this.$route.params.id);
    },

    nextProject() {
      return this.projects[this.findIndex()];
    }
  },

  mounted() {
    this.$nuxt.$on('emitShowContents', this.showContents);

    let mediaQuery = window.matchMedia('(min-width: 1024px)');
    this.determineHeaderBackground(mediaQuery);
    mediaQuery.addEventListener('change', this.determineHeaderBackground);
  },

  methods: {
    showContents() { this.isContentShown = true; },

    determineHeaderBackground(mediaQuery) {
      if (mediaQuery.matches) {
        this.headerBackground = this.project.thumbnails.desktop;
      } else {
        this.headerBackground = this.project.thumbnails.mobile;
      }
    },

    findIndex() {
      let currentIndex = this.projects.indexOf(this.project);
      
      if (currentIndex != this.projects.length - 1) {
        return currentIndex + 1;
      } else {
        return 0;
      }
    }
  },

  head() {
    return { titleTemplate: '%s | ' + this.project.title + ' Project' };
  }
}
</script>
