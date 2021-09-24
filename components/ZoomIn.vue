<template>
  <transition
    enter-class="opacity-0 scale-75"
    enter-active-class="transition transform duration-500"
    enter-to-class="opacity-100 scale-100"
    v-on="$listeners"
  >
    <slot></slot>
  </transition>
</template>
