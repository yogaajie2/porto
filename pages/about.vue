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

        <p>(Change this) I work from the user experience to the visual details and then transform these in working code. I am a minimal designer and I really like the simple and elegant style. I Worked with a range of clients focusing on web apps and platforms with <b>HCL</b> in partnership with <b>IBM</b>.</p>

        <!-- <p>I am the founder of <b>Persona</b> team a collective of corious people with a particular focus for design and development. My design is also featured in the book Interactive Design for Screen from Sandu Publishing.</p>

        <p>From 2019 I’m <b>Toptal Designer</b> and from 2020 a judge for <b>CSSfox</b></p> -->
      </div>
    </section>

    <Skills />
    <Process />
  </main>
</template>

<script>
export default {
  head: { titleTemplate: '%s | About' }
}
</script>
