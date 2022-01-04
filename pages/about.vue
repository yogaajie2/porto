<template>
  <main>
    <PageHeader
      pageSubtitle="Fast learning and highly adaptable."
      pageTitle="Always curious, constantly learning."
    />

    <section class="container py-12 lg:py-20 xl:py-24">
      <SectionTitle 
        sectionTitle="About me"
        sectionSubtitle="Hello, I am Yoga Prasetya"
      />
      
      <div class="flex flex-col space-y-8 md:space-y-12 lg:flex-row lg:items-center lg:space-x-12 lg:space-y-0 xl:space-x-40">
        <IntersectionObserverTarget
          :threshold="1"
          @on-intersecting="handleIntersectingPhoto"
        >
        <img
              v-if="isPhotoShown"
          src="https://i.imgur.com/5ioqq3c.png"
              class="md:mx-auto md:w-1/2 lg:w-auto xl:w-3/4"
        />
        
            <Placeholder
              v-else
              class="h-78 md:h-80 lg:h-82 xl:h-88"
            />
        </IntersectionObserverTarget>

        <IntersectionObserverTarget
          :threshold="1"
          class="h-108 space-y-4 md:h-72 md:mx-auto md:w-10/12 lg:h-90 lg:space-y-8 xl:h-122 xl:w-5/12 xl:text-lg"
          @on-intersecting="handleIntersectingAbout"
        >
        </IntersectionObserverTarget>
      </div>
    </section>

    <Skills />
    <KeyValues />
    <BottomQuestion />
  </main>
</template>

<script>
export default {
  head: { titleTemplate: '%s | About' },

  data() {
    return {
      isPhotoShown: false,
      isFirstParagraphShown: false,
    }
  },

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
