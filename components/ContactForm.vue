<template>
  <form
    novalidate="true"
    class="mb-20 space-y-16 lg:mb-32 lg:space-y-32"
    @submit.prevent="validateForm"
  >
    <IntersectionObserverTarget
      :threshold="1"
      class="grid h-60 gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-y-32"
      @on-intersecting="handleIntersectingForm"
    >
      <FadeIn @after-enter="isInputEmailShown = true">
        <div
          v-if="isInputNameShown"
          key="input"
          class="relative"
        >
          <p
            v-show="isInputNameErrorShown"
            class="absolute -top-full text-xs animate-blink"
          >
            Please enter your name
          </p>

          <input
            v-model.lazy.trim="senderName"
            type="text"
            name="sender_name"
            placeholder="What's your name?"
            class="border-b h-full px-4 w-full bg-dp-0"
            @change="isInputNameErrorShown = false"
          >
        </div>

        <Placeholder
          v-else
          class="h-6"
        />
      </FadeIn>

      <FadeIn @after-enter="isTextAreaShown = true">
        <div
          v-if="isInputEmailShown"
          key="input"
          class="relative"
        >
          <p
            v-show="isInputEmailErrorShown"
            class="absolute -top-full text-xs animate-blink"
          >
            {{ emailError }}
          </p>

          <input
            v-model.lazy.trim="senderEmail"
            type="email"
            name="sender_email"
            placeholder="What's your email?"
            class="border-b h-full px-4 w-full bg-dp-0"
            @change="isInputEmailErrorShown = false"
          >
        </div>

        <Placeholder
          v-else
          class="h-6"
        />
      </FadeIn>

      <FadeIn @after-enter="isSendMessageButtonShown = true">
        <div
          v-if="isTextAreaShown"
          key="textarea"
          class="relative md:col-span-2"
        >
          <p
            v-show="isTextAreaErrorShown"
            class="absolute -top-6 text-xs animate-blink"
          >
            Please enter a message
          </p>

          <textarea
            v-model.lazy.trim="message"
            rows="5"
            name="message"
            placeholder="Tell me more about the project"
            class="border-b h-full px-4 w-full bg-dp-0"
            @change="isTextAreaErrorShown = false"
          />
        </div>

        <Placeholder
          v-else
          class="h-32"
        />
      </FadeIn>
    </IntersectionObserverTarget>

    <SlideRight>
      <button
        v-if="isSendMessageButtonShown"
        class="cta group flex md:mx-auto"
      >
        <span class="logo-on-hover hidden lg:block">//</span>
        <span class="shift-right-8 border-b border-primary translate-x-0">Send Message</span>
      </button>

      <div
        v-else
        class="h-6 lg:h-7"
      />
    </SlideRight>
  </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return{
      isInputNameShown: false,
      isInputEmailShown: false,
      isTextAreaShown: false,
      isSendMessageButtonShown: false,
      isInputNameErrorShown: false,
      isInputEmailErrorShown: false,
      isTextAreaErrorShown: false,
      senderName: null,
      senderEmail: null,
      message: null,
      emailError: null
    }
  },

  methods: {
    handleIntersectingForm(entry, unobserve) {
      if (entry.isIntersecting) {
        this.isInputNameShown = true;
        unobserve();
      }
    },

    validateForm() {
      if (!this.senderName) {
        this.isInputNameErrorShown = true;
        return;
      }

      if (!this.senderEmail) {
        this.isInputEmailErrorShown = true;
        this.emailError = 'Please enter your email';
        return;
      } else if (!this.validateEmail(this.senderEmail)) {
        this.isInputEmailErrorShown = true;
        this.emailError = 'Please enter a valid email address';
        return;
      }

      if (!this.message) {
        this.isTextAreaErrorShown = true;
        return;
      }

      this.sendMessage();
    },

    validateEmail(email) {
      const pattern = /\S+@\S+\.\S+/;

      if (pattern.test(email)) {
        return true;
      } else {
        return false;
      }
    },

    sendMessage() {
      emailjs.sendForm('service_gmail', 'contact_form', this.$el, 'user_aylLAfpR2ogk8G3sb61Zz')
        .then((result) => {
          this.$nuxt.$emit('emitShowToastMessage', result.status);
        }, (error) => {
          this.$nuxt.$emit('emitShowToastMessage', error.status);
        });
    }
  }
}
</script>
