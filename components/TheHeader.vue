<template>
  <transition
    enter-class="-translate-y-full"
    enter-active-class="transition-transform duration-300 ease-in-out transform"
    enter-to-class="-translate-y-0"
    @after-enter="isLogoShown = true"
  >
    <header
      class="bg-primary-lighter fixed text-tertiary top-0 w-screen z-10 transition-transform duration-300 ease-in-out transform"
      v-show="isHeaderShown"
      :class="{ '-translate-y-full': isScrolledDown }"
    >
      <div class="flex h-20 items-center justify-between container mx-auto px-8 py-4 top-0 md:px-16 lg:px-24 lg:py-8 xl:px-32">
        <NuxtLink
          to="/"
          class="font-heading text-3xl"
          @click.native="$nuxt.$emit('showTransition')"
        >
          <transition
            enter-class="opacity-0"
            enter-active-class="transition-opacity duration-300"
            enter-to-class="opacity-100"
            @after-enter="isBrandShown = true"
          >
            <span
              v-show="isLogoShown"
              class="mr-2"
            >//</span>
          </transition>

          <transition
            enter-class="opacity-0 -translate-x-4"
            enter-active-class="transition duration-500 opacity-0 transform"
            enter-to-class="opacity-100 -translate-x-0"
            @after-enter="isMenuIconShown = true"
          >
            <span
              class="inline-block"
              v-show="isBrandShown"
            >Momentum</span>
          </transition>
        </NuxtLink>

        <transition
          enter-class="opacity-0 -translate-x-4"
          enter-active-class="transition duration-500 opacity-0 transform"
          enter-to-class="opacity-100 -translate-x-0"
        >
          <div
            class="menu-icon inline-block lg:hidden"
            v-show="isMenuIconShown"
            @click="toggleMenu"
          >
            <input
              class="menu-icon__cheeckbox"
              type="checkbox"
              :checked="isMenuIconChecked"
            />
            
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </transition>
        
        <div class="hidden lg:block">
          <Menu />
        </div>
      </div>

      <div
        class="bg-primary-lighter duration-300 ease-in-out fixed flex h-screen items-center justify-center -mt-20 text-2xl text-center text-secondary transform transition-transform w-full -z-10 lg:hidden"
        :class="{ 'translate-x-full': isMenuHidden }"
      >
        <Menu />
      </div>
    </header>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isScrolledDown: false,
      isHeaderShown: false,
      isBrandShown: false,
      isLogoShown: false,
      isMenuIconChecked: false,
      isMenuIconShown: false,
      isMenuHidden: true
    }
  },
  
  mounted() {
    this.$nuxt.$on('startHeaderAnimation', () => { this.isHeaderShown = true });
    
    this.$nuxt.$on('emitToggleMenu', () => {
      if (!this.isMenuHidden) { this.toggleMenu(); }
    });

    window.addEventListener('scroll', this.checkScrollDirection);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScrollDirection);
  },

  methods: {
    checkScrollDirection() {
      if (this.isMenuHidden) {
        this.isScrolledDown = window.oldScroll < window.scrollY;
        window.oldScroll = window.scrollY;
      }
    },

    toggleMenu() {
      this.isMenuHidden = !this.isMenuHidden;
      this.isMenuIconChecked = !this.isMenuIconChecked;
    },
  }
}
</script>

<style lang="scss" scoped>
/* Animated menu icon */
.menu-icon {
	position: relative;
	width: 50px;
	height: 50px;
	cursor: pointer;

	.menu-icon__cheeckbox {
		display: block;
		width: 100%;
		height: 100%;
		position: relative;
		cursor: pointer;
		z-index: 2;
		-webkit-touch-callout: none;
		position: absolute;
		opacity: 0;
	}
	div {
		margin: auto;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		width: 22px;
		height: 12px;
	}
	span {
		position: absolute;
		display: block;
		width: 100%;
		height: 2px;
		background-color: #A5F8D3;
		border-radius: 1px;
		transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

		&:first-of-type {
			top: 0;
		}
		&:last-of-type {
			bottom: 0;
		}
	}
	&.active,
	.menu-icon__cheeckbox:checked + div {
		span {
			&:first-of-type {
				transform: rotate(45deg);
				top: 5px;
			}
			&:last-of-type {
				transform: rotate(-45deg);
				bottom: 5px;
			}
		}
	}

	&.active:hover span:first-of-type,
	&.active:hover span:last-of-type,
	&:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
	&:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
		width: 22px;
	}

	&:hover {
		// no need hover effect on mobile.
		@media (min-width: 1024px) {
			span:first-of-type {
				width: 26px;
			}

			span:last-of-type {
				width: 12px;
			}
		}
	}
}
</style>
