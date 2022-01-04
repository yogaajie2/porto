<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    root: {
      type: [Object],
      default: null,
      required: false
    },

    rootMargin: {
      type: [String, Number],
      default: '0px',
      required: false
    },

    threshold: {
      type: [Array, Number],
      default: 0,
      required: false
    }
  },

  data() {
    return {
      observer: null
    }
  },

  mounted() {
    let options = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver(entries => {
      this.$emit('on-intersecting', entries[0], this.unobserve);
    }, options);

    this.observer.observe(this.$el);
  },

  beforeDestroy() {
    if (this.observer) {
      this.unobserve,
      this.observer = null;
    }
  },

  methods: {
    unobserve() {
      this.observer.unobserve(this.$el);
    }
  }
}
</script>
