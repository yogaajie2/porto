<template>
  <main>
    <ZoomIn @after-enter="isTitleShown = true; $nuxt.$emit('startHeaderAnimation')">
      <section
        class="min-h-screen relative"
        v-show="isContentShown"
      >
        <img
          src="https://via.placeholder.com/1920x1080"
          class="h-screen w-screen"
        />

        <div class="absolute bottom-0 w-full">
          <div class="min-h-80 container mx-auto px-8 py-16 space-y-4 text-primary md:px-16 lg:px-24 xl:px-32">
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

    <section class="space-y-8 container mx-auto px-8 py-16 md:flex md:flex-wrap md:justify-between md:space-y-0 md:pb-8 md:px-16 lg:px-24">
      <div
        v-for="(value, index) in project.overview"
        :key="index"
        class="md:w-5/12 md:pb-8"
      >
        <h6 class="mb-4">{{ index }}</h6>
        <p v-if="index != 'address'">{{ value }}</p>

        <a
          v-else
          :href="value"
          target="blank"
          class="underline"
        >{{ value }}</a>
      </div>
    </section>

    <section
      v-for="(content, index) in project.contents"
      :key="index"
      class="space-y-8 pb-16 bg-secondary text-primary lg:space-y-16"
    >
      <img
        :src="content.image"
        class="w-screen"
      />

      <div class="space-y-16 container mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        <div class="items-center space-y-4 lg:flex lg:space-x-16 lg:space-y-0">
          <h2>{{ content.heading }}</h2>
          <p class="lg:w-3/5">{{ content.paragraph }}</p>
        </div>

        <div class="space-y-8 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 lg:items-center lg:space-y-0">
          <img
            v-for="(screenshot, index) in content.screenshots"
            :key="index"
            :src="screenshot"
            class="mx-auto"
          />
        </div>
      </div>
    </section>

    <img
      :src="project.footerImage"
      class="w-screen"
    />

    <section class="container mx-auto px-8 py-24 md:px-16 lg:px-24 xl:px-32">
      <h3>Next Project:</h3>

      <NuxtLink
        :to="nextProject.id"
        class="flex items-center mb-16"
        @click.native="$nuxt.$emit('showTransition')"
      >
        <h2 class="text-tertiary mr-4">{{ nextProject.title }}</h2>
        
        <font-awesome-icon
          :icon="['fas', 'angle-double-right']"
          class="text-tertiary"
        />
      </NuxtLink>

      <NuxtLink
        to="/projects"
        @click.native="$nuxt.$emit('showTransition')"
      >
        <p class="font-heading font-bold text-xl underline">Back to all projects</p>
      </NuxtLink>
    </section>
  </main>
</template>

<script>
import data from "~/projects.json";

export default {
  data() {
    return {
      isContentShown: false,
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
  },

  methods: {
    showContents() { this.isContentShown = true; },

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
