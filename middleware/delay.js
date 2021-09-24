export default function({ app }) {
  app.router.beforeResolve((to, from, next) => {
    setTimeout(() => {
      next();
    }, 50);
  });
}