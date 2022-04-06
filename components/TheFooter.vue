<template>
  <footer>    
    <section
      class="bg-dp-0 md:px-16 lg:px-24 xl:px-32"
      :class="{ 'bg-primary-dark': $nuxt.$route.path == '/contact' }"
    >
      <div class="container flex flex-col justify-center py-4 space-y-4">
        <nav class="flex justify-center text-xl">
          <a
            href="https://www.instagram.com/yogaajie2/"
            target="_blank"
            class="p-4 rounded transition duration-200 hover:text-primary"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
  
          <a
            href="https://www.linkedin.com/in/yogajie"
            target="_blank"
            class="p-4 rounded transition duration-200 hover:text-primary"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          
          <a
            href="https://github.com/yogaajie2"
            target="_blank"
            class="p-4 rounded transition duration-200 hover:text-primary"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </nav>
  
        <span class="block font-heading text-center">// Carpe Momentum</span>
      </div>
    </section>
  </footer>
</template>
