<template>
  <transition
    enter-class="opacity-0"
    enter-active-class="transition-opacity duration-300"
    enter-to-class="opacity-100"
    v-on="$listeners"
  >
    <slot></slot>
  </transition>  
</template>
