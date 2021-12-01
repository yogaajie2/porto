<template>
  <main>
    <PageHeader
      pageSubtitle="Fast learning and highly adaptable."
      pageTitle="Always curious, constantly learning."
    />

    <section class="container mx-auto px-8 py-12 md:px-16 lg:px-24 xl:px-32">
      <h3>About me</h3>
      <h2 class="mb-12 lg:text-5xl xl:text-6xl">Hello, I am Yoga Prasetya.</h2>
      
      <div class="space-y-4">
        <p>I am a front-end developer based in the Greater Jakarta Area, Indonesia where I have been working for more than 2 years.</p>
        <p>I have worked on projects both personally and together in teams, and I consider every project as an opportunity to learn, collaborate, and further improve my skills.</p>
        <!-- Add one more paragraph here -->
      </div>
    </section>

    <Skills />
    <KeyValues />
  </main>
</template>

<script>
export default {
  head: { titleTemplate: '%s | About' }
}
</script>
