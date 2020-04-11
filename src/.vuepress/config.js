module.exports = {
  title: 'En Tu Casa Whistler',
  description: 'Home Cooking',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/img/logo.png',
    docsDir: 'src',
    nav: [
      {text: 'Casa', link: '/'},
      {text: 'Menu', link: '/menu/'},
      {text: 'Services', link: '/services/'},
      {text: 'Contact', link: '/contact/'},
      {text: 'About', link: '/about/'}
    ],
    sidebar: [
      '/about/',
      '/menu/',
      ['/services/', 'Explicit link text']
    ],
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,
  },
  plugins: [
    '@vuepress/back-to-top',
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
    ]
  ]
}
