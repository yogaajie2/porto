<template>
  <main>
    <PageHeader
      pageSubtitle="Let's work and collaborate together."
      pageTitle="Have an interesting project in mind?"
    />

    <section
      id="contactForm"
      class="container py-12 md:py-20"
    >
      <SectionTitle 
        sectionTitle="Let's talk"
        sectionSubtitle="Hello! Let's talk about your new project"
      />
      
      <p class="mb-8 lg:mb-16">
        Fill in the form to contact me or send an email to
        <a
          href="mailto:yogaajie2@gmail.com"
          class="font-bold underline"
        >yogaajie2@gmail.com</a>
      </p>

      <form
        action=""
        class="mb-20 space-y-16 lg:mb-32 lg:space-y-32"
      >
          <FadeIn @after-enter="isInputEmailShown = true">
            <input
              v-if="isInputNameShown"
              type="text"
              placeholder="What's your name?"
              class="bg-primary border-b px-4"
            />

            <div
              v-else
              class="h-7"
            />
          </FadeIn>

          <FadeIn @after-enter="isTextAreaShown = true">
            <input
              v-if="isInputEmailShown"
              type="email"
              placeholder="What's your email?"
              class="bg-primary border-b px-4"
            />

            <div
              v-else
              class="h-7"
            />
          </FadeIn>

          <FadeIn @after-enter="isSendMessageButtonShown = true">
            <textarea
              v-if="isTextAreaShown"
              rows="5"
              placeholder="Tell me more about the project"
              class="bg-primary border-b px-4 md:col-span-2"
            />

            <div
              v-else
              class="h-31"
            />
          </FadeIn>

        <SlideRight>
          <button
            v-if="isSendMessageButtonShown"
            class="cta group flex md:mx-auto"
          >
            <span class="logo-on-hover hidden lg:block">//</span>
            <span class="shift-right-8 border-b border-tertiary translate-x-0">Send Message</span>
          </button>

          <div
            v-else
            class="h-6 lg:h-7"
          />
        </SlideRight>
      </form>

      <p class="border-t mb-16 pt-4 md:pt-8 md:text-center lg:mb-8 lg:pt-16">Or click the button below to view my resume</p>

        <a
          href="https://drive.google.com/file/d/1-EPmr6BzppChbAd5sWvxVvJS6tR8ZymV/view?usp=sharing"
          target="_blank"
          class="h-7"
        >
          <SlideRight>
            <button
              v-if="isViewResumeButtonShown"
              class="cta group flex md:mx-auto"
            >
              <span class="logo-on-hover hidden lg:block">//</span>
              <span class="shift-right-8 border-b border-tertiary translate-x-0">View Resume</span>
            </button>
          </SlideRight>
        </a>
    </section>
  </main>
</template>

<script>
export default {
  head: { titleTemplate: '%s | Contact' },

  data() {
    return{
      isInputNameShown: false,
      isInputEmailShown: false,
      isTextAreaShown: false,
      isSendMessageButtonShown: false,
      isViewResumeButtonShown: false
    }
  },

  mounted() {
    this.$nuxt.$on('emitScrollToContactForm', this.scrollToContactForm);
  },

  methods: {
    scrollToContactForm() {
      this.$el.querySelector('#contactForm').scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
</script>
