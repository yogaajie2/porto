<template>
  <transition
    enter-class="opacity-0 -translate-x-4"
    enter-active-class="transition transform duration-500"
    enter-to-class="opacity-100 -translate-x-0"
  >
    <slot />
  </transition>
</template>
