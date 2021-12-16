<template>
  <nav class="flex flex-col space-y-8 font-heading text-tertiary lg:flex-row lg:space-x-16 lg:space-y-0">
    <NuxtLink
      to="/about"
      class="group flex items-center justify-center lg:justify-start"
    >
      <span class="logo-on-hover hidden lg:block">//</span>
      <span class="shift-right-6 translate-x-0">About</span>
    </NuxtLink>

    <NuxtLink
      to="/projects"
      class="group flex items-center justify-center lg:justify-start"
    >
      <span class="logo-on-hover hidden lg:block">//</span>
      <span class="shift-right-6 translate-x-0">Projects</span>
    </NuxtLink>

    <NuxtLink
      to="/contact"
      class="group flex items-center justify-center lg:justify-start"
    >
      <span class="logo-on-hover hidden lg:block">//</span>
      <span class="shift-right-6 translate-x-0">Contact</span>
    </NuxtLink>
  </nav>
</template>
