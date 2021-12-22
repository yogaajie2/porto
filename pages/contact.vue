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
        <div class="grid gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-y-32">
          <input
            type="text"
            placeholder="What's your name?"
            class="bg-primary border-b px-4"
          />

          <input
            type="email"
            placeholder="What's your email?"
            class="bg-primary border-b px-4"
          />

          <textarea
            rows="5"
            placeholder="Tell me more about the project"
            class="bg-primary border-b px-4 md:col-span-2"
          ></textarea>
        </div>

        <button class="cta group flex md:mx-auto">
          <span class="logo-on-hover hidden lg:block">//</span>
          <span class="shift-right-8 border-b border-tertiary translate-x-0">Send Message</span>
        </button>
      </form>

      <p class="border-t mb-16 pt-4 md:pt-8 md:text-center lg:mb-8 lg:pt-16">Or click the button below to view my resume</p>

      <a href="https://drive.google.com/file/d/1-EPmr6BzppChbAd5sWvxVvJS6tR8ZymV/view?usp=sharing" target="_blank">
        <button class="cta group flex md:mx-auto">
          <span class="logo-on-hover hidden lg:block">//</span>
          <span class="shift-right-8 border-b border-tertiary translate-x-0">View Resume</span>
        </button>
      </a>
    </section>
  </main>
</template>

<script>
export default {
  head: { titleTemplate: '%s | Contact' },

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
