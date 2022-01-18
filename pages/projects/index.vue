<template>
  <main>
    <PageHeader
      page-subtitle="Personal or together in teams."
      page-title="Every project a new opportunity."
    />

    <ProjectList />
    <BottomQuestion />
  </main>
</template>

<script>
export default {
  head: { titleTemplate: '%s | Projects' }
}
</script>
