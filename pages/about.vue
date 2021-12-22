<template>
  <main>
    <PageHeader
      pageSubtitle="Fast learning and highly adaptable."
      pageTitle="Always curious, constantly learning."
    />

      <SectionTitle 
        sectionTitle="About me"
        sectionSubtitle="Hello, I am Yoga Prasetya"
      />
      
      <img
        src="https://i.imgur.com/5ioqq3c.png"
        class="mb-8"
      />
      
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
