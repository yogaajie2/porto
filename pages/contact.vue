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
      <h3 class="mb-4">Let's talk</h3>
      <h2 class="mb-20 lg:text-5xl xl:text-6xl">Hello! Let's talk about your new project</h2>
      
      <p class="mb-8">
        Fill in the form to contact me or send an email to
        <a
          href="mailto:yogaajie2@gmail.com"
          class="font-bold underline"
        >yogaajie2@gmail.com</a>
      </p>

      <form
        action=""
        class="space-y-16"
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

        <button class="block cta md:mx-auto">Send Message</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  head: { titleTemplate: '%s | Contact' }
};
</script>
