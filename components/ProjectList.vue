<template>
  <section class="bg-dp-0 container py-12 text-secondary">
    <SectionTitle 
      section-title="Work Portfolio"
      section-subtitle="Featured Projects"
    />
    
    <div class="lg:flex lg:flex-wrap lg:justify-between lg:mb-16">
      <ProjectItem
        v-for="(project, index) in projectsLimited"
        :key="index"
        :project="project"
      />
    </div>
    
    <IntersectionObserverTarget
      v-if="!isInProjectsRoute"
      :threshold="1"
      class="mb-14 text-center lg:mb-10"
      @on-intersecting="handleIntersecting"
    >
      <transition
        enter-class="opacity-0"
        enter-active-class="transition duration-500 delay-300"
        enter-to-class="opacity-100"
      >
        <NuxtLink
          v-if="isViewAllProjectsShown"
          to="/projects"
          class="group items-center inline-flex text-primary font-heading font-bold uppercase lg:text-xl"
          data-cy="view-all-projects"
          @click.native="$nuxt.$emit('showTransition')"
        >
          <span class="logo-on-hover hidden lg:block">//</span>
          <p class="shift-right-8 border-b border-primary translate-x-0">
            View all projects
          </p>
        </NuxtLink>
      </transition>
    </IntersectionObserverTarget>
  </section>
</template>

<script>
import data from "~/projects.json";

export default {
  data() {
    return {
      projects: data.projects,
      isViewAllProjectsShown: false
    }
  },

  computed: {
    projectsLimited() {
      return this.showProjects();
    },

    isInProjectsRoute() {
      return this.checkProjectRoute();
    }
  },

  methods: {
    showProjects() {
      if (this.$route.path == '/projects') {
        return this.projects;
      } else {
        return this.projects.slice(0, 3);
      }
    },

    checkProjectRoute() {
      if (this.$route.path === '/projects') {
        return true;
      } else {
        return false;
      }
    },

    handleIntersecting(entry, unobserve) {
      if (entry.isIntersecting) {
        this.isViewAllProjectsShown = true;
        unobserve();
      }
    }
  }
}
</script>
