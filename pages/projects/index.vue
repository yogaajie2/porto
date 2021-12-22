<template>
  <main>
    <PageHeader
      pageSubtitle="Personal or together in teams."
      pageTitle="Every project a new opportunity."
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
