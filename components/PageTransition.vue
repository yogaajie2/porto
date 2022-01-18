<template>
  <div>
    <div
      v-show="isStillRevealing"
      class="fixed flex h-screen top-0 w-screen z-20"
    >
      <transition
        name="reveal-left"
        @after-enter="$nuxt.$emit('emitToggleMenu')"
        @leave="$nuxt.$emit('emitShowContents')"
        @after-leave="isStillRevealing = false"
      >
        <div
          v-show="isRevealed"
          class="curtain-left bg-primary-lightest w-full"
        />
      </transition>

      <transition name="reveal-right">
        <div
          v-show="isRevealed"
          class="curtain-right bg-primary-lightest w-full"
        />
      </transition>
    </div>

    <div
      v-show="isFirstLoad"
      class="fixed flex h-screen items-center justify-center top-0 w-screen z-20"
    >
      <span class="animate-fade-in-out font-heading text-5xl text-tertiary md:text-6xl xl:text-7xl">//</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFirstLoad: true,
      isRevealed: true,
      isStillRevealing: true
    }
  },

  mounted() {
    this.$nuxt.$on('showTransition', this.cover);
    this.reveal();
  },

  methods: {
    reveal() {
      if (this.isFirstLoad) {
        setTimeout(() => {
          this.isRevealed = false;
          this.scrollToTop();
          this.isFirstLoad = false;
        }, 3000);
      } else {
        setTimeout(() => {
          this.isRevealed = false;
          this.scrollToTop();
        }, 500);
      }
    },

    cover() {
      this.isStillRevealing = true;
      this.isRevealed = true;
      this.reveal();
    },

    scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
}
</script>

<style scoped>
.curtain-left,
.curtain-right {
  transform: scaleX(4.5) skewX(-8deg);
}

.reveal-right-enter-active,
.reveal-left-enter-active,
.reveal-right-leave-active,
.reveal-left-leave-active {
  transition: transform 400ms ease-out;
}

.reveal-left-enter,
.reveal-left-leave-to {
  transform: translateX(-400%) scaleX(4.5) skewX(-8deg);
}

.reveal-right-enter,
.reveal-right-leave-to {
  transform: translateX(400%) scaleX(4.5) skewX(-8deg);
}
</style>
