<template>
  <section class="bg-primary container py-12 text-secondary">
    <SectionTitle 
      sectionTitle="Work Portfolio"
      sectionSubtitle="Featured Projects"
    />
    
    <div class="lg:flex lg:flex-wrap lg:justify-between lg:mb-16">
      <Project
        v-for="(project, index) in projectsLimited"
        :key="index"
        :project="project"
      />
    </div>

    <div
      v-if="this.$route.path != '/projects'"
      class="mb-20 text-center lg:mb-10"
    >
      <NuxtLink
        to="/projects"
        class="group items-center inline-flex text-tertiary font-heading font-bold uppercase lg:text-xl"
        @click.native="$nuxt.$emit('showTransition')"
      >
        <span class="logo-on-hover hidden lg:block">//</span>
        <p class="shift-right-8 border-b border-tertiary translate-x-0">View all projects</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import data from "~/projects.json";

export default {
  data() {
    return { projects: data.projects }
  },

  computed: {
    projectsLimited() { return this.checkRoutePath(); }
  },

  methods: {
    checkRoutePath() {
      if (this.$route.path == '/projects') {
        return this.projects;
      } else {
        return this.projects.slice(0, 3);
      }
    }
  }
}
</script>
