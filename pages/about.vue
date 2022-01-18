<template>
  <main>
    <PageHeader
      page-subtitle="Fast learning and highly adaptable."
      page-title="Always curious, constantly learning."
    />

    <section class="container py-12 lg:py-20 xl:py-24">
      <SectionTitle 
        section-title="About me"
        section-subtitle="Hello, I am Yoga Prasetya"
      />
      
      <div class="flex flex-col space-y-8 md:space-y-12 lg:flex-row lg:items-center lg:justify-between lg:space-x-12 lg:space-y-0 xl:space-x-40">
        <IntersectionObserverTarget
          :threshold="1"
          @on-intersecting="handleIntersectingPhoto"
        >
          <SlideUp>
            <img
              v-show="isPhotoShown"
              src="https://i.imgur.com/ffHVIPH.png"
              class="md:mx-auto md:w-1/2 lg:w-auto"
            >
          </SlideUp>
        </IntersectionObserverTarget>

        <IntersectionObserverTarget
          :threshold="1"
          class="h-108 space-y-4 md:h-72 md:mx-auto md:w-10/12 lg:h-90 lg:space-y-8 xl:h-122 xl:w-5/12 xl:text-lg"
          @on-intersecting="handleIntersectingAbout"
        >
          <FadeIn @after-enter="isSecondParagraphShown = true">
            <p v-if="isFirstParagraphShown">
              I am a front-end developer based in the Greater Jakarta Area, Indonesia where I have been working for more than 2 years.
            </p>
          </FadeIn>
          
          <FadeIn @after-enter="isThirdParagraphShown = true">
            <p v-if="isSecondParagraphShown">
              I have worked on projects both personally and together in teams, and I consider every project as an opportunity to learn, collaborate, and further improve my skills.
            </p>
          </FadeIn>

          <FadeIn @after-enter="isFourthParagraphShown = true">
            <p v-if="isThirdParagraphShown">
              I primarily use <a
                href="https://vuejs.org/"
                target="_blank"
                class="underline transition-colors duration-200 hover:text-tertiary"
              >Vue.js</a> together with <a
                href="https://nuxtjs.org/"
                target="_blank"
                class="underline transition-colors duration-200 hover:text-tertiary"
              >Nuxt.js</a> as the go-to framework. I also prefer using <a
                href="https://tailwindcss.com/"
                target="_blank"
                class="underline transition-colors duration-200 hover:text-tertiary"
              >Tailwind CSS</a> to help maintain my design systems.
            </p>
          </FadeIn>

          <FadeIn>
            <p v-if="isFourthParagraphShown">
              I emphasize the use of subtle motions and animations in my projects to spice up static UI/UX a little bit.
            </p>
          </FadeIn>
        </IntersectionObserverTarget>
      </div>
    </section>

    <!-- <Skills /> -->
    <KeyValues />
    <BottomQuestion />
  </main>
</template>

<script>
export default {
  data() {
    return {
      isPhotoShown: false,
      isFirstParagraphShown: false,
      isSecondParagraphShown: false,
      isThirdParagraphShown: false,
      isFourthParagraphShown: false
    }
  },

  head: { titleTemplate: '%s | About' },

  methods: {
    handleIntersectingPhoto(entry, unobserve) {
      if (entry.isIntersecting) {
        this.isPhotoShown = true;
        unobserve();
      }
    },

    handleIntersectingAbout(entry, unobserve) {
      if (entry.isIntersecting) {
        this.isFirstParagraphShown = true;
        unobserve();
      }
    }
  }
}
</script>
