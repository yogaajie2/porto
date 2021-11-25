<template>
  <a
    v-if="$nuxt.$route.path == '/contact'"
    href="javascript:void(0)"
    class="items-center inline-flex"
    @click="$nuxt.$emit('emitScrollToContactForm')"
  >
    <p class="cta mr-4 text-tertiary">// Contact Me</p>

    <font-awesome-icon
      :icon="['fas', 'arrow-down']"
      class="up-and-down text-tertiary"
    />
  </a>

  <NuxtLink
    v-else
    to="/contact"
    @click.native="$nuxt.$emit('showTransition')"
    class="items-center inline-flex"
  >
    <p class="cta mr-4 text-tertiary">// Let's Work Together</p>

    <font-awesome-icon
      :icon="['fas', 'arrow-right']"
      class="back-and-forth text-tertiary"
    />
  </NuxtLink>
</template>
