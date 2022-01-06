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
      
      <p class="mb-16 md:text-center lg:mb-16">Please fill in the form below to contact me</p>
      <ContactForm />
      <p class="border-t mb-16 pt-4 md:pt-8 md:text-center lg:mb-8 lg:pt-16">Or click the button below to view my resume</p>

      <IntersectionObserverTarget
        :threshold="1"
        @on-intersecting="handleIntersectingViewResume"
      >
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
      </IntersectionObserverTarget>
    </section>
  </main>
</template>

<script>
import emailjs from '@emailjs/browser';

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
    },

    handleIntersectingForm(entry, unobserve) {
      if (entry.isIntersecting) {
        this.isInputNameShown = true;
        unobserve();
      }
    },

    sendMessage() {
      emailjs.sendForm('service_gmail', 'contact_form', this.$refs.form, 'user_aylLAfpR2ogk8G3sb61Zz');
    },

    handleIntersectingViewResume(entry, unobserve) {
      if (entry.isIntersecting) {
        this.isViewResumeButtonShown = true;
        unobserve();
      }
    },
  }
}
</script>
