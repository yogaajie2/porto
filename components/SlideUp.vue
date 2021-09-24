<template>
  <transition
    enter-class="opacity-0 translate-y-4"
    enter-active-class="transition transform duration-500"
    enter-to-class="opacity-100 translate-y-0"
    v-on="$listeners"
  >
    <slot></slot>
  </transition>  
</template>
