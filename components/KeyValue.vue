<template>
  <IntersectionObserverTarget
    :threshold="1"
    class="h-88 md:h-57 lg:h-81 xl:h-76"
    @on-intersecting="handleIntersecting"
  >
    <ZoomIn @after-enter="isPlaceholderShown = false; isNameShown = true;">
      <font-awesome-icon
        v-if="isIconShown"
        :icon="['fas', icon]"
        size="3x"
        class="mb-4 mx-auto"
      />
    </ZoomIn>
  
    <transition
      enter-class="opacity-0 -translate-y-4"
      enter-active-class="transition transform duration-500"
      enter-to-class="opacity-100 -translate-y-0"
      @after-enter="isDescriptionShown = true"
    >
      <h5
        v-if="isNameShown"
        class="mb-8 lg:text-3xl xl:text-4xl"
      >
        {{ name }}
      </h5>
    </transition>
    
    <FadeIn>
      <p
        v-if="isDescriptionShown"
        class="leading-loose text-gray-500 lg:leading-8 lg:text-lg xl:text-xl"
      >
        {{ description }}
      </p>
    </FadeIn>
  </IntersectionObserverTarget>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isIconShown: false,
      isNameShown: false,
      isDescriptionShown: false
    }
  },

  methods: {
    handleIntersecting(entry, unobserve) {
      if (entry.isIntersecting) {
        this.isIconShown = true;
        unobserve();
      }
    }
  }
}
</script>
