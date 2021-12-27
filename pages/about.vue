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
      
      <div class="flex flex-col space-y-8 md:space-y-12 lg:flex-row lg:space-x-12 lg:space-y-0 xl:space-x-40">
        <img
          src="https://i.imgur.com/5ioqq3c.png"
          class="md:mx-auto md:w-1/2 lg:w-2/5 xl:w-1/3"
        />
        
        <div class="space-y-4 lg:space-y-8 xl:text-lg">
          <p>I am a front-end developer based in the Greater Jakarta Area, Indonesia where I have been working for more than 2 years.</p>
          <p>I have worked on projects both personally and together in teams, and I consider every project as an opportunity to learn, collaborate, and further improve my skills.</p>
          <p>I primarily use <a href="https://vuejs.org/" target="_blank" class="underline transition-colors duration-200 hover:text-tertiary">Vue.js</a> together with <a href="https://nuxtjs.org/" target="_blank" class="underline transition-colors duration-200 hover:text-tertiary">Nuxt.js</a> as the go-to framework. I also prefer using <a href="https://tailwindcss.com/" target="_blank" class="underline transition-colors duration-200 hover:text-tertiary">Tailwind CSS</a> to help maintain my design systems.</p>
          <p>I emphasize the use of subtle motions and animations in my projects to spice up static and dull UI/UX a little bit.</p>
        </div>
      </div>
    </section>

    <Skills />
    <KeyValues />
    <BottomQuestion />
  </main>
</template>

<script>
export default {
  head: { titleTemplate: '%s | About' }
}
</script>
