import { registerApplication, start } from "single-spa";
import registrations from '../applications.json'; 

// fetch('https://run.mocky.io/v3/b2ed2729-fd28-4a2b-bc5b-987e3e69cc3d')
//   .then(resp => resp.json())
//   .then(data => {
//     data.applications.forEach(app => {
//       registerApplication({
//         name: app.name,
//         app: () => System.import(app.package),
//         activeWhen: app.exact
//           ? (location) => location.pathname === app.activeWhen
//           : [app.activeWhen]
//       });
//     })
//   })
//   .finally(() => {
//     start({
//       urlRerouteOnly: true,
//     })
//   })

registrations.applications.forEach(app => {
  registerApplication({
    name: app.name,
    app: () => System.import(app.package),
    activeWhen: app.exact
      ? (location) => location.pathname === app.activeWhen
      : [app.activeWhen]
  });
})

start({
  urlRerouteOnly: true,
});

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () => System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"),
//     activeWhen: (location) => location.pathname === '/', 
// });

// registerApplication({
//   name: "@dr/react-single",
//   app: () => System.import("@dr/react-single"),
//   activeWhen: (location) => location.pathname === '/react-single',
// });

// registerApplication({
//   name: "@dr/react-multiples",
//   app: () => System.import("@dr/react-multiples"),
//   activeWhen: ['/react-multiples'],
// });

// registerApplication({
//   name: "@dr/react-lazy",
//   app: () => System.import("@dr/react-lazy"),
//   activeWhen: ['/react-lazy'],
// });

// registerApplication({
//   name: "@dr/react-route",
//   app: () => System.import("@dr/react-route"),
//   activeWhen: (location) => location.pathname === '/react-route',
// });

// registerApplication({
//   name: "@dr/react-header",
//   app: () => System.import("@dr/react-header"),
//   activeWhen: ['/'],
// });

// start({
//   urlRerouteOnly: true,
// });