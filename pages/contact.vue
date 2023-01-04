<template>
  <main>
    <PageHeader
      page-subtitle="Let's work and collaborate together."
      page-title="Have an interesting project in mind?"
    />

    <section
      id="contactForm"
      class="container py-12 md:py-20"
    >
      <SectionTitle 
        section-title="Let's talk"
        section-subtitle="Hello! Let's talk about your new project"
      />
      
      <p class="mb-16 md:text-center lg:mb-16">
        Please fill in the form below to contact me
      </p>

      <ContactForm />

      <p class="border-t mb-16 pt-4 md:pt-8 md:text-center lg:mb-8 lg:pt-16">
        Or click the button below to view my resume
      </p>

      <IntersectionObserverTarget
        :threshold="1"
        @on-intersecting="handleIntersectingViewResume"
      >
        <a
          href="https://drive.google.com/file/d/17FxvuFPRJ28ybmrXuwkXMqyFU-jsvIQ5/view?usp=share_link"
          target="_blank"
          class="h-7"
        >
          <SlideRight>
            <button
              v-if="isViewResumeButtonShown"
              class="cta group flex md:mx-auto"
            >
              <span class="logo-on-hover hidden lg:block">//</span>
              <span class="shift-right-8 border-b border-primary translate-x-0">View Resume</span>
            </button>
          </SlideRight>
        </a>
      </IntersectionObserverTarget>
    </section>

    <transition
      enter-class="opacity-0 translate-y-4"
      enter-active-class="transition transform duration-500"
      enter-to-class="opacity-100 translate-y-0"
      leave-class="opacity-100 translate-y-0"
      leave-active-class="transition transform duration-3000"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isToastMessageShown"
        class="fixed w-screen bottom-12"
      >
        <div class="container">
          <div class="rounded h-1/2 p-4 w-full z-6 text-center bg-dp-6 lg:mx-auto lg:w-3/4">
            <p class="mb-4 font-bold">
              {{ toastMessageStatus }}
            </p>
            <p>{{ toastMessageContent }}<br>Thank you!</p>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
export default {
  data() {
    return{
      isViewResumeButtonShown: false,
      isToastMessageShown: false,
      toastMessageStatus: null,
      toastMessageContent: null
    }
  },

  head: { titleTemplate: '%s | Contact' },

  mounted() {
    this.$nuxt.$on('emitScrollToContactForm', this.scrollToContactForm);
    this.$nuxt.$on('emitShowToastMessage', status => {
      this.showToastMessage(status);
    });
  },

  methods: {
    scrollToContactForm() {
      this.$el.querySelector('#contactForm').scrollIntoView({
        behavior: 'smooth'
      });
    },

    showToastMessage(status) {
      if (status === 200) {
        this.toastMessageStatus = 'Message sent!';
        this.toastMessageContent = 'I will reply to your message soon.';
      } else {
        this.toastMessageStatus = 'Message not sent!';
        this.toastMessageContent = 'Please try again later.';
      }

      this.isToastMessageShown = true;

      setTimeout(() => {
        this.isToastMessageShown = false;
      }, 3000);
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
