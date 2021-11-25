<template>
  <footer class="bg-primary-lighter">
    <div class="container mx-auto px-8 pt-12 pb-12 text-secondary md:px-16 lg:px-24 xl:px-32">
      <div class="space-y-8 md:space-y-24 lg:flex lg:items-center lg:justify-between lg:space-y-0">
        <div
          v-show="$nuxt.$route.path != '/contact'"
          class="md:text-center lg:text-left lg:space-y-0"
        >
          <h2 class="mb-8">Have a project?</h2>
          <CTA />
        </div>

        <div class="flex mb-12 space-x-16 text-lg md:justify-center md:space-x-24 xl:space-x-32">
          <nav class="flex flex-col space-y-4">
            <p class="font-bold mb-2">Social</p>

            <a
              href="https://www.instagram.com/yogaajie2/"
              target="_blank"
            >instagram</a>

            <a
              href="https://www.linkedin.com/in/yogajie"
              target="_blank"
            >linkedin</a>
            
            <a
              href="https://github.com/yogaajie2"
              target="_blank"
            >github</a>
          </nav>

          <nav class="flex flex-col space-y-4 md:text-right lg:text-left">
            <p class="font-bold mb-2">Navigation</p>

            <NuxtLink
              to="/about"
              @click.native="$nuxt.$emit('showTransition')"
            >about</NuxtLink>

            <NuxtLink
              to="/projects"
              @click.native="$nuxt.$emit('showTransition')"
            >projects</NuxtLink>

            <NuxtLink
              to="/contact"
              @click.native="$nuxt.$emit('showTransition')"
            >contact</NuxtLink>
          </nav>
        </div>
      </div>

      <div>
        <span class="block mt-32 font-heading text-sm text-center text-tertiary">// Carpe Momentum</span>
      </div>
    </div>
  </footer>
</template>