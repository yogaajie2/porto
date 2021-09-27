<template>
  <div class="mb-20 lg:w-5/12">
    <img
      src="https://via.placeholder.com/1200x540"
      class="mb-12"
    />
    
    <h4>{{ project.overview.role }}</h4>

    <NuxtLink
      :to="`projects/${ project.id }`"
      @click.native="$nuxt.$emit('showTransition')"
    >
      <h2 class="text-tertiary lg:mb-4">{{ project.title }}</h2>
    </NuxtLink>

    <p class="none lg:block lg:text-gray-500 lg:text-xl">{{ project.overview.goal }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>