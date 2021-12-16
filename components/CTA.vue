<template>
  <a
    v-if="$nuxt.$route.path == '/contact'"
    href="javascript:void(0)"
    class="cta group items-center inline-flex"
    @click="$nuxt.$emit('emitScrollToContactForm')"
  >
    <span class="logo-on-hover">//</span>

    <div class="shift-right-8 flex items-center">
      <p class="mr-4">Contact Me</p>
  
      <font-awesome-icon
        :icon="['fas', 'arrow-down']"
        class="up-and-down"
      />
    </div>
  </a>

  <NuxtLink
    v-else
    to="/contact"
    @click.native="$nuxt.$emit('showTransition')"
    class="cta group items-center inline-flex"
  >
    <span class="logo-on-hover">//</span>

    <div class="shift-right-8 flex items-center">
      <p class="mr-4">Let's Work Together</p>
  
      <font-awesome-icon
        :icon="['fas', 'arrow-right']"
        class="back-and-forth"
      />
    </div>
  </NuxtLink>
</template>
