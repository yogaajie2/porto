<template>
  <div>
    <h3 class="mb-4">
      {{ sectionTitle }}
    </h3>
    <h2 class="mb-20">
      {{ sectionSubtitle }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      required: true
    },

    sectionSubtitle: {
      type: String,
      required: true
    }
  }
}
</script>
