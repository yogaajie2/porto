export default function({ app }) {
  app.router.beforeResolve((to, from, next) => {
    $nuxt.$emit('showTransition');
    next();

    // function delay(time) {
    //   return new Promise(resolve => setTimeout(resolve, time));
    // }

    // delay(200).then(() => next());
  });
}
