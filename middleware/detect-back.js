export default function({ app }) {
  var source, destination;

  app.router.beforeResolve((to, from, next) => {
    next();
    destination = to.path;
    console.log(source, destination);
  });

  app.router.afterEach((to, from) => {
    source = from.path;
  });

  // console.log('we came from ' + source + ', we are going to ' + destination);
}