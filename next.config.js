// // next.config.js
// module.exports = {
//   i18n: {
//     // These are all the locales you want to support in
//     // your application
//     locales: ['en-US', 'fr', 'nl-NL'],
//     // This is the default locale you want to be used when visiting
//     // a non-locale prefixed path e.g. `/hello`
//     defaultLocale: 'en-US',
//     // This is a list of locale domains and the default locale they
//     // should handle (these are only required when setting up domain routing)
//     // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
//     domains: [
//       {
//         domain: 'http://localhost:3000/',
//         defaultLocale: 'en-US',
//       },
//       {
//         domain: 'http://localhost:3000/nl',
//         defaultLocale: 'nl-NL',
//       },
//       {
//         domain: 'http://localhost:3000/fr',
//         defaultLocale: 'fr',
//         // an optional http field can also be used to test
//         // locale domains locally with http instead of https
//         http: true,
//       },
//     ],
//   },
// }

module.exports = {
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'],
    defaultLocale: 'en-US',
  },
}