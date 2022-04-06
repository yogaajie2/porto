<template>
  <section class="bg-dp-0">
    <div class="container py-12 md:py-16 lg:py-20 xl:py-24">
      <SectionTitle 
        section-title="Key Values"
        section-subtitle="These are the key values I follow when I write code"
      />
  
      <div class="grid text-center gap-16 lg:grid-cols-2 lg:gap-24">
        <KeyValue
          v-for="(value, index) in values"
          :key="index"
          :icon="value.icon"
          :name="value.name"
          :description="value.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      values: [
        {
          icon: 'balance-scale',
          name: 'Balance',
          description: 'I always try to strike the ideal balance between design and functionality. Which requires me to precisely bridge the gap between designers and back-end developers.'
        },

        {
          icon: 'shapes',
          name: 'Scalability',
          description: 'I believe code modularity and reusability is the future of web development. I often split my code into reusable components for improved scalability. Making it easier to maintain and faster to implement new features.'
        },

        {
          icon: 'cogs',
          name: 'Compatibility',
          description: 'Users nowadays use a wide variety of ways to access the web. That\'s why it is important for my code to run smoothly across different devices and browsers.'
        },

        {
          icon: 'tachometer-alt',
          name: 'Performance',
          description: 'Speed is key when visiting websites. Users expect them to load in seconds. Which is the reason why I always try to keep load times fast and file sizes tiny.'
        },
      ]
    }
  }
}
</script>
