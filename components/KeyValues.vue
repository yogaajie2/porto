<template>
  <section class="bg-primary container py-12 text-secondary md:py-16 lg:py-20 xl:py-24">
    <SectionTitle 
      sectionTitle="Key Values"
      sectionSubtitle="These are the key values I follow when I write or develop code"
    />

    <div class="grid text-center gap-16 lg:grid-cols-2 lg:gap-24">
      <div>
        <font-awesome-icon
          :icon="['fas', 'balance-scale']"
          size="3x"
          class="mb-4 mx-auto"
        />

        <h5 class="mb-8 lg:text-3xl xl:text-4xl">Balance</h5>
        <p class="leading-loose text-gray-500 lg:leading-8 lg:text-lg xl:text-xl">I always try to strike the ideal balance between design and functionality. Which requires me to precisely bridge the gap between designers and back-end developers.</p>
      </div>

      <div>
        <font-awesome-icon
          :icon="['fas', 'shapes']"
          size="3x"
          class="mb-4 mx-auto"
        />

        <h5 class="mb-8 lg:text-3xl xl:text-4xl">Scalability</h5>
        <p class="leading-loose text-gray-500 lg:leading-8 lg:text-lg xl:text-xl">I believe code modularity and reusability is the future of web development. I often split my code into reusable components for improved scalability. Making it easier to maintain and faster to implement new features.</p>
        <!-- <p class="leading-loose text-gray-500 lg:leading-8 lg:text-lg xl:text-xl">Maintaining a massively monolithic code base across teams and developers alike is a slow and complicated process. That's why I believe code modularity and reusability is the future of web development. I often split my code into reusable components for improved scalability. Making it easier to maintain and faster to implement new features.</p> -->
      </div>

      <div>
        <font-awesome-icon
          :icon="['fas', 'cogs']"
          size="3x"
          class="mb-4 mx-auto"
        />

        <h5 class="mb-8 lg:text-3xl xl:text-4xl">Compatibility</h5>
        <p class="leading-loose text-gray-500 lg:leading-8 lg:text-lg xl:text-xl">Users nowadays use a wide variety of ways to access the web. That's why it is important for my code to run smoothly across different devices and browsers, old and new.</p>
      </div>

      <div>
        <font-awesome-icon
          :icon="['fas', 'tachometer-alt']"
          size="3x"
          class="mb-4 mx-auto"
        />

        <h5 class="mb-8 lg:text-3xl xl:text-4xl">Performance</h5>
        <p class="leading-loose text-gray-500 lg:leading-8 lg:text-lg xl:text-xl">Speed is key when visiting websites. Users expect them to load in seconds. That's why I always try to keep load times fast and file sizes tiny.</p>
      </div>
    </div>
  </section>
</template>