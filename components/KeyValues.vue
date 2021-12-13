<template>
  <section class="bg-primary container mx-auto px-8 py-12 text-secondary md:p-16 lg:px-24 lg:py-20 xl:px-32">
    <h3 class="mb-4">Key Values</h3>
    <h2 class="mb-20 lg:text-5xl xl:text-6xl">These are the key values I follow when I write or develop codes</h2>

    <div class="text-center space-y-16 lg:flex lg:flex-wrap lg:space-y-0">
      <div class="lg:mb-24 lg:w-1/2">
        <font-awesome-icon
          :icon="['fas', 'balance-scale']"
          size="3x"
          class="mb-4 mx-auto"
        />

        <h5 class="mb-8">Balance</h5>
        <p class="leading-loose text-gray-500 lg:leading-8 lg:mx-auto lg:text-xl lg:w-4/5">I always try to strike the ideal balance between design and functionality. Which requires me to precisely bridge the gap between designers and back-end developers.</p>
      </div>

      <div class="lg:mb-24 lg:w-1/2">
        <font-awesome-icon
          :icon="['fas', 'shapes']"
          size="3x"
          class="mb-4 mx-auto"
        />

        <h5 class="mb-8">Scalability</h5>
        <p class="leading-loose text-gray-500 lg:leading-8 lg:mx-auto lg:text-xl lg:w-4/5">I believe code modularity and reusability is the future of web development. I often split my code into reusable components for improved scalability. Making it easier to maintain and faster to implement new features.</p>
        <!-- <p class="leading-loose text-gray-500 lg:leading-8 lg:mx-auto lg:text-xl lg:w-4/5">Maintaining a massively monolithic code base across teams and developers alike is a slow and complicated process. That's why I believe code modularity and reusability is the future of web development. I often split my code into reusable components for improved scalability. Making it easier to maintain and faster to implement new features.</p> -->
      </div>

      <div class="lg:w-1/2">
        <font-awesome-icon
          :icon="['fas', 'cogs']"
          size="3x"
          class="mb-4 mx-auto"
        />

        <h5 class="mb-8">Compatibility</h5>
        <p class="leading-loose text-gray-500 lg:leading-8 lg:mx-auto lg:text-xl lg:w-4/5">Users nowadays use a wide variety of ways to access the web. That's why it is important for my code to run smoothly across different devices and browsers, old and new.</p>
      </div>

      <div class="lg:w-1/2">
        <font-awesome-icon
          :icon="['fas', 'tachometer-alt']"
          size="3x"
          class="mb-4 mx-auto"
        />

        <h5 class="mb-8">Performance</h5>
        <p class="leading-loose text-gray-500 lg:leading-8 lg:mx-auto lg:text-xl lg:w-4/5">Speed is key when visiting websites. Users expect them to load in seconds. That's why I always try to keep load times fast and file sizes tiny.</p>
      </div>
    </div>
  </section>
</template>