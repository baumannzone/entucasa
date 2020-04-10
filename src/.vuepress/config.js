module.exports = {
  title: 'En Tu Casa Whistler',
  description: 'Home Cooking',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    docsDir: 'src',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Menu', link: '/menu/'},
      {text: 'Services', link: '/services/'},
      {text: 'Contact', link: '/contact/'},
      {text: 'About', link: '/about/'}
    ],
    // repo: 'baumannzone/entucasa',
    // editLinks: true,
    // editLinkText: 'Editar en GitHub',
    // nextLinks: true,
    // prevLinks: true,
    // lastUpdated: 'Última actualización', // string | boolean
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'About', link: '/about/' }
    // ],
    smoothScroll: true,
    // searchPlaceholder: 'Search...'
  },
  plugins: [
    '@vuepress/back-to-top',

    // [ '@vuepress/google-analytics', { 'ga': 'UA-150935641-1' } ],
    // [
    //   '@vuepress/last-updated',
    //   {
    //     transformer: ( timestamp, lang ) => {
    //       const moment = require( 'moment' )
    //       moment.locale( 'es' )
    //       return moment( timestamp ).fromNow()
    //     }
    //   }
    // ],
    // 'vuepress-plugin-reading-time'
  ]
}
