module.exports = {
  title: 'Paul Xu\'s data science blog',
  base: '/',
  dest: 'public',
  description: 'Blogs by Paul Xu, data scientist at The Policy Lab at Brown University',
  logo: '/assets/img/logo.png',
  logoAlt: '/assets/img/logo-bottom.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Paul Xu',
      avatar: '/assets/img/myAvatar.png',
      link: 'https://thepolicylab.brown.edu/team/paul-xu/',
      linktext: 'Follow',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/wowthemesnet/mediumish-vuepress-blog-theme',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/paulxubc/',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/paulxu_bc',
        },
        {
          type: 'web',
          link: 'https://thepolicylab.brown.edu/team/paul-xu/',
        }
      ],
      copyright: [
        {
          text: 'Copyright © Paul Xu 2020.',
          link: '#',
        },
        {
          text: 'Made with Mediumish - free Vuepress theme',
          link: 'https://bootstrapstarter.com/bootstrap-templates/vuepress-theme-mediumish/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://digicosmos86.github.io/datascience-blog'
    },
    comment: {
      service: 'Github Pages',
      shortname: 'blogsite',
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://digicosmos86.github.io/datascience-blog',
    },
    smoothScroll: true
  },
}
