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
      {text: 'WHISTLER DELIVERY', link: '/delivery-menu/'},
      {text: 'CATERING MENU', link: '/catering/'},
      {text: 'SERVICES', link: '/services/'},
      {text: 'CONTACT', link: '/contact/'},
      {text: 'ABOUT', link: '/about/'}
    ],
    sidebar: [
      ['/catering/boards_tables_platters/', 'BOARDS/TABLES/PLATTERS'],
      ['/catering/appetizers/', 'APPETIZERS'],
      ['/catering/tapas/', 'TAPAS'],
      ['/catering/salads/', 'SALADS'],
      ['/catering/bocadillos/', 'BOCADILLOS'],
      ['/catering/sandwiches/', 'SANDWICHES'],
      ['/catering/mains/', 'MAINS'],
      ['/catering/desserts/', 'DESSERTS'],
    ],
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
        'ga': ''
        // UA-00000000-0
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
        // type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
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
        host: 'https://entucasa.netlify.com/',
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
        hostname: 'https://entucasa.netlify.com/'
      },
    ]
  ],
  head: [
    ['link', {rel: 'icon', href: `/img/logos/favicon.png`}],
    ['meta', {name: 'theme-color', content: color}],
    ['meta', {prefix: ogprefix, property: 'og:locale', content: 'en_CA'}],
    ['meta', {prefix: ogprefix, property: 'og:title', content: title}],
    ['meta', {prefix: ogprefix, property: 'twitter:title', content: title}],
    ['meta', {prefix: ogprefix, property: 'og:type', content: 'website'}],
    ['meta', {prefix: ogprefix, property: 'og:url', content: 'https://entucasa.netlify.com'}],
    ['meta', {prefix: ogprefix, property: 'og:description', content: description}],
    ['meta', {prefix: ogprefix, property: 'og:image', content: 'https://entucasa.netlify.com/img/meta-tags/entucasa-logo-preview.png'}]
    // ['meta', {prefix: ogprefix, property: 'og:image', content: 'https://entucasa.netlify.com/img/logos/Rebrand_etc11.jpg'}]
  ],
}
