<template>
  <nav class="flex flex-col space-y-8 text-tertiary lg:flex-row lg:space-x-8 lg:space-y-0">
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
</template>
