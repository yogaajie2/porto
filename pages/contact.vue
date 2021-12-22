<template>
  <main>
    <PageHeader
      pageSubtitle="Let's work and collaborate together."
      pageTitle="Have an interesting project in mind?"
    />

    <section
      id="contactForm"
      class="container mx-auto px-8 py-12 md:px-16 md:py-20 lg:px-24 lg:py-20 xl:px-32"
    >
      <SectionTitle 
        sectionTitle="Let's talk"
        sectionSubtitle="Hello! Let's talk about your new project"
      />
      
      <p class="mb-8">
        Fill in the form to contact me or send an email to
        <a
          href="mailto:yogaajie2@gmail.com"
          class="font-bold underline"
        >yogaajie2@gmail.com</a>
      </p>

      <form
        action=""
        class="mb-20 space-y-16"
      >
        <div class="space-y-8 md:flex md:items-center md:justify-between md:space-y-0">
          <input
            type="text"
            placeholder="What's your name?"
            class="bg-primary border-b"
          />

          <input
            type="email"
            placeholder="What's your email?"
            class="bg-primary border-b"
          />

          <textarea
            rows="5"
            placeholder="Tell me more about the project"
            class="bg-primary border-b"
          ></textarea>
        </div>

        <button class="cta group flex md:mx-auto">
          <span class="logo-on-hover hidden lg:block">//</span>
          <span class="shift-right-8 border-b border-tertiary translate-x-0">Send Message</span>
        </button>
      </form>

      <p class="border-t mb-16 pt-4">Or click the button below to view my resume</p>

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
