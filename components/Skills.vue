<template>
  <section class="bg-secondary">
    <IntersectionObserverTarget
      :threshold="1"
      class="container py-12 text-primary"
      @on-intersecting="handleIntersecting"
    >
      <SectionTitle 
        sectionTitle="Practical Skills"
        sectionSubtitle="I strive to incorporate new & emerging technologies to my tech stack"
      />

      <div class="lg:flex lg:items-end lg:justify-between">
        <div
          v-show="isPlaceholderShown"
          class="h-40"
        ></div>

        <div
          v-show="isListShown"
          class="flex justify-between mb-12 md:mb-20 lg:flex-col lg:mb-0 lg:space-y-8"
        >
          <div>
            <p class="font-bold mb-2 lg:text-2xl">Tools & Languages</p>
            
            <transition-group
              enter-class="opacity-0 translate-y-4"
              enter-active-class="transition transform duration-500"
              enter-to-class="opacity-100 translate-y-0"
            >
              <p
                v-for="language in languages"
                v-show="isListShown"
                :key="language"
              >{{ language }}</p>
            </transition-group>
          </div>

          <div class="md:text-right lg:text-left">
            <p class="font-bold mb-2 lg:text-2xl">Frameworks</p>
            
            <transition-group
              enter-class="opacity-0 translate-y-4"
              enter-active-class="transition transform duration-500"
              enter-to-class="opacity-100 translate-y-0"
            >
              <p
                v-for="framework in frameworks"
                v-show="isListShown"
                :key="framework"
              >{{ framework }}</p>
            </transition-group>
          </div>
        </div>
      </div>
    </IntersectionObserverTarget>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isPlaceholderShown: true,
      isListShown : false,

      languages: [
        'HTML5 / CSS3',
        'JavaScript ES6',
        'PHP',
        'Git',
        'Wordpress'
      ],

      frameworks: [
        'Vue.js',
        'Nuxt.js',
        'Laravel',
        'Tailwind CSS',
        'Bootstrap'
      ],
    }
  },

  methods: {
    handleIntersecting(entry, unobserve) {
        if (entry.isIntersecting) {
          this.isPlaceholderShown = false;
          this.isListShown = true;
        unobserve();
        }
    }
  }
}
</script>
