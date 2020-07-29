let ogprefix = 'og: http://ogp.me/ns#'
let title = 'En Tu Casa Whistler'
let description = 'En Tu Casa Whistler - Spanish Cooking - Whistler delivery - Catering - 6043888086'
let color = '#ffa31a'

module.exports = {
  title: 'En Tu Casa Whistler',
  description: 'Spanish Cooking',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    logo: '/img/nav-bar/entucasa-logo.png',
    docsDir: 'src',
    nav: [
      {text: 'HOME', link: '/'},
      {text: 'DELIVERY MENU', link: '/delivery-menu/'},
      {text: 'FRESH MADE PAELLA', link: '/fresh-made-paella/'},
      {text: 'CONTACT', link: '/contact/'},
      {text: 'ABOUT', link: '/about/'}
    ],
    // sidebar: [
    //   ['/catering/boards_tables_platters/', 'BOARDS/TABLES/PLATTERS'],
    //   ['/catering/appetizers/', 'APPETIZERS'],
    //   ['/catering/tapas/', 'TAPAS'],
    //   ['/catering/salads/', 'SALADS'],
    //   ['/catering/bocadillos/', 'BOCADILLOS'],
    //   ['/catering/sandwiches/', 'SANDWICHES'],
    //   ['/catering/mains/', 'MAINS'],
    //   ['/catering/desserts/', 'DESSERTS'],
    // ],
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-60085396-9'
      }
    ],
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ],
    [
      'robots',
      {
        /**
         * @host
         * Mandatory, You have to provide the host URL
         */
        host: 'https://www.entucasawhistler.com/',
        /**
         * @disallowAll
         * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
         */
        disallowAll: false,
        /**
         * @allowAll
         * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
         */
        allowAll: true,
        /**
         * @sitemap
         * Optional, by default: sitemap.xml
         */
        sitemap: '/sitemap.xml',
        /**
         * @policies
         * Optional, by default: null
         */
        policies: [
          {
            userAgent: '*',
            disallow: [],
            allow: ['/']
          }
        ]
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://www.entucasawhistler.com/'
      },
    ]
  ],
  head: [
    ['link', {rel: 'icon', href: `/img/favicon.png`}],
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}],
    ['meta', {name: 'theme-color', content: color}],
    ['meta', {prefix: ogprefix, property: 'og:locale', content: 'en_CA'}],
    ['meta', {prefix: ogprefix, property: 'og:title', content: title}],
    ['meta', {prefix: ogprefix, property: 'twitter:title', content: title}],
    ['meta', {prefix: ogprefix, property: 'og:type', content: 'website'}],
    ['meta', {prefix: ogprefix, property: 'og:url', content: 'https://www.entucasawhistler.com/'}],
    ['meta', {prefix: ogprefix, property: 'og:description', content: description}],
    ['meta', {prefix: ogprefix, property: 'og:image', content: 'https://www.entucasawhistler.com//img/meta-tags/entucasa-logo-preview.png'}],
    ['script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHVHNGK');`]
  ],
}
