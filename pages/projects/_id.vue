<template>
  <main>
    <section>
      <ZoomIn @after-enter="isTitleShown = true; $nuxt.$emit('startHeaderAnimation')">
        <div
          v-if="isContentShown"
          key="content"
          class="relative"
        >
          <img
            :src="headerBackground"
            class="h-screen w-screen filter blur lg:mx-auto lg:w-auto"
          />
  
          <div class="absolute bottom-0 w-full bg-primary bg-opacity-40">
            <div class="container h-60 py-16 space-y-4 text-secondary md:h-64 lg:h-80">
              <SlideUp @after-enter="isSubtitleShown = true">
                <h1 v-show="isTitleShown">{{ project.title }}</h1>
              </SlideUp>
              
              <FadeIn>
                <h4 v-show="isSubtitleShown">{{ project.subtitle }}</h4>
              </FadeIn>
            </div>
          </div>
        </div>

        <Placeholder
          v-else
          class="h-screen"  
        />
      </ZoomIn>
    </section>

    <section>
      <IntersectionObserverTarget
        :threshold="1"
        class="container grid py-16 gap-y-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16 xl:py-28 xl:text-lg"
        @on-intersecting="handleIntersectingOverview"
      >
        <div
          v-for="(value, index) in project.overview"
          :key="index"
          class="h-20 md:h-14"
        >
          <SlideUp @after-enter="isOverviewValueShown = true">
            <h6
              v-if="isOverviewIndexShown"
              class="mb-2"
            >{{ index }}</h6>
          </SlideUp>

          <FadeIn>
            <div v-if="isOverviewValueShown">
              <p v-if="index != 'address'">{{ value }}</p>
      
              <a
                v-else
                :href="value"
                target="blank"
                class="underline transition-colors duration-200 hover:text-tertiary"
              >{{ value }}</a>
            </div>
          </FadeIn>
        </div>
      </IntersectionObserverTarget>
    </section>

    <section class="py-8 bg-primary-light xl:py-12">
      <div class="container">
        <h2 class="mb-8 font-heading text-center xl:mb-12">Gallery</h2>

        <div class="space-y-8">
          <img
            v-for="(screenshot, index) in project.screenshots"
            :key="index"
            :src="screenshot"
            class="h-48 mx-auto md:h-64 lg:h-96"
          />
        </div>
      </div>
    </section>

    <section class="container h-85 py-24">
      <h3>Next Project:</h3>

      <NuxtLink
        :to="nextProject.id"
        class="group flex items-center mb-16 font-heading text-tertiary"
        @click.native="$nuxt.$emit('showTransition')"
      >
        <span class="logo-on-hover hidden lg:block lg:text-4xl xl:text-5xl">//</span>
        <h2 class="shift-right-16 font-bold translate-x-0 lg:font-normal">{{ nextProject.title }}</h2>
      </NuxtLink>

      <IntersectionObserverTarget
        :threshold="1"
        @on-intersecting="handleIntersectingBackToAllProjects"
      >
        <SlideRight>
          <NuxtLink
            v-if="isBackToAllProjectsShown"
            to="/projects"
            class="block"
            @click.native="$nuxt.$emit('showTransition')"
          >
            <p class="font-heading font-bold text-xl underline transition-colors duration-200 hover:text-tertiary">Back to all projects</p>
          </NuxtLink>
        </SlideRight>
      </IntersectionObserverTarget>
    </section>

    <BottomQuestion />
  </main>
</template>

<script>
import data from "~/projects.json";

export default {
  head() {
    return { titleTemplate: '%s | ' + this.project.title + ' Project' };
  },

  data() {
    return {
      isContentShown: false,
      headerBackground: '',
      isSubtitleShown: false,
      isTitleShown: false,
      projects: data.projects,
      isOverviewIndexShown: false,
      isOverviewValueShown: false,
      isBackToAllProjectsShown: false
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

    handleIntersectingOverview(entry, unobserve) {
      if (entry.isIntersecting) {
        this.isOverviewIndexShown = true;
        unobserve();
      }
    },

    handleIntersectingBackToAllProjects(entry, unobserve) {
      if (entry.isIntersecting) {
        this.isBackToAllProjectsShown = true;
        unobserve();
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
  }
}
</script>
