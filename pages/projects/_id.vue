<template>
  <main>
    <ZoomIn @after-enter="isTitleShown = true; $nuxt.$emit('startHeaderAnimation')">
      <section
        class="min-h-screen relative"
        v-show="isContentShown"
      >
        <img
          src="https://via.placeholder.com/375x790"
          class="h-screen"
        />

        <div class="absolute bottom-0 min-h-80 px-8 py-16 space-y-4 text-primary">
          <SlideUp @after-enter="isSubtitleShown = true">
            <h1 v-show="isTitleShown">{{ project.title }}</h1>
          </SlideUp>
          
          <FadeIn>
            <h4 v-show="isSubtitleShown">{{ project.subtitle }}</h4>
          </FadeIn>
        </div>
      </section>
    </ZoomIn>

    <section class="space-y-8 px-8 py-16">
      <div
        v-for="(value, index) in project.overview"
        :key="index"
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
      class="pb-16 space-y-8 bg-secondary text-primary"
    >
      <img :src="content.image" />

      <div class="px-8 space-y-16">
        <div class="space-y-4">
          <h2>{{ content.heading }}</h2>
          <p>{{ content.paragraph }}</p>
        </div>

        <div class="space-y-8">
          <img
            v-for="(screenshot, index) in content.screenshots"
            :key="index"
            :src="screenshot"
          />
        </div>
      </div>
    </section>

    <img :src="project.footerImage" />

    <section class="px-8 py-24">
      <h3>Next Project:</h3>

      <NuxtLink
        to="/projects/flygoal"
        class="flex items-center mb-16"
      >
        <h2 class="text-tertiary mr-4">Flygoal</h2>
        
        <font-awesome-icon
          :icon="['fas', 'angle-double-right']"
          class="text-tertiary"
        />
      </NuxtLink>

      <NuxtLink to="/projects">
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
    }
  },

  mounted() {
    this.$nuxt.$on('emitShowContents', this.showContents);
  },

  methods: {
    showContents() { this.isContentShown = true; }
  }
}
</script>
