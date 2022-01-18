<template>
  <section class="bg-secondary">
    <IntersectionObserverTarget
      :threshold="1"
      class="container py-12 text-primary"
      @on-intersecting="handleIntersecting"
    >
      <SectionTitle 
        section-title="Practical Skills"
        section-subtitle="I strive to incorporate new & emerging technologies to my tech stack"
      />

      <div>
        <div
          v-show="isPlaceholderShown"
          class="h-40"
        />

        <div
          v-show="isListShown"
          class="grid mb-12 grid-cols-2 gap-8 md:mb-20 md:grid-cols-3 lg:mt-40 lg:gap-14 xl:mt-60 xl:gap-24"
        >
          <div>
            <p class="font-bold mb-2 lg:text-2xl">
              Tools & Languages
            </p>
            
            <transition-group
              enter-class="opacity-0 translate-y-4"
              enter-active-class="transition transform duration-500 delay-300"
              enter-to-class="opacity-100 translate-y-0"
            >
              <p
                v-for="language in languages"
                v-show="isListShown"
                :key="language"
              >
                {{ language }}
              </p>
            </transition-group>
          </div>

          <div class="lg:text-left">
            <p class="font-bold mb-2 lg:text-2xl">
              Frameworks
            </p>
            
            <transition-group
              enter-class="opacity-0 translate-y-4"
              enter-active-class="transition transform duration-500 delay-300"
              enter-to-class="opacity-100 translate-y-0"
            >
              <p
                v-for="framework in frameworks"
                v-show="isListShown"
                :key="framework"
              >
                {{ framework }}
              </p>
            </transition-group>
          </div>

          <div class="lg:text-left">
            <p class="font-bold mb-2 lg:text-2xl">
              Design
            </p>
            
            <transition-group
              enter-class="opacity-0 translate-y-4"
              enter-active-class="transition transform duration-500 delay-300"
              enter-to-class="opacity-100 translate-y-0"
            >
              <p
                v-for="design in designs"
                v-show="isListShown"
                :key="design"
              >
                {{ design }}
              </p>
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

      designs: [
        'Photoshop',
        'Illustrator'
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
