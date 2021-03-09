import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
    activeWhen: (location) => location.pathname === '/', 
});

registerApplication({
  name: "@dr/react-single",
  app: () => System.import("@dr/react-single"),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@dr/react-multiples",
  app: () => System.import("@dr/react-multiples"),
  activeWhen: ['/react-multiples'],
});

registerApplication({
  name: "@dr/react-lazy",
  app: () => System.import("@dr/react-lazy"),
  activeWhen: ['/react-lazy'],
});

registerApplication({
  name: "@dr/react-route",
  app: () => System.import("@dr/react-route"),
  activeWhen: (location) => location.pathname === '/react-route',
});

registerApplication({
  name: "@dr/react-header",
  app: () => System.import("@dr/react-header"),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
