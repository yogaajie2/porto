<template>
  <section class="bg-primary px-8 py-12 text-secondary md:px-16 lg:px-24 xl:px-32">
    <h3 class="mb-4">Selected Projects</h3>
    <h2 class="mb-20">Our Projects</h2>
    
    <div class="lg:flex lg:flex-wrap lg:justify-between">
      <Project
        v-for="(project, index) in projectsLimited"
        :key="index"
        :project="project"
      />
    </div>

    <div class="mb-20 text-center">
      <NuxtLink
        to="/projects"
        class="items-center inline-flex"
        @click.native="$nuxt.$emit('showTransition')"
      >
        <p class="text-tertiary border-tertiary mr-4 border-b font-heading font-bold pb-1 uppercase lg:text-lg;">View all works</p>
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
    projectsLimited() { return this.projects.slice(0, 3); }
  }
}
</script>
