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
            <h1 v-show="isTitleShown">Top Travel France</h1>
          </SlideUp>
          
          <FadeIn>
            <h4 v-show="isSubtitleShown">Destination Management Company</h4>
          </FadeIn>
        </div>
      </section>
    </ZoomIn>

    <section class="space-y-8 px-8 py-16">
      <div>
        <h6 class="mb-4">Goal</h6>
        <p>I was assigned the task of designing the destination management company website for luxury travel planning in France</p>
      </div>

      <div>
        <h6 class="mb-4">Year</h6>
        <p>2021</p>
      </div>

      <div>
        <h6 class="mb-4">Client</h6>
        <p>Top Travel Italy</p>
      </div>

      <div class="border-b pb-8">
        <h6 class="mb-4">Live Project</h6>
        <a
          href="javascript:void(0)"
          class="underline"
        >toptravelfrance.com</a>
      </div>
    </section>

    <img src="https://via.placeholder.com/375x400" />
    
    <section class="px-8 pb-16 pt-24 bg-secondary text-primary">
      <h2 class="mb-8">A warm and elegant design based on emotions</h2>
      <p>The top travel france design has its roots in a minimal and elegant design capable of expressing the concept of luxury and elegance in accordance with the company's mission</p>
      
      <img
        src="https://via.placeholder.com/439x210"
        class="my-16"
      />

      <h2 class="mb-8">A tiny detailed rebrand</h2>
      <p>I slightly redefined some aspects of the logo using a graceful font to symbolize elegance. I also rearranged the logo on two lines to take advantage of the space in height and insert the different destinations</p>
    </section>

    <img src="https://via.placeholder.com/487x400" />

    <section class="px-8 pb-16 pt-24 bg-secondary text-primary">
      <div class="mb-16 space-y-8">
        <img src="https://via.placeholder.com/439x440" />
        <img src="https://via.placeholder.com/439x440" />
        <img src="https://via.placeholder.com/439x440" />
        <img src="https://via.placeholder.com/439x440" />
        <img src="https://via.placeholder.com/439x440" />
      </div>

      <h2 class="mb-8">User Interface</h2>
      <p>The graphic interface is the synthesis of the concepts expressed first of luxury and elegance by combining warm but at the same time elegant colors, A classic but impactful typography</p>
    </section>

    <img src="https://via.placeholder.com/487x400" />

    <section class="px-8 pb-16 pt-24 bg-secondary text-primary">
      <div class="mb-16 space-y-8">
        <img src="https://via.placeholder.com/439x440" />
        <img src="https://via.placeholder.com/439x440" />
        <img src="https://via.placeholder.com/439x440" />
      </div>
    </section>

    <img src="https://via.placeholder.com/487x400" />

    <section class="px-8 pb-16 pt-24 bg-secondary text-primary">
      <h2 class="mb-8">The site empowers users to discover a new way to travel</h2>
      <p class="mb-16">top travel's goal is to create the best possible experience offering a quality service combined with the insider's approach of a local Team</p>

      <div class="space-y-8">
        <img src="https://via.placeholder.com/439x440" />
        <img src="https://via.placeholder.com/439x440" />
      </div>
    </section>

    <img src="https://via.placeholder.com/487x400" />

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
export default {
  data() {
    return {
      isContentShown: false,
      isSubtitleShown: false,
      isTitleShown: false,
    };
  },

  mounted() {
    this.$nuxt.$on('emitShowContents', this.showContents);
  },

  methods: {
    showContents() { this.isContentShown = true; }
  }
}
</script>
